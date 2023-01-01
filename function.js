// Get a reference to the navbar element
const navbar = document.querySelector('.navbar');

// Get a reference to the navbar links
const navbarLinks = document.querySelectorAll('.navbar-item a');

// Add event listener for navbar links to smooth scroll to anchor targets
navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default link behavior
    e.preventDefault();
    // Get target element and navbar height
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = navbar.offsetHeight;
    // Calculate target position
    const targetPosition = targetElement.offsetTop - navbarHeight;
    // Smooth scroll to target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Get a reference to the cursor element
const cursor = document.querySelector('.cursor');

// Add event listener for mouse movement to update cursor position
document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY - 10 + "px";
  cursor.style.left = e.pageX - 10 + "px";
});

// Add event listener for mouse click to expand cursor
document.addEventListener('click', () => {
  cursor.classList.add("expand");
  // Remove expand class after 1s
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 1000);
});

// Get a reference to the menu icon element
const menuIcon = document.getElementById("menu-icon");

// Get a reference to the navbar nav element
const navbarNav = document.querySelector(".navbar-nav");

// Add event listener for menu icon click to toggle navbar
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
  var closeText = document.createTextNode("×");
  closeButton.appendChild(closeText);
  alertBox.appendChild(closeButton);

  // Add the alert box to the page
  document.body.appendChild(alertBox);

  // Add event listener for close button click to remove alert box
  closeButton.addEventListener("click", () => {
    document.body.removeChild(alertBox);
  });
}

// Get a reference to the send message button
const sendMessageButton = document.querySelector('.send-message');

// Add event listener for send message button click to show alert
sendMessageButton.addEventListener("click", () => {
    sendMessage();
  });
  
  // Get the current scroll position
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
