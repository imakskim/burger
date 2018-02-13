
// OPEN MENU ///
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

// ACCO ///
const acco1 = document.querySelector ('.js-acco1');
const acco2 = document.querySelector ('.js-acco2');
const acco3 = document.querySelector ('.js-acco3');

acco1.addEventListener ("click", function(){
    if (acco1.classList.contains('selection__acco-item--active')) {
        acco1.classList.remove('selection__acco-item--active')
    }
    else {
        acco1.classList.add('selection__acco-item--active')
        acco2.classList.remove('selection__acco-item--active')
        acco3.classList.remove('selection__acco-item--active')
    }
});

acco2.addEventListener ("click", function(){
    if (acco2.classList.contains('selection__acco-item--active')) {
        acco2.classList.remove('selection__acco-item--active')
    }
    else {
        acco1.classList.remove('selection__acco-item--active')
        acco2.classList.add('selection__acco-item--active')
        acco3.classList.remove('selection__acco-item--active')
    }
});

acco3.addEventListener ("click", function(){
    if (acco3.classList.contains('selection__acco-item--active')) {
        acco3.classList.remove('selection__acco-item--active')
    }
    else {
        acco1.classList.remove('selection__acco-item--active')
        acco2.classList.remove('selection__acco-item--active')
        acco3.classList.add('selection__acco-item--active')
    }
});

// TEAM ACCO ///
const teamAcco1 = document.querySelector ('.js-team__acco1');
const teamAcco2 = document.querySelector ('.js-team__acco2');
const teamAcco3 = document.querySelector ('.js-team__acco3');
const teamAcco4 = document.querySelector ('.js-team__acco4');
const teamTrigger1 = document.querySelector ('.js-team-trigger1');
const teamTrigger2 = document.querySelector ('.js-team-trigger2');
const teamTrigger3 = document.querySelector ('.js-team-trigger3');
const teamTrigger4 = document.querySelector ('.js-team-trigger4');

teamTrigger1.addEventListener ('click', function(){
    if(teamAcco1.classList.contains('team__acco-item--active')) {
        teamAcco1.classList.remove('team__acco-item--active')
    }else {
        teamAcco1.classList.add('team__acco-item--active')
        teamAcco2.classList.remove('team__acco-item--active')
        teamAcco3.classList.remove('team__acco-item--active')
        teamAcco4.classList.remove('team__acco-item--active')
    }
});

teamTrigger2.addEventListener ('click', function(){
    if(teamAcco2.classList.contains('team__acco-item--active')) {
        teamAcco2.classList.remove('team__acco-item--active')
    }else {
        teamAcco1.classList.remove('team__acco-item--active')
        teamAcco2.classList.add('team__acco-item--active')
        teamAcco3.classList.remove('team__acco-item--active')
        teamAcco4.classList.remove('team__acco-item--active')
    }
});

teamTrigger3.addEventListener ('click', function(){
    if(teamAcco3.classList.contains('team__acco-item--active')) {
        teamAcco3.classList.remove('team__acco-item--active')
    }else {
        teamAcco1.classList.remove('team__acco-item--active')
        teamAcco2.classList.remove('team__acco-item--active')
        teamAcco3.classList.add('team__acco-item--active')
        teamAcco4.classList.remove('team__acco-item--active')
    }
});

teamTrigger4.addEventListener ('click', function(){
    if(teamAcco4.classList.contains('team__acco-item--active')) {
        teamAcco4.classList.remove('team__acco-item--active')
    }else {
        teamAcco1.classList.remove('team__acco-item--active')
        teamAcco2.classList.remove('team__acco-item--active')
        teamAcco3.classList.remove('team__acco-item--active')
        teamAcco4.classList.add('team__acco-item--active')
    }
});