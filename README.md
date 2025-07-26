# Pro Email Service 📧

A robust, scalable, and well-documented REST API for sending emails, built with TypeScript and professional software engineering principles. This project serves as a template for creating enterprise-grade Node.js applications.

---

<!-- Badges will go here. We'll add them after setting up CI/CD and other services. -->
<!-- Example: -->
<!--
[![Build Status](https://travis-ci.org/user/repo.svg?branch=main)](https://travis-ci.org/user/repo)
[![Coverage Status](https://coveralls.io/repos/github/user/repo/badge.svg?branch=main)](https://coveralls.io/github/user/repo?branch=main)
[![npm version](https://badge.fury.io/js/package-name.svg)](https://badge.fury.io/js/package-name)
-->

## 🤔 Why This Project?

In modern software development, sending emails is a common requirement, but building a service that is reliable, maintainable, and testable can be challenging. This project was created to demonstrate best practices in:
- **Clean Architecture:** Separating concerns into distinct layers (API, Controllers, Services).
- **Test-Driven Development (TDD):** Ensuring code quality and reliability through comprehensive unit and integration tests.
- **Professional Documentation:** From in-code TSDoc to interactive API docs with Swagger.
- **TypeScript First:** Leveraging static typing for a more robust and developer-friendly experience.

## ✨ Features

- ✅ **RESTful API** for sending emails.
- ✅ **TypeScript** for type safety and scalability.
- ✅ **Clean Architecture** for separation of concerns.
- ✅ **Unit & Integration Tests** with Jest.
- ✅ **Auto-generated API Documentation** with Swagger (OpenAPI).
- ✅ **Environment-based Configuration** using `.env` files.
- ✅ **Professional Linting and Formatting** with ESLint and Prettier (to be added).
- ✅ **Ready for Dockerization** and container-based deployment.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Email:** Nodemailer (connects to any SMTP server, e.g., Papercut for local dev)
- **Testing:** Jest, Supertest
- **API Documentation:** Swagger (OpenAPI), `swagger-ui-express`

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An SMTP server for development. We recommend [Papercut SMTP](https://github.com/changetower/papercut-smtp) for a simple local email server.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/pro-email-service.git
cd pro-email-service
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project by copying the example file:
```bash
cp .env.example .env
```
Open the `.env` file and ensure the variables match your local setup (especially the SMTP server details).

### 4. Run the Development Server
This command starts the server with hot-reloading using `ts-node-dev`.
```bash
npm run dev
```
The server will be running at `http://localhost:3001` (or the port you specified in `.env`).

## ✅ Running Tests

To run the full test suite (unit and integration tests), use the following command:
```bash
npm test
```
This will execute all test files ending in `.test.ts` or `.spec.ts`.

## ⚙️ Environment Variables

The following environment variables are used to configure the application. They should be placed in a `.env` file in the project root.

| Variable             | Description                                          | Default Value |
| -------------------- | ---------------------------------------------------- | ------------- |
| `PORT`               | The port the server will listen on.                  | `3001`        |
| `EMAIL_HOST`         | The hostname of your SMTP server.                    | `localhost`   |
| `EMAIL_PORT`         | The port of your SMTP server.                        | `25`          |
| `EMAIL_DEFAULT_FROM` | The default "from" address for outgoing emails.      | `"Pro App" <no-reply@pro-app.com>` |


## 📖 API Documentation

This project uses Swagger to automatically generate interactive API documentation from the in-code comments.

Once the server is running (`npm run dev`), you can access the API documentation at:
**[http://localhost:3001/api-docs](http://localhost:3001/api-docs)**

From there, you can view all available endpoints, see their request/response schemas, and even send test requests directly from your browser.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [**CONTRIBUTING.md**](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
_This README was generated with ❤️ and best practices._