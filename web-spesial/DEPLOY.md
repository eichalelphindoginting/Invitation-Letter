# 🎄 Christmas Invitation Website

Undangan Natal untuk Gresia Enzelika Hutahean dengan desain elegan dan musik "All I Want for Christmas Is You"

## 🚀 Deploy ke Vercel

### Cara 1: Deploy via Vercel Website (Paling Mudah)

1. **Buat akun Vercel** (jika belum punya)
   - Kunjungi: https://vercel.com/signup
   - Sign up dengan GitHub account (recommended)

2. **Upload Project**
   - Login ke Vercel Dashboard: https://vercel.com/dashboard
   - Klik tombol **"Add New..."** → **"Project"**
   - Klik **"Import Git Repository"** atau upload folder langsung

3. **Konfigurasi Project**
   - Project Name: `christmas-invitation` (atau nama yang kamu mau)
   - Framework Preset: **Vite** (akan terdeteksi otomatis)
   - Root Directory: `./` (biarkan default)
   - Build Command: `npm run build` (otomatis terisi)
   - Output Directory: `dist` (otomatis terisi)

4. **Deploy!**
   - Klik tombol **"Deploy"**
   - Tunggu beberapa menit sampai selesai
   - Website akan live di URL seperti: `https://christmas-invitation-xxx.vercel.app`

### Cara 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy dari folder project**
   ```bash
   cd "c:\Users\Eichal\Documents\Web\Website ajalah\web-spesial"
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → Y
   - Which scope? → Pilih account kamu
   - Link to existing project? → N
   - What's your project's name? → christmas-invitation
   - In which directory is your code located? → ./ (enter)
   - Want to override settings? → N

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Cara 3: Deploy via GitHub (Recommended for Updates)

1. **Push project ke GitHub**
   ```bash
   cd "c:\Users\Eichal\Documents\Web\Website ajalah\web-spesial"
   git init
   git add .
   git commit -m "Initial commit: Christmas invitation"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/christmas-invitation.git
   git push -u origin main
   ```

2. **Import dari Vercel**
   - Login ke Vercel: https://vercel.com/dashboard
   - Klik **"Add New..."** → **"Project"**
   - Pilih repository GitHub kamu
   - Klik **"Import"**
   - Klik **"Deploy"**

3. **Auto-Deploy**
   - Setiap kali kamu push ke GitHub, Vercel akan otomatis deploy update!

## 📝 Catatan Penting

### File Musik
Pastikan file musik `all-i-want-for-christmas..mp3` ada di folder `public/` sebelum deploy!

### Environment
- Framework: Vite
- React Version: 19.2.0
- Node Version: 18+ (recommended)

## 🎵 Features
- ✨ Animasi salju jatuh
- 💌 Amplop interaktif yang bisa dibuka
- 🎵 Background music "All I Want for Christmas Is You"
- 📱 Fully responsive (mobile & desktop)
- 💝 Personal invitation untuk Gresia

## 🌐 Live Preview
Setelah deploy, website kamu akan live di:
```
https://your-project-name.vercel.app
```

## 🔧 Local Development
```bash
npm install
npm run dev
```

## 📦 Build
```bash
npm run build
```

## 🎄 Selamat Natal! 🎄
