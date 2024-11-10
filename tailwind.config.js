/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/HeroImage.png')",
        'new-air-x-feature' : "url('/src/assets/Features2.3Img.png')",
        'specification-air' : "url('/src/assets/Img.svg')",
        'air-x-ad' : "url('/src/assets/AirXAdImg.png')"
      }
    },
  },
  plugins: [],
}

