module.exports = {
  purge: [],
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '992px',
    // => @media (min-width: 992px) { ... }

    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },
  theme: {
    borderRadius: {
      'lg': '1.5rem'
    },
    boxShadow: {
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.12)'
    },
    extend: {
      colors: {
        'bg-body': 'hsl(0,0%,100%)',
        'main': 'hsl(243,100%,78%)',
        'accent': 'hsl(158,68%,64%)'
      }
    }
  },
  variants: {},
  plugins: []
};
