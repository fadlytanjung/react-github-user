# 🚀 Github Repositories Explorer

Github Repositories Explorer is a web app that lets users search and view Github repositories by username or keyword.
It's responsive and works well on both desktop and mobile devices.

🔗 **Live Demo:** [https://react-github-user-iota.vercel.app](https://react-github-user-iota.vercel.app)

## Features

- 🔍 Search by Github username
- 📦 View user repositories
- 🌗 Responsive design (cards or accordion layout)
- 🔁 Infinite scroll on mobile (accordion)
- 🧪 Unit testing with Vitest and Testing Library

## 🔧 Tech Stack

- **React + TypeScript**
- **Vite**
- **Mantine UI**
- **TanStack React Query**
- **React Hook Form + Zod**
- **Vitest + Testing Library**

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fadlytanjung/react-github-user.git
cd react-github-user
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your Github token:

```env
VITE_GITHUB_TOKEN=your_github_token_here
VITE_DEFAULT_GITHUB_USER=your_github_username
```

### 4. Start the development server

```bash
npm run dev
```

Visit `http://localhost:5173` to open the app.

---

## 🧪 Running Tests

### Run Unit Tests

```bash
npm run test
```

### Run Tests with Coverage Report

```bash
npm run test:cover
```

You’ll find the coverage report in the `coverage/` folder.

---

## 📁 Folder Structure

```
src/
├── components/        # Reusable components (SearchBar, RepoCard, etc.)
├── services/          # API services and schemas
├── pages/             # Main page: GitHubExplorer.tsx
├── types/             # TypeScript definitions
├── utils/             # Custom utilities or test wrappers
├── assets/            # Assets like `svg`
public/                # Images like `error.jpg`, `not-found.avif`         
```

---

## Screenshots

<img width="714" alt="Screenshot 2025-06-03 at 16 47 49" src="https://github.com/user-attachments/assets/8b89e376-49a9-416d-b875-cae07314df1c" />

<img width="475" alt="Screenshot 2025-06-03 at 16 49 15" src="https://github.com/user-attachments/assets/c305a216-8b97-4eb9-a068-d969f46383ce" />



## 📄 License

MIT

---

## 🙌 Author

Built with ❤️ by [Fadly Tanjung](https://github.com/fadlytanjung)
