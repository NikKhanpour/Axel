/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne: ["Russon One"],
      },
      backgroundImage: {
        wrapperBg: "url('assets/images/wrapperBackground.svg')",
        wrapperDark: "url('assets/images/wrapperDark.svg')",
      },
      colors: {
        dark: '#0d1117',
        light: '#f5f5f5'
      }
    },
  },
  "tailwind-class-sorter.classRegex": {
    "rescript": [
      "className\\w*?=\\w*(\"[\\s\\S]+?\")|className\\w*?=\\w*?\\{([\\s\\S]+?)\\}",
      "\"(.+?)\""
    ]
  },
  plugins: [],
}