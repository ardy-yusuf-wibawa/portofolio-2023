/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      sansPro: ['Source Sans Pro', 'sans-serif'],
      extend: {}
    },
    plugins: [
      require('flowbite/plugin')
    ]
  }
}
