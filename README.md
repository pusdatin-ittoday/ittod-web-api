# IT-TODAY Backend API

A robust RESTful backend service for the IT-TODAY 2025 platform, built with **Node.js**, **Express.js**, **MySQL**, and **Prisma ORM**. This API manages user data, team registrations, competitions, and other functionalities for the IT-TODAY event.

---

## 🛠️ Tech Stack

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MySQL**: Relational database
- **Prisma ORM**: Database management
- **Prettier**: Code formatting

---

## 📦 Installation

Follow these steps to set up the project locally:

### 0. Setup your MySQL Database
1. Download and Install XAMPP at https://www.apachefriends.org/download.html
2. Launch XAMPP Control Panel
3. Open the XAMPP Control Panel (it usually runs as xampp-control.exe).
4. Start the following modules: Apache and MySQL
5. Go to your browser and open http://localhost/phpmyadmin
6. Click on "New" on the left sidebar.
7. Enter a name (e.g. my_app_db) and click Create.
8. You can now create tables with prisma.

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
DATABASE_URL=mysql://root:********@localhost:32768/ittod_dev
SECRET_KEY_SESSION=******************************
GOOGLE_CLIENT_SECRET=**************************************
GOOGLE_CLIENT_ID=******************************.apps.googleusercontent.com
GOOGLE_REDIRECT=http://localhost:3000/api/auth/google/redirect
DB_HOST=localhost
DB_PORT=32768
DB_USER=root
DB_PASSWORD=******************************
DB_NAME=ittod_dev
EMAIL_USER=******************************
EMAIL_PASS=******************************
EMAIL_HOST=smtp.ethereal.email #or other
EMAIL_PORT=587 #or other
APP_BASE_URL=http://localhost:5173
EMAIL_SENDER="IT Today" <no-reply@ittoday.com>
SUPPORT_EMAIL=support@ittoday.com
R2_ACCESS_KEY_ID=******************************
R2_SECRET_ACCESS_KEY=************************************************************
R2_LINK=https://*****.r2.cloudflarestorage.com
R2_PUBLIC=https://pub-*****.r2.dev
R2_BUCKET_NAME=ittoday
COOKIE_DOMAIN=localhost #if youre in production theres different method

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

## 🗺️ Entity Relationship Diagram

![ERD ITTODAY 2025](https://github.com/user-attachments/assets/fe28b0cc-7612-4428-9c02-779fb133d91f)

---

## 🧑‍💻 Contributors

- **Walid Nadirul Ahnaf**
- **Aldi Pramudya**
- **Ilham Edgar Maulana Goesasi**
- **Qois Firosi**
- **Jeremy Tjahjana**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
