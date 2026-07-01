# IT Today Web API (Backend) Architecture

This document describes the high-level architecture and technology stack for the `ittod-web-api` project.

## Overview
The backend serves as the core API for the user-facing web platform. It handles authentication, event/competition registration, submissions, and integrations with third-party services like AWS S3 (Cloudflare R2) and OAuth providers.

## Technology Stack
- **Runtime & Framework**: Node.js with Express.js
- **ORM & Database**: Prisma ORM with MySQL connection
- **Authentication**: Passport.js (supporting Google OAuth and Local strategies), JWT tokens, and express-session.
- **Storage**: AWS SDK (`@aws-sdk/client-s3`) interacting with S3-compatible object storage (Cloudflare R2) for media uploads (payment proofs, submissions).
- **Security & Validation**: Joi for request validation, bcrypt/argon2 for password hashing, and express-rate-limit.
- **Mailing**: Nodemailer for sending emails (e.g., email verification, forgot password).

## Project Structure
- `src/controllers/`: Route handlers containing the business logic (e.g., `event-public.controller.js`, `competitionTEAMdata.controller.js`).
- `src/routes/`: API endpoint definitions (Express Router).
- `src/services/`: Reusable database interactions and heavy business logic.
- `src/middleware/`: Custom middleware (e.g., authentication checks, error handling, rate limiting).
- `src/validators/`: Joi schemas for validating incoming request payloads.
- `src/strategies/`: Passport authentication strategy configurations.
- `src/helpers/` & `src/utils/`: Helper functions (e.g., S3 upload wrappers, date formatters).
- `prisma/schema.prisma`: Prisma data model defining tables (Users, Teams, Events, Submissions).

## Data Flow & Integrations

1. **User Authentication**:
   - Users can register natively (email/password) or via Google OAuth.
   - The backend issues authentication tokens (stored in localStorage by the client) or relies on secure cookies.
2. **File Uploads & Submissions**:
   - Users upload payment proofs and competition deliverables.
   - The backend validates the files and securely uploads them to Cloudflare R2 Storage (placed inside the `uploads/` prefix folder).
   - After a successful upload to R2, the backend saves the public R2 URL (`R2_PUBLIC` + `uploads/key`) into the `media` table of the MySQL database via Prisma.
3. **Dynamic Configuration**:
   - The backend connects directly to the shared central MySQL database (managed by the Admin Dashboard) to read from tables like `event`, `event_timeline`, and `event_announcement`.
   - Instead of static configurations, the backend provides dynamic event status (such as `is_active` and `requires_submission` flags) so the frontend can accurately display available registrations based on the database state.
