## About The Project

This project is a personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. It showcases the my work experience at various companies, education, projects, and technical skills.

### Key Features

- **Work Experience Section:** Displays previous work experiences with details about the role, company, and responsibilities.
- **Projects Section :** Showcases personal projects with descriptions and technologies used. Includes a MacWindow component to emulate a desktop environment for project display.
- **Skills Section:** Lists technical skills with icons for various languages, frameworks, and tools.
- **Education Section:** Details educational background, including university and relevant coursework.
- **Responsive Design:** Utilizes Tailwind CSS and `react-responsive` to adapt to different screen sizes.
- **Dark Mode:** Implements a dark mode toggle using `localStorage` to persist user preferences.
- **Animations:** Employs `framer-motion` for smooth transitions and animations.
- **UI Components:** Uses `shadcn/ui` and `@nextui-org` for pre-built, customizable UI components.

## Architecture

The project is structured as a Next.js application with the following key technologies:

- **Frontend:**
  - **Next.js:** A React framework for building server-rendered and statically generated web applications.
  - **React:** A JavaScript library for building user interfaces.
  - **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
  - **Tailwind CSS:** A utility-first CSS framework for rapidly styling HTML elements.
  - **Framer Motion:** A motion library for React to create animations and transitions.
  - **Shadcn/ui:** A collection of reusable UI components built with Radix UI and Tailwind CSS.
  - **@nextui-org:** A React UI library providing accessible and customizable components.
  - **Embla Carousel:** A carousel library for creating smooth and responsive carousels.
- **Fonts:**
  - Custom fonts are used for titles and body text, optimized with `next/font`.
- **Data:**
  - Data for work experience and projects is stored in `lib/data.ts`.

