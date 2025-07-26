import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();

/**
 * Application-wide configuration.
 *
 * This object centralizes all configuration values, sourcing them from
 * environment variables. It provides default values for essential settings
 * to ensure the application can run even without a .env file.
 *
 * @property {number} port - The port on which the server will listen.
 * @property {object} email - Configuration for the email service (nodemailer).
 */
export const config = {
  /**
   * The network port for the Express server.
   * Defaults to 3000 if not specified in the environment.
   */
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,

  /**
   * Configuration for the Nodemailer transport.
   */
  email: {
    host: process.env.EMAIL_HOST!,
    port: parseInt(process.env.EMAIL_PORT!, 10),
    secure: false, // Set to true for production SMTP with SSL/TLS
    tls: {
      rejectUnauthorized: false, // Necessary for self-signed certificates in dev
    },
    defaultFrom: process.env.EMAIL_DEFAULT_FROM!,
  },
};
