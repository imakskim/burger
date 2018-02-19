
/// OPEN MENU ///
const openMenu = document.querySelector('.header__menu');
const trigger = document.querySelector('.hamburger-menu-link__bars');

trigger.addEventListener("click", function () {
    if (openMenu.classList.contains('header__menu--active')) {
        openMenu.classList.remove('header__menu--active');
        trigger.classList.remove('hamburger-menu-link__bars--active')
    } else {
        openMenu.classList.add('header__menu--active');
        trigger.classList.add('hamburger-menu-link__bars--active')
    }
});

// ACCO ///
const acco1 = document.querySelector('.js-acco1');
const acco2 = document.querySelector('.js-acco2');
const acco3 = document.querySelector('.js-acco3');

acco1.addEventListener("click", function () {
    if (acco1.classList.contains('selection__acco-item--active')) {
        acco1.classList.remove('selection__acco-item--active')
    }
    else {
        acco1.classList.add('selection__acco-item--active')
        acco2.classList.remove('selection__acco-item--active')
        acco3.classList.remove('selection__acco-item--active')
    }
});

acco2.addEventListener("click", function () {
    if (acco2.classList.contains('selection__acco-item--active')) {
        acco2.classList.remove('selection__acco-item--active')
    }
    else {
        acco1.classList.remove('selection__acco-item--active')
        acco2.classList.add('selection__acco-item--active')
        acco3.classList.remove('selection__acco-item--active')
    }
});

acco3.addEventListener("click", function () {
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
const teamAcco1 = document.querySelector('.js-team__acco1');
const teamAcco2 = document.querySelector('.js-team__acco2');
const teamAcco3 = document.querySelector('.js-team__acco3');
const teamAcco4 = document.querySelector('.js-team__acco4');
const teamTrigger1 = document.querySelector('.js-team-trigger1');
const teamTrigger2 = document.querySelector('.js-team-trigger2');
const teamTrigger3 = document.querySelector('.js-team-trigger3');
const teamTrigger4 = document.querySelector('.js-team-trigger4');

teamTrigger1.addEventListener('click', function () {
    if (teamAcco1.classList.contains('team__acco-item--active')) {
        teamAcco1.classList.remove('team__acco-item--active')
    } else {
        teamAcco1.classList.add('team__acco-item--active')
        teamAcco2.classList.remove('team__acco-item--active')
        teamAcco3.classList.remove('team__acco-item--active')
        teamAcco4.classList.remove('team__acco-item--active')
    }
});

teamTrigger2.addEventListener('click', function () {
    if (teamAcco2.classList.contains('team__acco-item--active')) {
        teamAcco2.classList.remove('team__acco-item--active')
    } else {
        teamAcco1.classList.remove('team__acco-item--active')
        teamAcco2.classList.add('team__acco-item--active')
        teamAcco3.classList.remove('team__acco-item--active')
        teamAcco4.classList.remove('team__acco-item--active')
    }
});

teamTrigger3.addEventListener('click', function () {
    if (teamAcco3.classList.contains('team__acco-item--active')) {
        teamAcco3.classList.remove('team__acco-item--active')
    } else {
        teamAcco1.classList.remove('team__acco-item--active')
        teamAcco2.classList.remove('team__acco-item--active')
        teamAcco3.classList.add('team__acco-item--active')
        teamAcco4.classList.remove('team__acco-item--active')
    }
});

teamTrigger4.addEventListener('click', function () {
    if (teamAcco4.classList.contains('team__acco-item--active')) {
        teamAcco4.classList.remove('team__acco-item--active')
    } else {
        teamAcco1.classList.remove('team__acco-item--active')
        teamAcco2.classList.remove('team__acco-item--active')
        teamAcco3.classList.remove('team__acco-item--active')
        teamAcco4.classList.add('team__acco-item--active')
    }
});

// owlcaruosel ///
let prev = document.querySelector('.js-owl-prev');
let next = document.querySelector('.js-owl-next');
let owl = $('.owl-carousel')
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1
    })
});

next.addEventListener("click", function () {
    owl.trigger("next.owl.carousel")
});
prev.addEventListener("click", function () {
    owl.trigger("prev.owl.carousel")
});

// onePageScroll //
$(document).ready(function () {
    $('.js-fullpage').fullpage();
    FastClick.attach(document.body);
});

// REVIEWS OVERLAY ///
const openButton1 = document.querySelector(".openOverlay1");
const openButton2 = document.querySelector(".openOverlay2");
const openButton3 = document.querySelector(".openOverlay3");
const openButton4 = document.querySelector(".openOverlay4");
const openButton5 = document.querySelector(".openOverlay5");
const openButton6 = document.querySelector(".openOverlay6");
const openButton7 = document.querySelector(".openOverlay7");
const openButton8 = document.querySelector(".openOverlay8");

function openOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.innerHTML = template.innerHTML; 

  const closeElement = overlayElement.querySelector(".closeOverlay");
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  const contentElement = overlayElement.querySelector(".contentOverlay");
  const contentElementText = overlayElement.querySelector(".contentOverlayText")
  contentElementText.innerHTML = content;

  return overlayElement;
}

const reviewsOverlay1 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay2 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay3 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay4 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay5 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay6 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay7 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');
const reviewsOverlay8 = openOverlay(' <span class="reviews__title reviews__titleOverlay"> Константин Спилберг</span> <br><p class="reviews__desc reviews__descOverlay">Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.</p>');

openButton1.addEventListener("click", function() {
  document.body.appendChild(reviewsOverlay1);
});
openButton2.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay2);
});
openButton3.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay3);
});
openButton4.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay4);
});
openButton5.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay5);
});
openButton6.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay6);
});
openButton7.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay7);
});
openButton8.addEventListener("click", function() {
    document.body.appendChild(reviewsOverlay8);
});






