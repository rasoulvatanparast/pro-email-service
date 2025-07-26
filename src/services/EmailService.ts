import nodemailer, { Transporter } from 'nodemailer';
import { config } from '../config';
import { SendEmailDTO } from '../types/Email.dto';

/**
 * Provides an abstraction layer for sending emails.
 * This class is responsible for all email-related operations,
 * abstracting away the details of the email transport mechanism.
 * @class EmailService
 * @description Handles all email-related logic.
 */
export class EmailService {
  private transporter: Transporter;

  constructor() {
    // Create a transporter instance once
    this.transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.secure,
      tls: config.email.tls,
    });
  }

  /**
   * Sends an email using the configured transporter.
   *
   * @param {SendEmailDTO} emailData - The data for the email, including recipient, subject, and body.
   * @returns {Promise<string>} A promise that resolves with the message ID of the sent email upon success.
   * @throws {Error} Throws a generic error if the email transport fails to send the email,
   * allowing the calling layer (controller) to handle the error response.
   */
  public async sendEmail(emailData: SendEmailDTO): Promise<string> {
    const { to, subject, message } = emailData;

    try {
      const info = await this.transporter.sendMail({
        from: config.email.defaultFrom,
        to,
        subject,
        text: message,
        html: `<p>${message}</p>`,
      });
      // Logging for debugging and monitoring purposes
      // In a real application, use a structured logger like Winston or Pino
      console.log(`Email sent successfully. Message ID: ${info.messageId}`);
      return info.messageId;
    } catch (error) {
      console.error('Error sending email:', error);
      // We throw a new, more generic error to avoid leaking implementation details
      throw new Error('Failed to send email.');
    }
  }
}
