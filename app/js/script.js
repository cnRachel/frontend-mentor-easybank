const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');
    if (header.classList.contains('open')) { // close ham menu
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');



    }
    else { // open ham menu
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');

    }
});