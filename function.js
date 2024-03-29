const hamburger = document.querySelector("#checkbox");
const navMenu = document.querySelector(".nav-menu");
const navMenuOverlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("change", mobileMenu);

function mobileMenu() {
  if (hamburger.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
}

function closeMenu() {
  if (hamburger.checked) {
    hamburger.checked = false;
    navMenu.classList.remove("active");
  }
}

var nav = document.querySelector(".navbar");
var container = document.querySelector(".works-content");
const pop = document.querySelector(".pop");
const overlay = document.querySelector(".overlay");

function popMessage() {
  pop.classList.add("active");
  overlay.classList.add("active");
  container.classList.add("me-2");
  nav.classList.add("me-2");
  document.body.style.overflow = 'hidden';
  // document.addEventListener('scroll', preventScroll);
}

function removePopMessage() {
  pop.classList.remove("active");
  overlay.classList.remove("active");
  container.classList.remove("me-2");
  nav.classList.remove("me-2");
  document.body.style.overflow = '';
  // document.removeEventListener('scroll', preventScroll);
}

const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.nav-item .nav-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = navbar.offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;
    const duration = 20000;
    const delay = 100;
    setTimeout(() => {
      window.scroll({
        top: targetPosition,
        left: 0,
        behavior: 'smooth',
        duration: duration
      });
    }, delay);
  });
});

function randomValues() {
  anime({
    targets: '.shape-container .el',
    translateX: function () {
      return anime.random(-20, 20) + 'vw';
    },
    translateY: function () {
      return anime.random(-20, 20) + 'vh';
    },
    scale: function () {
      return anime.random(1, 3);
    },
    rotate: function () {
      return anime.random(0, 90);
    },
    duration: function () {
      return anime.random(5000, 5000);
    },
    borderRadius: [
      {
        value: '10%'
      },
      {
        value: anime.random(10, 15) + '%', duration: 50
      },
      {
        value: '50%', duration: 500
      }
    ],
    easing: 'easeOutElastic(1, .8)',
  });
  
  anime({
    targets: '.capstone-content .bg-element',
    translateX: function () {
      return anime.random(-5, 5) + 'vw';
    },
    translateY: function () {
      return anime.random(-5, 5) + 'vh';
    },
    rotate: function () {
      return anime.random(0, 20);
    },
    scale: function () {
      return anime.random(1, .8);
    },
    duration: function () {
      return anime.random(4000, 4000);
    },
    easing: 'easeOutElastic(1, .8)',
  });

  anime({
    targets: '.contact-content .bg-element',
    translateX: function () {
      return anime.random(-5, 10) + 'vw';
    },
    translateY: function () {
      return anime.random(-5, 10) + 'vh';
    },
    rotate: function () {
      return anime.random(0, 20);
    },
    scale: function () {
      return anime.random(1, .8);
    },
    duration: function () {
      return anime.random(7000, 7000);
    },
    easing: 'easeOutElastic(1, .8)',
  });
}

window.addEventListener('load', function () {
  randomValues();
  setInterval(randomValues, 5000);
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function autoSlide() {
  showSlide(currentSlide + 1);
  setTimeout(autoSlide, 3000);
}

autoSlide();
