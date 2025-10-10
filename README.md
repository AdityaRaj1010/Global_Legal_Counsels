# 📩 Global Legal Counsels

A modern **Contact Us form** built with **Next.js 13 (App Router)** and deployed on **Vercel**, with email delivery powered by **Resend** and a custom domain/email on **GoDaddy (Titan Mail)**.  

This project allows users to fill in a contact form on your website, and the details are sent directly to your **GoDaddy business email** via Resend’s email API.

---

## 🚀 Features
- ⚡ Built with **Next.js 13 + TypeScript**
- 📬 Email delivery via **Resend**
- 🔒 Secure environment variables for API keys
- 📨 Emails arrive in your **GoDaddy Titan inbox**
- 🌐 Custom domain integration with **Vercel + GoDaddy**
- 🛡️ Proper `replyTo` handling so replies go back to the sender

---

## 🏗️ Tech Stack
- **Frontend:** Next.js 13, React, TailwindCSS
- **Backend API Route:** Next.js App Router (`/api/send-email`)
- **Email Service:** [Resend](https://resend.com/)
- **Hosting:** [Vercel](https://vercel.com/)
- **Domain & Inbox:** GoDaddy + Titan Mail

---

## 📂 Project Structure
```bash
extension/ # Main Next.js project
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── about/
│   │   ├── legal/
│   │   │   ├── terms/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   ├── services/
│   │   ├── contact/page.tsx # Contact form page
│   │   └── api/send-email/route.ts # API route for sending emails
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Testimonials.tsx
│   │   └── Layout.tsx
├── public/
└── README.md
```
## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/AdityaRaj1010/Global_Legal_Counsels.git
cd globallegalcounsels
```

### 2. Install Dependencies
```bash
npm i
```

### 3. Environment Variables
Create a .env.local file in the project root:
```bash
RESEND_API_KEY=your_resend_api_key
```
### 4. Run Locally
```bash
npm run dev
```

## 📬 How It Works

- User fills out the Contact Us form (/contact).
- Form submits data to /api/send-email API route.
- API uses Resend to send the email.
- Email arrives in GoDaddy Titan inbox (info@your_custom_domain.com).
- Thanks to replyTo, replying to the email goes directly to the sender.

## 🌐 Deployment
### Deploy on Vercel
- Push project to GitHub.
- Import repository in Vercel
- Add environment variable RESEND_API_KEY in Project Settings → Environment Variables.

### Deploy project.

- Connect Custom Domain
- In Vercel → Project → Settings → Domains → Add your_custom_domain.com.
- Update GoDaddy DNS:
    - Option A (Recommended): Point Nameservers to Vercel.
    - Option B: Add A Records/CNAME manually in GoDaddy.
- Verify domain.
- Verify Email with Resend
- Add SPF/DKIM TXT records in DNS for best email deliverability.

## 📝 License

MIT License © 2025 Global Legal Counsels
