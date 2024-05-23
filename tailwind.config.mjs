import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0281DE",
        secondary: "#38C6B8",
        oscure: "#1A1A1A",
      },
    },
  },
  plugins: [animations],
};
