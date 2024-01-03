document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navLinks = document.getElementById('navbar-links');
  
    toggleButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  });
  