import app from './app'; // Import the app
import { config } from './config';

/**
 * The main entry point for the application.
 * This file imports the configured Express app and starts the HTTP server,
 * listening on the port specified in the configuration.
 */
try {
  app.listen(config.port, () => {
    console.log(`🚀 Server is running on http://localhost:${config.port}`);
    console.log(`🌱 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(
      `📚 API docs available at http://localhost:${config.port}/api-docs`,
    );
  });
} catch (error) {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
}
