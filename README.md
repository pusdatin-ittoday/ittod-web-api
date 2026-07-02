# IT-TODAY Backend API

Backend REST API untuk platform IT-TODAY 2025. Aplikasi ini menangani autentikasi, data peserta, pendaftaran event dan kompetisi, pembayaran, serta penyimpanan berkas.

## Teknologi

- Node.js dan Express
- SQLite (shared dengan Laravel Admin Dashboard)
- Prisma ORM
- bcryptjs (compatible dengan Laravel)
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

# Shared SQLite database dengan Laravel Admin Dashboard
# Path harus sesuai dengan lokasi database Laravel
DATABASE_URL="file:d:/ittod-web/dashboard-ittod-admin/database/database.sqlite"
SECRET_KEY_SESSION=ganti-dengan-random-string-yang-panjang

APP_BASE_URL=http://localhost:3000
APP_FRONTEND_URL=http://localhost:5173
FRONTEND_URL=http://localhost:5173

# CORS origins (development)
CORS_ORIGINS=http://localhost:5173

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

### Panduan Mendapatkan Credential

**`SECRET_KEY_SESSION`**:
Secret key untuk enkripsi session. Gunakan string acak yang panjang. Anda bisa men-generate-nya di terminal dengan perintah:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Cloudflare R2 (`R2_*`)**:
Credential ini digunakan untuk penyimpanan file.
1. Buka Cloudflare Dashboard > **R2**.
2. **`R2_LINK`**: Pada halaman utama R2, lihat bagian **Account Details** di kanan. Salin **S3 API URL** (format: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`).
3. **`R2_ACCESS_KEY_ID` & `R2_SECRET_ACCESS_KEY`**: Klik **Manage R2 API Tokens** di sebelah kanan atas > **Create API token** (berikan izin Object Read & Write). Salin nilainya.
4. **`R2_BUCKET_NAME`**: Nama bucket yang Anda buat (misalnya `ittoday`).
5. **`R2_PUBLIC`**: Klik nama bucket Anda > tab **Settings** > **Public Access**. Anda bisa mengaktifkan **R2.dev subdomain** (contoh: `https://pub-<random>.r2.dev`) atau menghubungkan **Custom Domain**. Gunakan URL publik tersebut.

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

### Sinkronisasi schema database

Repo Laravel Admin Dashboard menjadi sumber utama perubahan schema database.
Jangan membuat migration atau mengubah schema database dari repo web-api.

#### Repo Laravel

Developer hanya membuat dan menjalankan migration dari repo Laravel:

```bash
php artisan make:migration nama_migration
php artisan migrate
git push
```

#### Repo Express

Ketika schema database berubah, jalankan perintah berikut di repo web-api:

```bash
# Ambil struktur database terbaru ke prisma/schema.prisma
npx prisma db pull

# Generate ulang Prisma Client
npx prisma generate
```

Commit perubahan `prisma/schema.prisma` jika file tersebut berubah dan memang
dilacak oleh Git.

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
- **Azka Julian P.W**
- **Julius Calvin kurniadi**
- **Adityo Cahyo**

---

## Troubleshooting

### Frontend gagal memanggil API

Pastikan backend berjalan di `http://localhost:3000`, frontend berjalan di `http://localhost:5173`, dan frontend memakai:

```env
VITE_API_BASE_URL=http://localhost:3000
```

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).
