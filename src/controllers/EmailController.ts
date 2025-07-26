import { Request, Response } from 'express';
import { EmailService } from '../services/EmailService';

/**
 * Controller for handling email-related HTTP requests.
 * It orchestrates the flow of data from the request to the service layer
 * and formats the response to be sent back to the client.
 * @class EmailController
 */
export class EmailController {
  private emailService: EmailService;

  /**
   * Initializes a new instance of the EmailController.
   * It creates an instance of EmailService to handle the business logic.
   * In a more advanced setup, this dependency would be injected.
   */
  constructor() {
    this.emailService = new EmailService();
  }

  /**
   * Handles the HTTP POST request to send an email.
   * It validates the request body, calls the email service,
   * and sends a standardized JSON response.
   *
   * @route POST /send
   * @description Handles the request to send an email.
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @returns {Promise<Response>} A promise that resolves with the Express response.
   */
  public send = async (req: Request, res: Response): Promise<Response> => {
    // Note: In a real app, use a validation library like Joi or Zod
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, subject, message.',
      });
    }

    try {
      const messageId = await this.emailService.sendEmail({
        to,
        subject,
        message,
      });
      return res.status(200).json({
        success: true,
        message: 'Email sent successfully.',
        data: { messageId },
      });
    } catch (error) {
      // The service layer logs the detailed error.
      // The controller sends a generic, user-friendly error message.
      return res.status(500).json({
        success: false,
        error: 'An internal server error occurred while sending the email.',
      });
    }
  };
}
