// NAVBAR START
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }
// NAVBAR END

// OUR OBJECTIVES START
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
}

// OUR OBJECTIVES END

