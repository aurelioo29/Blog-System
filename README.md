# 📖 Blog System

A blogging platform built with modern technologies like **Next.js**, **MongoDB**, **Axios**, **TailwindCSS**, and **React Toastify**. Users can create blogs, view detailed blog posts, and experience real-time interactions with a smooth UI.

## ✨ Features

- 📝 **View Blogs**: Browse through the list of blogs.
- 🔍 **Blog Details**: Click on a blog to view its full details.
- 🔔 **Notifications**: User-friendly notifications powered by `React Toastify`.

## 🛠️ Tech Stack

### 🌐 Frontend

- ⚛️ **Next.js** : A React framework for building server-side rendered and static web applications.
- 📡 **Axios**: For making HTTP requests.
- 🎨 **TailwindCSS**: Utility-first CSS framework for styling.
- 🔔 **React Toastify**: Elegant notifications for React applications.

### 🗄️ Backend

- 🍃 **MongoDB**: NoSQL database for storing blog data.
- 📜 **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

## ✅ Prerequisites

Make sure you have the following installed:

- 🖥️ Node.js (v18 or above)
- 🍃 MongoDB

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd blog-system-main
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure MongoDB:

   - Open the file lib/config/db.js.
   - Replace the connection string with your MongoDB credentials:

   ```js
   import mongoose from "mongoose";

   export const connectDB = async () => {
     await mongoose.connect("your-mongodb-connection-string-here");
     console.log("Connected to MongoDB");
   };
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

<u>🌐 The app will be available at http://localhost:3000.</u>

## 📜 Available Scripts

In the project directory, you can run:

- 🔧 npm run dev: Runs the app in development mode.
- 🏗️ npm run build: Builds the app for production.
- 🚀 npm run start: Starts the production server.
- 🧹 npm run lint: Runs linting checks.

## 📂 Folder Structure

```bash
blog-system-main
├── app                 # Pages and API routes
├── assets              # Static assets like images
├── components          # Reusable React components
├── lib                 # Utility functions and helpers
├── public              # Publicly accessible files
├── styles              # Global CSS or Tailwind configuration
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Project metadata and scripts
```

## 📦 Dependencies

Here are the main dependencies used in this project:

- axios: ^1.7.7
- mongoose: ^8.7.1
- next: ^14.2.23
- react: ^18
- react-dom: ^18
- react-toastify: ^10.0.6
- tailwindcss: Installed via PostCSS

## 🤝 Contributions

Feel free to fork this project and submit a pull request. Contributions are always welcome! 😊
