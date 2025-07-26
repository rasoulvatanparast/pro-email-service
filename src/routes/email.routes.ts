import { Router } from 'express';
import { EmailController } from '../controllers/EmailController';

const emailRouter = Router();
const emailController = new EmailController();

/**
 * @openapi
 * tags:
 *   name: Email
 *   description: API for sending emails
 */

/**
 * @openapi
 * /email/send:
 *   post:
 *     summary: Send an email
 *     tags: [Email]
 *     description: Sends an email to a specified recipient using the configured SMTP server.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SendEmailRequest'
 *     responses:
 *       200:
 *         description: Email sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Email sent successfully.
 *                 data:
 *                   type: object
 *                   properties:
 *                     messageId:
 *                       type: string
 *                       example: '<message-id@example.com>'
 *       400:
 *         description: Bad Request - Missing required fields.
 *       500:
 *         description: Internal Server Error.
 */
emailRouter.post('/send', emailController.send);

/**
 * Email-related routes.
 * All routes defined here are prefixed with `/email`.
 */
export default emailRouter;
