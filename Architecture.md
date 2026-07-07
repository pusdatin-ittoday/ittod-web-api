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
3. **Dynamic Configuration & Event Data**:
   - The backend connects directly to the shared central MySQL database (managed by the Admin Dashboard) to read from tables like `event`, `event_timeline`, and `event_announcement`.
   - Instead of static configurations, the backend provides dynamic event status (such as `is_active`, `requires_submission`, `method`, and `max_noncompetition_participant`) so the frontend can accurately display available registrations based on the database state.
   - For non-competition events, the backend enforces a participant registration limit using `max_noncompetition_participant`.
   - Contact person fields (`contact_person1`, `contact_person2`) are stored as numeric strings and dynamically formatted into full `wa.me/` URLs for public API consumption.
   - Authenticated participants receive announcements through `GET /api/announcements`, ordered newest first with related event and author data. A nullable `event_id` represents a general announcement for every participant; event-specific records are scoped server-side to non-competition registrations in `event_participant` or competition memberships in `team_member`.
   - Submission fields (`submission_fields`) containing the list of required inputs and types configured by the admin are stored as a JSON column in the `event` table. The backend serves this dynamic array to the frontend so that the participant submission form fields (such as text/link prompts) are dynamically rendered based on the database state rather than being hardcoded.
   - Public event list and detail responses include the related `event_timeline` rows as `timelines`, ordered by `date` ascending. Both non-competition events and competitions use this same relation, allowing their public detail pages to reflect agenda changes made in Laravel Admin without frontend schedule constants.
4. **Competition Participation Types**:
   - Each competition exposes `participation_type` with either `individual` or `team`.
   - User competition dashboard responses include `participationType` so the frontend can distinguish internal one-member records from real teams.
   - Team competitions require a participant-provided team name and retain the one-team-leadership rule.
   - Individual competitions do not require a team name. The API creates an internal one-member team record (`max_member = 1`) so existing competition, payment, and submission relations remain compatible.
   - Duplicate registration for the same user and competition is rejected.
   - `team_member.is_verified` stores each member's document-verification result from the Laravel-managed database.
   - **Global Competition Timelines (`competition_timeline`)**:
      - The `competition_timeline` model maps to the global competition agenda table in the MySQL database.
      - The Express API exposes the `GET /api/competition-timeline` endpoint to serve global competition milestones sorted chronologically by `start_date` ascending.
   - **Education Enum Alignment (`pendidikan_enum`)**:
      - The `pendidikan_enum` type in the Prisma schema is synchronized to match the database values (`sma`, `mahasiswa`, `lainnya`) to prevent Prisma deserialization errors and API crashes during user authentication and profile reads.
5. **Database Schema Ownership**:
   - Laravel Admin is the source of truth for database migrations.
   - After a Laravel migration changes the shared schema, the API synchronizes Prisma with `npx prisma db pull` followed by `npx prisma generate`.
