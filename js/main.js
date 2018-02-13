const openMenu = document.querySelector ('.header__menu');
const trigger = document.querySelector ('.hamburger-menu-link__bars');

trigger.addEventListener ("click", function() {
    if (openMenu.classList.contains('header__menu--active')) {
        openMenu.classList.remove('header__menu--active');
        trigger.classList.remove('hamburger-menu-link__bars--active')
    }else {
        openMenu.classList.add('header__menu--active');
        trigger.classList.add('hamburger-menu-link__bars--active')
    }
});