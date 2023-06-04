// Create a js script to change the theme from white to black on the page

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});