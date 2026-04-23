const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 5000);

  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }

// ABOUT SESSION START 
const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach(el => observer.observe(el));
// ABOUT SESSION END

//OUR COMMUNITIES SESSION START
 const elements = document.querySelectorAll('.fade-up');

const observerCommunities = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
}, { threshold: 0.2 });

elements.forEach(el => observerCommunities.observe(el));
//OUR COMMUNITIES SESSION END

//Our Program Start
const cards = document.querySelectorAll(".animate");

  const observerProgram = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observerProgram.observe(card));
//Our Program End

//GET INVOLVED START
const cta = document.getElementById("cta");

  const observerCta = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cta.classList.remove("opacity-0", "translate-y-10");
        cta.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, { threshold: 0.3 });

  observerCta.observe(cta);
//GET INVOLVED END