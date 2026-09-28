# React Jobs Portal

A modern, responsive job board web application built with **React**, **React Router**, and **Tailwind CSS**. Designed for developers looking for frontend opportunities and employers looking to post openings.

---

## Features

- **Home Page**: Hero section highlighting key opportunities, quick-access cards for Developers and Employers, and recent job listings.
- **Job Listings**: View all available jobs in a responsive grid with expandable descriptions, salary info, and location tags.
- **Job Details**: Dedicated job detail page with full description, salary, company information, clickable contact links (`mailto:` and `tel:`), and management controls.
- **Add Job**: Intuitive form to submit new job listings with controlled inputs, category selection, and validation.
- **Edit Job**: Update existing listings with pre-populated values and instant redirect.
- **Delete Job**: Secure deletion with user confirmation prompt.
- **Graceful Data Handling**: Uses a mock REST API server (`json-server`) with Vite proxy, with automatic offline fallback to local dataset if the mock server is not running.
- **Responsive & Accessible**: Seamless experience across mobile, tablet, laptop, and desktop viewports, with focus visible indicators and keyboard navigation.

---

## Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Mock Backend**: [JSON Server](https://github.com/typicode/json-server)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation

Clone the repository and install dependencies:

```bash
cd react-project
npm install
```

### Running the Application

1. **Start the Frontend Development Server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

2. **Start the Mock API Server** (Optional for live CRUD persistence):
   In a separate terminal:
   ```bash
   npm run server
   ```
   The mock API server runs on `http://localhost:8000/jobs`.
   *(Note: The application includes fallback handling so it gracefully displays jobs even if the server is offline).*

### Other Scripts

- **Lint Code**:
  ```bash
  npm run lint
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## Project Structure

```
react-project/
├── pages/
│   ├── AddJobPage.jsx      # Add new job listing form
│   ├── EditJobPage.jsx     # Edit existing job listing form
│   ├── HomePage.jsx        # Landing page with hero & recent jobs
│   ├── JobPage.jsx         # Detailed job view & actions
│   ├── JobsPage.jsx        # All jobs listing page
│   └── NotFoundPage.jsx    # Custom 404 page
├── src/
│   ├── assets/             # Static brand assets and images
│   ├── components/
│   │   ├── Card.jsx        # Reusable card container component
│   │   ├── Hero.jsx        # Hero banner component
│   │   ├── Homecards.jsx   # Role selection cards
│   │   ├── Joblisting.jsx  # Single job card with preview toggle
│   │   ├── Joblistings.jsx # Grid of job listings with loading & empty states
│   │   ├── Navbar.jsx      # Navigation bar with active route highlighting
│   │   ├── spinner.jsx     # Loading spinner indicator
│   │   └── ViewAllJobs.jsx # Call-to-action button section
│   ├── layouts/
│   │   └── MainLayout.jsx  # Primary page wrapper layout
│   ├── loaders/
│   │   └── jobLoader.js    # Data loader for job detail and edit pages
│   ├── App.jsx             # Route definitions and application state
│   ├── index.css           # Global Tailwind CSS imports and base styles
│   └── main.jsx            # Application entry point
├── jobs.json               # Seed database for job listings
└── vite.config.js          # Vite configuration with Tailwind and API proxy
```
