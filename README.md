# IT-TODAY Backend API

Backend REST API untuk platform IT-TODAY 2025. Aplikasi ini menangani autentikasi, data peserta, pendaftaran event dan kompetisi, pembayaran, serta penyimpanan berkas.

## Teknologi

- Node.js dan Express
- MySQL dan Prisma ORM
- Passport
- Cloudflare R2
- Nodemailer

## Prasyarat

- Node.js 20 LTS atau versi yang lebih baru
- npm
- MySQL 8/MariaDB, atau XAMPP
- Git

Frontend berjalan di `http://localhost:5173`, sedangkan backend menggunakan `http://localhost:3000`.

## Instalasi

```bash
git clone https://github.com/pusdatin-ittoday/ittod-web-api.git
cd ittod-web-api
npm install
```

## Konfigurasi environment

Salin template environment:

PowerShell:

```powershell
Copy-Item .env.example .env
```

Bash:

```bash
cp .env.example .env
```

Isi `.env`:

```env
NODE_ENV=development
PORT=3000

DATABASE_URL=mysql://root:@localhost:3306/ittoday
SECRET_KEY_SESSION=ganti-dengan-random-string-yang-panjang

APP_BASE_URL=http://localhost:3000
APP_FRONTEND_URL=http://localhost:5173
FRONTEND_URL=http://localhost:5173

GOOGLE_CLIENT_ID=ganti-dengan-google-client-id
GOOGLE_CLIENT_SECRET=ganti-dengan-google-client-secret
GOOGLE_REDIRECT=http://localhost:3000/api/auth/google/redirect

EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=ganti-dengan-email-user
EMAIL_PASS=ganti-dengan-email-password
EMAIL_SENDER="IT Today <no-reply@example.com>"
SUPPORT_EMAIL=support@example.com

R2_LINK=https://account-id.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=ganti-dengan-r2-access-key-id
R2_SECRET_ACCESS_KEY=ganti-dengan-r2-secret-access-key
R2_BUCKET_NAME=ittoday
R2_PUBLIC=https://public-r2-domain.example.com
```

| Variabel | Kegunaan |
| --- | --- |
| `NODE_ENV` | Mode aplikasi: `development` atau `production`. |
| `PORT` | Port HTTP backend. |
| `DATABASE_URL` | Connection string MySQL untuk Prisma. |
| `SECRET_KEY_SESSION` | Secret session/cookie. Gunakan nilai acak yang panjang. |
| `APP_BASE_URL` | URL publik backend. |
| `APP_FRONTEND_URL` | URL frontend untuk verifikasi email dan reset password. |
| `FRONTEND_URL` | URL redirect setelah Google OAuth. |
| `GOOGLE_*` | Credential dan callback Google OAuth. |
| `EMAIL_*` | Konfigurasi SMTP. |
| `SUPPORT_EMAIL` | Alamat support pada email otomatis. |
| `R2_*` | Konfigurasi bucket Cloudflare R2. |

Jangan commit file `.env`. Hanya `.env.example` tanpa secret asli yang boleh masuk repository.

Google OAuth, email, dan upload R2 memerlukan credential development milik tim. Jangan menggunakan credential production di environment lokal.

## Setup database lokal

### Menggunakan XAMPP

1. Buka XAMPP Control Panel.
2. Jalankan MySQL. Apache hanya diperlukan jika ingin memakai phpMyAdmin.
3. Buka `http://localhost/phpmyadmin`.
4. Buat database bernama `ittoday`.
5. Pastikan `DATABASE_URL` sesuai dengan user, password, dan port MySQL.

XAMPP default memakai user `root` tanpa password:

```env
DATABASE_URL=mysql://root:@localhost:3306/ittoday
```

Jika user `root` memiliki password:

```env
DATABASE_URL=mysql://root:PASSWORD_KAMU@localhost:3306/ittoday
```

Lakukan URL encoding jika password mengandung karakter khusus seperti `@`, `:`, `/`, atau `#`.

### Menjalankan migrasi

Untuk development:

```bash
npx prisma generate
npx prisma migrate dev
```

Untuk deployment/CI:

```bash
npx prisma migrate deploy
```

## Menjalankan aplikasi

Development dengan auto-reload:

```bash
npm run dev
```

Menjalankan tanpa auto-reload:

```bash
npm run serve
```

Cek `http://localhost:3000`. Endpoint root akan menampilkan `OK` jika backend berhasil berjalan.

## Menjalankan bersama frontend

Biarkan terminal backend tetap berjalan. Buka terminal lain:

```bash
cd ../ittod-web-frontend
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Perintah npm

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server dengan Nodemon. |
| `npm run serve` | Menjalankan server menggunakan Node.js. |
| `npm run format` | Memformat project dengan Prettier. |
| `npm audit` | Memeriksa vulnerability dependency. |

Project belum memiliki automated test suite.

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

## Troubleshooting

### Prisma `P1001`

Backend tidak dapat menjangkau MySQL. Pastikan MySQL aktif dan port pada `DATABASE_URL` benar:

```powershell
Test-NetConnection localhost -Port 3306
```

### Prisma `P1000`

Username atau password MySQL salah. Sesuaikan credential pada `DATABASE_URL`.

### Akun testing belum terverifikasi

Jika SMTP development belum tersedia, akun khusus testing lokal dapat diverifikasi melalui database:

```sql
UPDATE user_identity
SET is_verified = 1
WHERE email = 'test@localhost.com';
```

Jangan melakukan langkah ini pada database production.

### Frontend gagal memanggil API

Pastikan backend berjalan di `http://localhost:3000`, frontend berjalan di `http://localhost:5173`, dan frontend memakai:

```env
VITE_API_BASE_URL=http://localhost:3000
```

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).
