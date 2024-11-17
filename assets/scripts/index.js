/*
// Disable right-click on the whole document
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent context menu from appearing
});

//Disable Dev Tools access
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();  // Block opening DevTools
        alert('Developer tools are disabled.');
    }
});

*/

// Toggle menu for mobile view
function toggleMenu() {
    const menu = document.querySelector('ul');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('open');
  }