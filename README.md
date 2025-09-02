# IT-TODAY Backend API

A robust RESTful backend service for the IT-TODAY 2025 platform, built with **Node.js**, **Express.js**, **MySQL**, and **Prisma ORM**. This API manages user data, team registrations, competitions, and other functionalities for the IT-TODAY event.

---

## 🚀 Features

- User authentication and authorization
- Team registration and management
- Competition participation limits
- Leader assignment and validation
- Integration with Google OAuth2
- Scalable database design with Prisma ORM

---

## 🛠️ Tech Stack

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MySQL**: Relational database
- **Prisma ORM**: Database management
- **Supabase**: Object storage
- **Prettier**: Code formatting

---

## 📦 Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/pusdatin-ittoday/ittod-web-api.git
```

### 2. Navigate to the project directory

```bash
cd ittod-web-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add the following variables:

```env
DATABASE_URL=mysql://<username>:<password>@<host>:<port>/<database>
SECRET_KEY_SESSION=<your_secret_key>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_REDIRECT=<your_google_redirect_url>
```

### 5. Set up the database

Run the following Prisma commands to configure the database:

```bash
npx prisma generate       # Generate the Prisma client
npx prisma migrate dev    # Apply migrations and create the database
# Or, if not using migrations:
npx prisma db push        # Push the schema to the database
```

---

## 🧪 Usage

### Start the development server

```bash
npm run dev
```

### Start the production server

```bash
npm run serve
```

Access the API at: `http://localhost:3000`

---

## 📄 API Endpoints

### 🔐 Users

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/users`     | Retrieve all users |
| POST   | `/api/users`     | Add a new user     |
| GET    | `/api/users/:id` | Get user by ID     |
| PUT    | `/api/users/:id` | Update user by ID  |

### 🏆 Competitions

| Method | Endpoint                | Description                   |
| ------ | ----------------------- | ----------------------------- |
| GET    | `/api/competitions`     | Retrieve all competitions     |
| POST   | `/api/competitions`     | Add a new competition         |
| GET    | `/api/competitions/:id` | Get competition details by ID |

### 👥 Teams

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| POST   | `/api/teams`      | Register a new team           |
| POST   | `/api/teams/join` | Join a team using a team code |
| GET    | `/api/teams/:id`  | Get team details by ID        |

---

## 🗺️ Entity Relationship Diagram

![ERD ITTODAY 2025](https://github.com/user-attachments/assets/fe28b0cc-7612-4428-9c02-779fb133d91f)

---

## 🧑‍💻 Contributors

- **Walid Nadirul Ahnaf**
- **Aldi Pramudya**
- **Ilham Edgar Maulana Goesasi**
- **Jeremy Tjahjana**
- **Daffa Aulia M S**

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).
