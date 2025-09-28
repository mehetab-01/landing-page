# Landing Page Animation Repository

This repository provides a modern animated landing page component, designed to be displayed before any main page content loads. It features smooth animations using GSAP and Anime.js, custom fonts, and Tailwind CSS for styling.

## Project Structure

- **index.html, style.css**: Static landing page demo.
- **fonts/**: Contains the custom font `voyage.otf`.
- **react-app/**: React + TypeScript app for the animated landing page, with font assets and configuration files.
- **react-components/**: React (JavaScript) component library for reusable landing page animations.

## Features
- Animated landing page using GSAP and Anime.js
- Custom font integration (`voyage.otf`)
- Tailwind CSS for rapid styling
- Ready-to-use React components

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

#### For `react-app`
```bash
cd react-app
npm install
npm start
```

#### For `react-components`
```bash
cd react-components
npm install
npm start
```

## Usage
- Use the landing page animation as a splash screen before loading your main content.
- Import and customize components from `react-components/src/components` as needed.

## Customization
- Change fonts by replacing files in the `fonts/` directory.
- Edit animation logic in `LandingPageAnimation.jsx` or `App.tsx`.
- Update styles using Tailwind CSS classes in the respective `index.css` files.

## License
Specify your license here (MIT, Apache, etc.)

## Credits
- [GSAP](https://greensock.com/gsap/)
- [Anime.js](https://animejs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---
Feel free to modify this README to better fit your project’s needs.
