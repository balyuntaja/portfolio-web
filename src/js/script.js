// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.getElementById("year").textContent = new Date().getFullYear();

// click outside Hamburger
window.addEventListener("click", function (e) {
  if ((e.target != hamburger) & (e.target != navMenu)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  } else {
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = 'dark';
  } else {
    html.classList.remove("dark");
    localStorage.theme = 'light';
  }
});

// Set initial theme on page load
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true; // Ensure toggle matches the theme
} else {
  document.documentElement.classList.remove("dark");
  darkToggle.checked = false; // Ensure toggle matches the theme
}

// Add event listener for the toggle switch
darkToggle.addEventListener("change", function () {
  if (darkToggle.checked) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark"; // Save user's preference
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light"; // Save user's preference
  }
});

// Handle OS theme preference changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      document.documentElement.classList.toggle("dark", e.matches);
      darkToggle.checked = e.matches;
    }
  });

// Functions to manage theme explicitly
function setLightMode() {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  darkToggle.checked = false; // Update the toggle state
}

function setDarkMode() {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  darkToggle.checked = true; // Update the toggle state
}

function respectSystemPreference() {
  localStorage.removeItem("theme");
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", isDark);
  darkToggle.checked = isDark; // Sync toggle state
}
