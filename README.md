# 🚀 GitHub Repositories Explorer

GitHub Repositories Explorer is a responsive web application that allows users to **search and view GitHub repositories** by username or keyword. It’s optimized for both desktop and mobile devices and includes features like:

- 🔍 Search by GitHub username
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

Create a `.env` file in the root directory and add your GitHub token:

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
├── assets/            # Images like `error.jpg`, `not-found.avif`
```

---

## 📄 License

MIT

---

## 🙌 Author

Built with ❤️ by [Fadly Tanjung](https://github.com/fadlytanjung)