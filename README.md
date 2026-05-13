# ATS Dashboard

> **Live Demo:** [https://ats-dashboard-coral.vercel.app/login](https://ats-dashboard-coral.vercel.app/login)  
> **GitHub Repo:** [https://github.com/sohalchunarkar/ats-dashboard](https://github.com/sohalchunarkar/ats-dashboard)

A responsive Applicant Tracking System (ATS) dashboard built with React and Tailwind CSS. The app includes a login page with protected routes, and four main pages — Dashboard, Jobs, Candidates, and About — with full search, filter, and pagination functionality.

---

## 🔐 Login Credentials

The app starts on the login page. Use the following dummy credentials to access the dashboard:

| Field    | Value             |
|----------|-------------------|
| Email    | admin@test.com    |
| Password | password          |

---

## 📸 Pages Overview

- **Login** — Entry point of the app. Authenticated via localStorage. Includes a theme toggle.
- **Dashboard** — Overview summary cards, an applications area chart (last 6 months), and an offer acceptance rate card.
- **Jobs** — Lists all job postings with search by title and filter by department. Paginated (7 per page).
- **Candidates** — Lists all candidates with search by name and filters by status and gender. Paginated (7 per page). Clicking any candidate card opens a **detailed modal** showing full candidate information including name, education, institute, email, gender, address, experience, status, and score.
- **About** — Information about the ATS platform and a contact form.

---

## ✨ Features

- 🔒 Protected routes — unauthenticated users are redirected to login
- 🌙 Dark / Light mode toggle available on both the login page and navbar
- 🔍 Search and filter on Jobs (by title, department) and Candidates (by name, status, gender)
- 📄 Pagination on Jobs and Candidates pages (7 items per page)
- 📊 Area chart for application trends using Recharts
- 📋 Candidate detail modal — click any candidate card to view full profile details in an overlay modal
- 💾 Dummy JSON data used for all listings (no backend required)
- 📱 Fully responsive — works seamlessly across mobile, tablet, and desktop screen sizes

---

## 🛠️ Tech Stack

| Technology       | Usage                              |
|------------------|------------------------------------|
| React 19         | UI library                         |
| React Router v7  | Client-side routing                |
| Context API      | Global theme (dark/light) state    |
| useState / useEffect | Local state and side effects   |
| Tailwind CSS v4  | Styling and dark mode              |
| Recharts         | Area chart on dashboard            |
| Vite             | Build tool and dev server          |

---

## 🧠 React Concepts Used

- **Routing** — `react-router-dom` with nested routes, protected routes via a `ProtectedRoutes` wrapper, and `Navigate` for redirects
- **Context API** — `ThemeContext` provides the `theme` state and `setTheme` setter globally across all components
- **State (`useState`)** — Used for search queries, filter values, pagination, modal visibility, form inputs, and theme
- **Effects (`useEffect`)** — Used to apply the dark/light class to `document.documentElement`, filter/search results reactively, and handle pagination updates
- **Custom hooks pattern** — `useContext(ThemeDataContext)` consumed in Navbar, Footer, LoginPage, and ApplicationChart

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ApplicationChart.jsx   # Recharts area chart
│   ├── CandidateCard.jsx      # Candidate list item
│   ├── CandidateModal.jsx     # Candidate detail modal
│   ├── Footer.jsx
│   ├── JobCard.jsx            # Job list item
│   ├── MainLayout.jsx         # Navbar + Outlet + Footer wrapper
│   ├── Navbar.jsx             # Top nav with theme toggle
│   ├── OfferAcceptanceCard.jsx
│   ├── ProtectedRoutes.jsx    # Auth guard
│   └── SummaryCard.jsx        # Dashboard summary stats
├── Context/
│   └── ThemeContext.jsx       # Dark/light mode context
├── data/
│   ├── candidateData.js       # Dummy candidate JSON
│   ├── dashboardSummary.js    # Dummy summary stats
│   └── postedJobs.js          # Dummy job listings
├── pages/
│   ├── About.jsx
│   ├── Candidates.jsx
│   ├── DashBoard.jsx
│   ├── JobsLIsting.jsx
│   └── LoginPage.jsx
├── App.jsx                    # Route definitions
├── main.jsx                   # App entry point
└── index.css                  # Tailwind imports + dark mode variant
```

---

## ⚙️ Setup Instructions

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above recommended)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ats-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

5. **Login with the dummy credentials**
   ```
   Email:    admin@test.com
   Password: password
   ```

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 📝 Notes

- All data is static and sourced from local JS files in `src/data/`. No backend or API calls are made.
- Authentication is simulated using `localStorage`. Clearing localStorage will log the user out.
- Dark mode defaults to enabled on first load.
