/**
 * @openapi
 * components:
 *   schemas:
 *     SendEmailRequest:
 *       type: object
 *       description: 'Represents the data required to send an email.'
 *       required:
 *         - to
 *         - subject
 *         - message
 *       properties:
 *         to:
 *           type: string
 *           format: email
 *           description: "The recipient's email address."
 *           example: "recipient@example.com"
 *         subject:
 *           type: string
 *           description: "The subject line of the email."
 *           example: "Meeting Confirmation"
 *         message:
 *           type: string
 *           description: "The plain text or HTML content of the email."
 *           example: "This is a confirmation for our meeting tomorrow at 10 AM."
 */

/**
 * Data Transfer Object (DTO) for sending an email.
 * This interface defines the shape of the data that the EmailService expects.
 */
export interface SendEmailDTO {
  /** The email address of the recipient. */
  to: string;
  /** The subject of the email. */
  subject: string;
  /** The main content (message) of the email. */
  message: string;
}
