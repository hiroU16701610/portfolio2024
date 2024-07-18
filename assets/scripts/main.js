document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('#hmb');
    const body = document.body;

    hamburgerMenu.addEventListener('click', function() {
        body.classList.toggle('active');
    });
});