/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
        
      sm: "640px",  // Default Tailwind `sm`
      md: "768px", // Custom breakpoint for `md`
      lg: "1024px", // Default Tailwind `lg`
      xl: "1280px", // Default Tailwind `xl`
      mmd: "1100px", // Custom breakpoint for `md`
      },
    },
    plugins: [],
  }