let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 0.3s ease-in';
  } else {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.3s ease-out';
  }
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

menuIcon.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
});

// Get a reference to the web-langs element
const webLangs = document.querySelector(".web-langs");

// Set the animation play state to paused when the page loads
webLangs.style.animationPlayState = "paused";

// Add a hover event listener to the web-langs element
webLangs.addEventListener("mouseover", () => {
  // Set the animation play state to running when the user hovers over the element
  webLangs.style.animationPlayState = "running";
});

webLangs.addEventListener("mouseout", () => {
  // Set the animation play state to paused when the user moves the cursor away from the element
  webLangs.style.animationPlayState = "paused";
});

// Get a reference to the logo elements
const logos = document.querySelectorAll(".logo1, .logo2, .logo3, .logo4, .logo5, .logo6, .logo7, .logo8, .logo9, .logo10, .logo11, .logo12");

// Set the top and left properties of each logo element to a random value
logos.forEach((logo) => {
  logo.style.top = `${Math.random() * 100}%`;
  logo.style.left = `${Math.random() * 100}%`;
});

function sendMessage() {
  // Create the alert box
  var alertBox = document.createElement("div");
  alertBox.className = "alert";

  // Add a message
  var message = document.createTextNode("This button is not yet functional. Sorry for the inconvenience.");
  alertBox.appendChild(message);

  // Add a close button
  var closeButton = document.createElement("span");
  closeButton.className = "closebtn";
  closeButton.innerHTML = "&times;";
  alertBox.appendChild(closeButton);

  // Add the alert box to the page
  document.body.appendChild(alertBox);

  // Set the opacity of the alert box to 1 to trigger the fade-in animation
  alertBox.style.opacity = "1";

  // Close the alert box when the close button is clicked
  closeButton.onclick = function() {
    alertBox.style.display = "none";
  }
}