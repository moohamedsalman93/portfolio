/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    extend: {
      keyframes:{

        slidein1:{
          from:{
            opacity:"0",
            transform: "translateX(400px)",
           
          },
          to:{
            opacity:"1",
            transform:"translateX(0px)",
          },
        },
        slidein2:{
          from:{
            opacity:"0",
            transform: "translateX(0px)",
           
          },
          to:{
            opacity:"1",
            transform:"translateX(0px)",
          },
        },
        
      },
      animation:{
        slidein1:"slidein1 1s ease 300ms",
        slidein2:"slidein2 2s ease 300ms",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}