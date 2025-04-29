# IT-TODAY Backend API

A RESTful backend service for the IT-TODAY 2025 platform, built with **Node.js**, **Express.js**, **MySQL**, and **Prisma ORM**. This API handles user data, products, and other endpoints related to the IT-TODAY event.

---

## 🚀 Installation

Follow these steps to set up the project locally: 


#### 1. Clone the repository
```bash
git clone https://github.com/pusdatin-ittoday/ittod-web-api.git
```

#### 2. Navigate to the project directory
```bash
cd ittod-web-api
```

#### 3. Install dependencies
```bash
npm install
```

#### 4. Configure .env
Google client id is necessary for this step. For more details visit: https://developers.google.com/identity/protocols/oauth2
```bash
# Used for Prisma Migrations and within your application
DATABASE_URL=mysqlxxxx
SECRET_KEY_SESSION=xxx
GOOGLE_CLIENT_SECRET=xxxx
GOOGLE_CLIENT_ID=xxx
# for local
GOOGLE_REDIRECT=http://localhost:3000/api/auth/google/redirect 
DB_HOST=localhost
DB_PORT=32768
DB_USER=xxx
DB_PASSWORD=xxx
DB_NAME=xxx
EMAIL_USER=xxxx
EMAIL_PASS=zxxxx
EMAIL_HOST=smxxxx
EMAIL_PORT=xxxx

```
Save .env to project root folder
#### 5. Configure Prisma
Asumption: Empty database
```bash
npx prisma generate       # generates the Prisma client
npx prisma migrate dev    # runs migrations and creates the database
# or if you're not using migrations:
npx prisma db push        # pushes the schema to the database without migrations
```
---

## 🧪 Usage

Start the development server:

```bash
npm run dev
```

Or start the production build:

```bash
npm run serve
```

Access the API at:  
🌐 `http://localhost:3000`

Make sure to configure your `.env` file with the required database credentials.

---

## 📦 API Endpoints

### 🔐 Users

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/users`     | Retrieve all users |
| POST   | `/api/users`     | Add a new user     |
| GET    | `/api/users/:id` | Get user by ID     |
| PUT    | `/api/users/:id` | Update user by ID  |

### 🛍️ Products

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/api/products` | Retrieve all products |

_More endpoints will be added soon._

---

## 🗺️ Entity Relationship Diagram

![ERD ITTODAY 2025](https://github.com/user-attachments/assets/fe28b0cc-7612-4428-9c02-779fb133d91f)

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **Prisma ORM**
- **Supabase** (for object storage)
- **Prettier** (as linter)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Maintainers

- Divisi PDI – IT-TODAY 2025

```
- Walid Nadirul ahnaf
- Aldi Pramudya
- Ilham Edgar Maulana Goesasi
- Qois Firosi
- Jeremy Tjahjana
```
