import express from 'express';
import cors from 'cors';
import mainRouter from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.config';

/**
 * The main Express application instance.
 * This file is responsible for creating and configuring the Express app,
 * including middleware, routes, and documentation endpoints.
 * It is exported so it can be used for both running the server and for testing.
 */
const app = express();

app.use(cors());
// Core middleware for parsing JSON request bodies.
app.use(express.json());

// API documentation endpoint.
// Serves interactive API documentation using Swagger UI.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // <-- Add this line

// Main API routes, prefixed with /api/v1 for versioning.
app.use('/api/v1', mainRouter);

export default app;
