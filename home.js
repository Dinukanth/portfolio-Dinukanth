// document.addEventListener('DOMContentLoaded', function () {
//     const burgerMenu = document.getElementById('burger-menu');
//     const navbar = document.getElementById('navbar');

//     burgerMenu.addEventListener('click', function () {
//         navbar.classList.toggle('show');
//     });

//     navbar.addEventListener('click', function () {
//         navbar.classList.remove('show');
//     });
// });





document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');

    toggleDarkModeButton.addEventListener('click', function () {
        // Toggle dark mode class on the body
        document.body.classList.toggle('dark-mode');
    });
});
