import request from 'supertest';
import app from '../app'; // Our refactored, serverless app
import { EmailService } from '../services/EmailService';
import http from 'http'; // <--- ماژول http را اضافه کنید

// Mock the service layer
jest.mock('../services/EmailService');
const mockSendEmail = EmailService.prototype.sendEmail as jest.Mock;

// متغیری برای نگهداری سرور تعریف کنید
let server: http.Server;

// قبل از شروع همه تست‌ها، سرور را راه‌اندازی کنید
beforeAll((done) => {
  server = app.listen(0, done); // به یک پورت رندوم گوش بده
});

// بعد از پایان همه تست‌ها، سرور را ببندید
afterAll((done) => {
  server.close(done);
});

describe('POST /api/v1/email/send', () => {
  beforeEach(() => {
    mockSendEmail.mockClear();
  });

  it('should return 200 OK and a success message for a valid request', async () => {
    const requestBody = {
      to: 'test@example.com',
      subject: 'Integration Test',
      message: 'This is a test message.',
    };

    mockSendEmail.mockResolvedValue('mock-message-id');

    // به جای app، از سرور برای ارسال درخواست استفاده کنید
    const response = await request(server)
      .post('/api/v1/email/send')
      .send(requestBody);

    expect(response.status).toBe(200);
    expect(response.body.data.messageId).toBe('mock-message-id');
  });

  it('should return 400 Bad Request if "to" field is missing', async () => {
    const requestBody = {
      subject: 'Integration Test',
      message: 'This is a test message.',
    };

    const response = await request(server) // <-- از سرور استفاده کنید
      .post('/api/v1/email/send')
      .send(requestBody);

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('Missing required fields');
  });

  it('should return 500 Internal Server Error if the service fails', async () => {
    const requestBody = {
      to: 'test@example.com',
      subject: 'Failure Test',
      message: 'This should fail.',
    };

    mockSendEmail.mockRejectedValue(new Error('Internal Service Error'));

    const response = await request(server) // <-- از سرور استفاده کنید
      .post('/api/v1/email/send')
      .send(requestBody);

    expect(response.status).toBe(500);
    expect(response.body.error).toContain('internal server error');
  });
});
