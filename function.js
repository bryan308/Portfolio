let prevScrollpos = window.pageYOffset;

// Add event listener for window scroll to show/hide navbar
window.addEventListener('scroll', function() {
  // Get current scroll position
  let currentScrollPos = window.pageYOffset;
  // If scrolling up, show navbar
  if (prevScrollpos > currentScrollPos) {
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 0.3s ease-in';
  // If scrolling down, hide navbar
  } else {
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.3s ease-out';
  }
  // Update previous scroll position
  prevScrollpos = currentScrollPos;
});

const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar-item a');

navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = navbar.offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY - 10 + "px";
  cursor.style.left = e.pageX - 10 + "px";
});

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

const menuIcon = document.getElementById("menu-icon");
const navbarNav = document.querySelector(".navbar-nav");

// Add event listener for menu icon click to toggle navbar
menuIcon.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
});

var alertBoxVisible = false;
function sendMessage() {
    if(alertBoxVisible) return;

    var alertBox = document.createElement("div");
    alertBox.className = "alert";
    var message = document.createTextNode("This button is not yet functional, sorry for inconvenience.");
    alertBox.appendChild(message);
    var closeButton = document.createElement("span");
    closeButton.className = "closebtn";
    closeButton.innerHTML = "&times;";
    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
    alertBox.style.opacity = "1";
    alertBoxVisible = true;

    closeButton.onclick = function() {
        alertBox.parentNode.removeChild(alertBox);
        alertBoxVisible = false;
    }
}
