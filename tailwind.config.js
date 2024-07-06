/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-1": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
        "custom-2": "1px 2px 5px 0px rgba(0, 0, 0, 0.1)",
        "custom-3": "4px 8px 9px 0px rgba(0, 0, 0, 0.08)",
        "custom-4": "9px 18px 12px 0px rgba(0, 0, 0, 0.05)",
        "custom-5": "16px 32px 14px 0px rgba(0, 0, 0, 0.02)",
        "custom-6": "25px 49px 16px 0px rgba(0, 0, 0, 0.0)",
      },
    },
  },
  plugins: [],
};
