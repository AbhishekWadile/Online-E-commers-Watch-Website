/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins','sens-serif'],
      },
      rotate:{
        '7':'7deg', 
        '8':'8deg',
        '9':'9deg',
        '10':'10deg',
        '5':'5deg'
      },
      skew:{
        '5':'5deg',
        '7.8':'7.8deg',
        '7.5':'7.5deg',
        '8':'8deg',
        '-10':'-10deg',
        '20':'20deg'
      },
      width:{
        Superfull:"200%",
        "70%":"70%",
        '30%':'30%',
        '95%':'95%',
        '5%':'5%',
        '60%':'60%',
        '50%':'50%',
        '40%':'40%',
        '90%':'90%'
      },
      height:{
        "60vh":"60vh",
        "30vh":"30vh",
        "90vh":"90vh",
        "50vh":"50vh",
        "40vh":"40vh",
        "100vh":"100vh",
        "130vh":"130vh",

      },
      top:{
        "100":"26rem"
      }

    },
  },
  plugins: [],
}

