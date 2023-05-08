const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
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

document.addEventListener('DOMContentLoaded', function () {
  var accordionHeaders = document.querySelectorAll('.accordion-header');
  var maxHeightIncrement = 200;

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {

      var activeAccordion = document.querySelector('.accordion-header.active');
      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.classList.remove('active');
        activeAccordion.querySelector('.accordion-icon').style.transform = '';
        activeAccordion.nextElementSibling.style.maxHeight = null;
      }

      this.classList.toggle('active');
      var accordionContent = this.nextElementSibling;
      var accordionIcon = this.querySelector('.accordion-icon');
      if (this.classList.contains('active')) {
        accordionContent.style.maxHeight = (accordionContent.scrollHeight + maxHeightIncrement) + 'px';
        accordionIcon.style.transform = 'rotate(180deg)';
      } else {
        accordionContent.style.maxHeight = null;
        accordionIcon.style.transform = '';
      }
    });
  });
});

const checkbox = document.querySelector("input[type='checkbox']");
  
  checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})


function randomValues() {
  anime({
    targets: '.shape-container .el',
    translateX: function() {
      return anime.random(-20, 20) + 'vw';
    },
    translateY: function() {
      return anime.random(-20, 20) + 'vh';
    },
    scale: function() {
      return anime.random(0.3, 1.6);
    },
    rotate: function() {
      return anime.random(-360, 360);
    },
    duration: function() {
      return anime.random(2000, 4000);
    },
    borderRadius: [
      { 
        value: '10%' 
      },
      {
        value: anime.random(10 ,15) + '%', duration: 50 
      },
      {
        value: '50%', duration: 500
      }
    ],
    easing: 'easeOutElastic(1, .9)',
  });
}

window.addEventListener('load', function() {
  randomValues();
  setInterval(randomValues, 4000);
});