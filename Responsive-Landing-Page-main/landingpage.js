// Function to open the side navigation bar
function openNavbar() {
  const sideNavbar = document.getElementById("sideNavigationBar");
  sideNavbar.classList.add("active");
}

// Function to close the side navigation bar
function closeNavbar() {
  const sideNavbar = document.getElementById("sideNavigationBar");
  sideNavbar.classList.remove("active");
}

// Toggle active class for the navigation bar on small screens
function toggleNavbar() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".navbar ul");
  const sideMenuButton = document.querySelector(".sideMenuButton");

  navbar.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    sideMenuButton.classList.toggle("active");
  });
}

// Event listener for toggling the navigation bar
toggleNavbar();
