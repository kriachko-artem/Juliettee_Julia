const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click',openMenu);

function openMenu(){
    burgerButton.classList.toggle('opened');
    document.querySelector('.menu-mobile').classList.toggle('opened');
    document.querySelector('body').classList.toggle('opened')
}







