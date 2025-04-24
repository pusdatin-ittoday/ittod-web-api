# IT-TODAY Backend API

A RESTful backend service for the IT-TODAY 2025 platform, built with **Node.js**, **Express.js**, **PostgreSQL**, and **Prisma ORM**. This API handles user data, products, and other endpoints related to the IT-TODAY event.

---

## 🚀 Installation

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Navigate to the project directory
cd <project-directory>

# 3. Install dependencies
npm install
```

---

## 🧪 Usage

Start the development server:

```bash
npm run dev
```

Or start the production build:

```bash
npm start
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
- **PostgreSQL**
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
