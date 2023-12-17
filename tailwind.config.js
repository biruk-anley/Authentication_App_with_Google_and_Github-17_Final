/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./layout/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors:{
      '5699B3': '#5699B3',
      '267D9E': '#267D9E',
    }
  },
};

export const plugins = [];

