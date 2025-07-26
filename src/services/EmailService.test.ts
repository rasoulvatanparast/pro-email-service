import nodemailer from 'nodemailer';
import { EmailService } from './EmailService';
import { config } from '../config';

// Mock the nodemailer library
jest.mock('nodemailer');

// Cast the mocked nodemailer to its Jest mock type
const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

describe('EmailService', () => {
  let emailService: EmailService;
  let mockSendMail: jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockSendMail = jest
      .fn()
      .mockResolvedValue({ messageId: 'test-message-id' });

    mockedNodemailer.createTransport.mockReturnValue({
      sendMail: mockSendMail,
    } as any);

    emailService = new EmailService();
  });

  it('should create a transporter with correct config', () => {
    expect(mockedNodemailer.createTransport).toHaveBeenCalledWith({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.secure,
      tls: config.email.tls,
    });
  });

  it('should send an email with correct parameters', async () => {
    const emailData = {
      to: 'test@example.com',
      subject: 'Test Subject',
      body: 'Test Body',
    };

    await emailService.sendEmail(emailData);

    expect(mockSendMail).toHaveBeenCalledWith({
      from: config.email.defaultFrom,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.body,
      html: `<p>${emailData.body}</p>`,
    });
  });

  it('should return the messageId on successful sending', async () => {
    const emailData = { to: 'test@example.com', subject: 's', body: 'b' };
    const messageId = await emailService.sendEmail(emailData);
    expect(messageId).toBe('test-message-id');
  });

  it('should throw an error if sending fails', async () => {
    const emailData = { to: 'test@example.com', subject: 's', body: 'b' };
    mockSendMail.mockRejectedValue(new Error('SMTP Error'));

    // We expect the promise to be rejected
    await expect(emailService.sendEmail(emailData)).rejects.toThrow(
      'Failed to send email.',
    );
  });
});
