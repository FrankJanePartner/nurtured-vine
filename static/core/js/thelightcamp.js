// NAVBAR
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

// ================= COUNTER =================
document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll('.counter');
  const section = document.getElementById("impactSection");

  function runCounter(el) {
    const target = +el.getAttribute('data-target');
    let count = 0;

    const increment = target / 100; // smoother

    function update() {
      count += increment;

      if (count < target) {
        el.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        el.innerText = target.toLocaleString();
      }
    }

    update();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => runCounter(counter));
        observer.unobserve(section); // run once
      }
    });
  }, { threshold: 0.3 });

  if (section) {
    observer.observe(section);
  }

});