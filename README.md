# 🛠️ Admin Dashboard (Next.js) — Setup & Run Guide

This is the **Admin Dashboard** for the Anonymous College Social Platform.
It is a **separate web app (Next.js)** used for:

* Moderation (Reports)
* User Management
* Platform Monitoring (Stats)

---

# 📦 TECH STACK

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Axios
* Zustand (state management)

---

# 📁 PROJECT STRUCTURE

```
admin-dashboard/
│
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── (admin)/
│   │   │   ├── dashboard/
│   │   │   ├── users/
│   │   │   ├── reports/
│   │   │   └── layout.tsx
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── admin.service.ts
│   │
│   ├── store/
│   │   └── auth.store.ts
│   │
│   ├── utils/
│   │   └── axios.ts
│
├── public/
├── .env.local
├── package.json
```

---

# ⚙️ PREREQUISITES

Before running this project, ensure:

### ✅ 1. Backend is running

```
http://localhost:5000
```

### ✅ 2. Admin APIs exist

Required endpoints:

```
POST   /admin/login
GET    /admin/stats
GET    /admin/users?status=
PATCH  /admin/users/:id/suspend
PATCH  /admin/users/:id/activate

GET    /admin/reported-posts
GET    /admin/reported-comments
PATCH  /admin/posts/:id/hide
PATCH  /admin/comments/:id/hide
```

---

# 🔐 ENVIRONMENT SETUP

Create a file in root:

```
.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

⚠️ Important:

* No quotes
* No trailing slash

---

# 📦 INSTALLATION

Run:

```bash
npm install
```

---

# 🚀 RUN PROJECT

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 🔑 LOGIN FLOW

1. Go to:

```
/login
```

2. Enter admin credentials

3. On success:

   * JWT token stored in `localStorage`
   * Redirect → `/dashboard`

---

# 🔐 AUTH SYSTEM

* Token stored as: `admin_token`
* Automatically attached to all API requests
* Protected routes:

  * `/dashboard`
  * `/users`
  * `/reports`

If not logged in → redirected to `/login`

---

# 📊 FEATURES AVAILABLE

---

## 📊 Dashboard

* Shows:

  * Total Users
  * Active Users
  * Posts
  * Comments
  * Reports

API:

```
GET /admin/stats
```

---

## 👤 Users Page

Tabs:

* PENDING
* ACTIVE
* SUSPENDED

Actions:

* Approve user
* Suspend user
* Activate user

---

## 🚨 Reports Page

Tabs:

* Reported Posts
* Reported Comments

Actions:

* Hide Post
* Hide Comment

---

# 🧪 TESTING CHECKLIST

Make sure everything works:

```
✅ Login works
✅ Redirect after login
✅ Token persists on refresh
✅ Dashboard loads stats
✅ Users page loads data
✅ Approve/Suspend works
✅ Reports page loads data
✅ Hide actions work
✅ Logout works
```

---

# 🚨 COMMON ISSUES & FIXES

---

## ❌ CORS Error

Fix in backend:

```
Enable CORS for frontend URL
```

---

## ❌ 401 Unauthorized

* Token missing
* Login again

---

## ❌ API Not Found

* Check backend running
* Check API routes exist

---

## ❌ Empty Data

* Database may be empty
* Add test users/posts

---

# 📱 FOR EXPO DEV (IMPORTANT)

Expo app does NOT use this dashboard directly.

But:

👉 Use this dashboard to:

* Moderate content
* Approve users
* Monitor platform

---

# 🔗 URLS

| Page      | URL        |
| --------- | ---------- |
| Login     | /login     |
| Dashboard | /dashboard |
| Users     | /users     |
| Reports   | /reports   |

---


# 🔐 SECURITY NOTES

* Admin APIs are protected via JWT
* Never expose admin routes publicly
* Always validate role on backend

---

# 🟢 FINAL STATUS

This Admin Dashboard provides:

```
✔ Full moderation control
✔ User management
✔ Platform analytics
✔ Secure admin access
```

---

---
