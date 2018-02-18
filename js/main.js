
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

// owlcaruosel //
let prev = document.querySelector ('.js-owl-prev');
let next = document.querySelector ('.js-owl-next');
let owl = $('.owl-carousel')
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1
    })
});

next.addEventListener("click", function(){
    owl.trigger("next.owl.carousel")
});
prev.addEventListener("click", function() {
    owl.trigger("prev.owl.carousel")
});

// onePageScroll //
$(document).ready(function () {
    $('.js-fullpage').fullpage();
    FastClick.attach(document.body);

    if (targetIndex == 0) {
        heroLink.classList.add('pagination__link--active');
        bestLink.classList.remove('pagination__link--active');
        
        heroLink.style.pointerEvents = 'none';
        bestLink.style.pointerEvents = 'auto';
    };

    if (targetIndex == 1) {
        heroLink.classList.remove('pagination__link--active');
        bestLink.classList.add('pagination__link--active');
        
        heroLink.style.pointerEvents = 'auto';
        bestLink.style.pointerEvents = 'none';
    }
});

// // pagination //
// let heroLink = document.querySelector ('.js-heroLink');
// let bestLink = document.querySelector ('.js-bestLink');
// let sliderLink = document.querySelector ('.js-sliderLink');
// let teamLink = document.querySelector ('.js-teamLink');
// let selectionLink = document.querySelector ('.js-selectionLink');
// let reviewsLink = document.querySelector ('.js-reviewsLink');
// let orderLink = document.querySelector ('.js-orderLink');
// let yamapLink = document.querySelector ('.js-yamapLink');

// let hero = document.querySelector ('.hero');
// let best = document.querySelector ('.best');
// let slider = document.querySelector ('.slider');
// let team = document.querySelector ('.team');
// let selection = document.querySelector ('.selection');
// let reviews = document.querySelector ('.reviews');
// let order = document.querySelector ('.order');
// let yamap = document.querySelector ('.yamap');


// bestLink.addEventListener("click", function(event){
//     event.preventDefault();
    // hero.style.transform = "translateY(-100%)";
    // best.style.transform = "translateY(-100%)";
    // slider.style.transform = "translateY(-100%)";
    // team.style.transform = "translateY(-100%)";
    // selection.style.transform = "translateY(-100%)";
    // reviews.style.transform = "translateY(-100%)";
    // order.style.transform = "translateY(-100%)";
//     // yamap.style.transform = "translateY(-100%)";
//     currIndex = '1';
//     that.gotoTarget(targetIndex);
//     console.log(currIndex)
// });








