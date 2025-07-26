import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pro Email Service API',
      version: '1.0.0',
      description: 'A simple and professional REST API for sending emails.',
    },
    servers: [
      {
        url: 'http://localhost:3001/api/v1',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/types/*.dto.ts'], // Path to the API docs
};

export const swaggerSpec = swaggerJsdoc(options);
