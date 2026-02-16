# SaaS Landing Page & Dashboard - MERN Shortlisting Task

A high-fidelity implementation of the "Squid" SaaS design, featuring a pixel-perfect landing page, a functional authentication system, and a feature-rich dashboard integrated with the JSONPlaceholder API.

## 🚀 Features

### Part A: Landing Page (Strict Figma Match)
- **Pixel-Perfect Fidelity**: 1:1 recreation of the provided Figma design.
- **Hero Background Glide**: Custom CSS gradient swoop implemented with precision.
- **Orbital Visualization**: Dynamic icon orbit system around the brand logo using Framer Motion.
- **Interactive Sections**:
    - Animated Feature Boxes with hover states.
    - Floating Guide cards (Gradient vs Dark).
    - FAQ with collapsible items.
    - World Map CTA section with high-quality assets.
- **Navigation & Footer**: High-end glassmorphism navbar and multi-column deep-black footer.

### Part B: Authentication
- **Redesigned UI**: Modern two-column layout for `/login` and `/signup`.
- **Photo Grid**: Curated professional portrait grid on the brand side for a premium feel.
- **Fake Auth Logic**:
    - Persistent tokens stored in `localStorage`.
    - Automated redirection for authenticated/unauthenticated users.
    - Interactive "Logout" functionality.

### Part C: Dashboard
- **Summary Overview**: Dynamic stats (Total Users, Companies) fetched live from JSONPlaceholder.
- **User Management**:
    - **API Integration**: Real-time data fetching with loading and error handling.
    - **Core Features**: Search by name/email, A-Z Sorting, and Client-side Pagination.
    - **User Detail**: Detailed modal view for each user showing company and address info.
- **Settings**:
    - Profile management form.
    - **Theme Toggle**: Functional Light/Dark mode with persistence.

---

## 🛠️ Technical Decisions & Tradeoffs

1. **Next.js 14 (App Router)**: Leveraged for its robust routing and optimized client/server component architecture.
2. **Tailwind CSS**: Used utility-first styling to achieve complex "Squid" aesthetics (glassmorphism, ambient glows) with high maintainability.
3. **Framer Motion**: Implemented for all high-end micro-animations to ensure the app feels "alive" and premium.
4. **Context API (Auth & Theme)**: Centralized state management for authentication and theme preferences to ensure a seamless global experience.
5. **Axios & JSONPlaceholder**: Standardized API interactions for reliability and clean data fetching patterns.

---

## 💻 Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/swarajladke/SaaS-Landing-Page.git
   cd SaaS-Landing-Page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots

*(Add your screenshots here)*

- **Landing Page**: View of the stunning hero and orbital guide.
- **Login Flow**: The new premium two-column auth experience.
- **User Management**: The feature-rich dashboard table with search and filters.
- **Settings**: Dark mode and profile management in action.

---

## 🎯 Implementation Notes
- **Fidelity**: Special attention was paid to spacing (8px grid), line heights, and typography weights to match the Figma spec.
- **Responsiveness**: The app is fully tested on Mobile, Tablet, and Desktop views (Zero horizontal overflow).
- **Quality**: Clean component structure focusing on reusable UI primitives in the `src/components/ui` directory.
