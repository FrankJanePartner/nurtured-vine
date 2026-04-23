// NAVBAR START
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }
// NAVBAR END


// ACCOUNT NUMBER START
function copyText(button, text) {
  navigator.clipboard.writeText(text);

  const copyIcon = button.querySelector(".copy-icon");
  const checkIcon = button.querySelector(".check-icon");

  copyIcon.classList.add("hidden");
  checkIcon.classList.remove("hidden");

  setTimeout(() => {
    copyIcon.classList.remove("hidden");
    checkIcon.classList.add("hidden");
  }, 2000);

  const toast = document.getElementById("toast");
  toast.classList.remove("opacity-0", "translate-y-5");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-5");
  }, 2000);
}

// ACCOUNT NUMBER END

// ABOUT DONATE START

const animatedElements = document.querySelectorAll('.animate-fade-up');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => {
  el.style.animationPlayState = 'paused';
  revealObserver.observe(el);
});
// ABOUT DONATE END