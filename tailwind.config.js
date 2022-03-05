module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(25, 100%, 94%)",
          200: "hsl(26, 100%, 55%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(223, 64%, 98%)",
          300: "hsl(220, 14%, 75%)",
          400: "hsl(219, 9%, 45%)",
          500: "hsl(220, 13%, 13%)",
          900: "hsl(0, 0%, 0%)",
        },
      },
      fontFamily: {
        body: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
