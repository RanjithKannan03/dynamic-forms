# 🧾 Schema-Driven Form Builder with Live Validation

A full-stack web application built with **Next.js** (Frontend) and **Express + MongoDB** (Backend) to dynamically generate forms from JSON Schema, validate inputs in real time, and persist submitted data.

## 🧠 Objective

The goal of this project is to demonstrate end-to-end form generation, validation, and storage based on a shared JSON Schema, ensuring consistency across frontend and backend.

---

## 📁 Folder Structure

```
.
├── frontend    # Next.js application
└── backend     # Express server with MongoDB
```

---

## 🚀 Getting Started

### 🧪 Prerequisites

- Node.js (v16 or later)
- MongoDB (local or cloud)

### 🔧 Installation

Open **two terminals**:

#### Terminal 1 - Frontend

```bash
cd frontend
npm install
```

#### Terminal 2 - Backend

```bash
cd backend
npm install
```

Then configure your MongoDB URL in:

```
backend/index.js
```

```js
mongoose.connect("YOUR_MONGO_DB_URL_HERE", ...);
```

---

## ▶️ Running the Application

### 1. Start the **Backend** First

```bash
cd backend
node index.js
```

### 2. Then Start the **Frontend**

For development:

```bash
cd frontend
npm run dev
```

To build and start:

```bash
npm run build
npm start
```

---

## 🔐 Features

1. **JSON Schema Input**: Accepts a valid JSON Schema file as input.
2. **Dynamic Form Rendering**: Renders fields dynamically based on schema definitions.
3. **Live Client-Side Validation**: Instantly validates user input with inline error messages.
4. **Shared Schema**: Same JSON Schema file used for both client and server validation.
5. **Server-Side Validation**: Backend re-validates submitted data against the schema.
6. **Persistent Storage**: Successfully validated entries are stored in MongoDB.
7. **Submission Feedback**: Displays success or failure messages based on validation.
8. **Export Feature**: Users can export the form data along with its schema.
9. **Import/Restore**: Previously exported forms can be re-imported with saved data.
10. **Submission History**: Backend can return a list of previously submitted valid datasets.
11. **User Authentication**: Secure user login and form access control.

---
