# Job Tracker

A TypeScript application for tracking job applications as part of my software engineering portfolio.

## Features

- Add applications
- Edit applications
- Delete applications
- View all applications
- Track application status
- Automated testing with Vitest

## Tech Stack

- TypeScript
- Node.js
- Git
- GitHub
- ESLint
- Prettier
- Vitest

## Installation

```bash
npm install
```

## Run

```bash
npm run build
node dist/index.js
```

## Tests

```bash
npm test
```

## Project Status

🚧 Under active development

Current Sprint:

- Project setup completed
- Beginning implementation of the Job Application model

## Job Application Model

The application now includes a strongly typed `JobApplication` model located in `src/models/JobApplication.ts`.

### Properties

- id
- company
- position
- location
- status
- dateApplied
- salary (optional)
- notes (optional)

The model uses the `ApplicationStatus` enum to ensure application states remain type-safe throughout the project.

## Job Application Service

The Job Tracker currently supports in-memory job application management.

### Features

- Add a new job application.
- Validate required fields.
- Prevent duplicate application IDs.
- Retrieve stored applications.
- Unit tested using Vitest.

### Validation

The service validates:

- Company name
- Application ID
- Position
- Location
- Duplicate IDs
