/*
 *	created by zhangkai on 2016/10/10 
 */

//  PAGINATION ANCHORS //
var heroLink = document.querySelector('.js-heroLink');
var bestLink = document.querySelector('.js-bestLink');
var sliderLink = document.querySelector('.js-sliderLink');
var teamLink = document.querySelector('.js-teamLink');
var selectionLink = document.querySelector('.js-selectionLink');
var reviewsLink = document.querySelector('.js-reviewsLink');
var orderLink = document.querySelector('.js-orderLink');
var yamapLink = document.querySelector('.js-yamapLink');

//  MAIN MENU ANCHORS  //
var bestMenuLink = document.querySelector('.js-bestMenuLink');
var sliderMenuLink = document.querySelector('.js-sliderMenuLink');
var teamMenuLink = document.querySelector('.js-teamMenuLink');
var selectionMenuLink = document.querySelector('.js-selectionMenuLink');
var reviewsMenuLink = document.querySelector('.js-reviewsMenuLink');
var contactsMenuLink = document.querySelector('.js-contactsMenuLink');
var recieveMenuLink = document.querySelector('.js-recieve');
var recieveMenuLink2 = document.querySelector('.js-recieve2');

var appeareFooter = document.querySelector('.js-appearance-footer');
var appeareTouchFooter = document.querySelector('.js-appeareTouchFooter');
var position;

// for cycles //
var n = 0;
var i = 0;
var anchorLinks = [heroLink, bestLink, sliderLink, teamLink, selectionLink, reviewsLink, orderLink, yamapLink];
var lengthLinks = anchorLinks.length;

; (function (global, $) {
	'use strict';
	var Fullpage = (function () {
		function Fullpage(el, options) {
			this.$el = el;
			this.currIndex = 0;
			this.animating = false;
			this.init();
		}

		var utils = {
			throttle: function (callback, delayTime, maxTime) {
				var timer = null;
				var prevTime = 0;

				return function () {
					var context = this;
					var argument = arguments;
					var currTime = Date.now();
					if (maxTime && currTime - prevTime >= maxTime) {
						prevTime = currTime;
						callback.apply(context, argument);
					} else {
						if (timer) clearTimeout(timer);
						timer = setTimeout(function () {
							callback.apply(context, argument);
						}, delayTime);
					}
				}
			}
		};

		Fullpage.prototype = {
			constructor: Fullpage,
			init: function () {
				this.initHTML();
				this.bindEvent();
			},
			initHTML: function () {
				this.$el.children().css({
					'height': '100vh',
					'transition': 'all 0.2s',
					'-webkit-transition': 'all 0.2s'
				});
			},
			bindEvent: function () {
				var that = this;
				var targetIndex, x0, y0, xDiff, yDiff, delta;

				$(window).on('wheel DOMMouseScroll', utils.throttle(function () {
					var e = arguments[0].originalEvent;
					delta = e.wheelDelta ? e.wheelDelta : -e.detail;
					targetIndex = that.currIndex + (delta > 0 ? -1 : 1);
					that.gotoTarget(targetIndex);

					if (targetIndex == 0) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						heroLink.classList.add('pagination__link--active');
						heroLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 1) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						bestLink.classList.add('pagination__link--active');
						bestLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 2) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						sliderLink.classList.add('pagination__link--active');
						sliderLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 3) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						teamLink.classList.add('pagination__link--active');
						teamLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 4) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						selectionLink.classList.add('pagination__link--active');
						selectionLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 5) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						reviewsLink.classList.add('pagination__link--active');
						reviewsLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 6) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						orderLink.classList.add('pagination__link--active');
						orderLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 7) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						yamapLink.classList.add('pagination__link--active');
						yamapLink.style.pointerEvents = 'none';
						appeareFooter.style.display = 'block';
					}else {
						appeareFooter.style.display = 'none';
					};
					if (targetIndex == 8) {
						appeareFooter.style.display = 'block';
					};
					console.log(targetIndex);

				}, 100));

				this.$el.on('touchstart', function (e) {
					x0 = e.touches[0].clientX;
					y0 = e.touches[0].clientY;
				});

				this.$el.on('touchmove', utils.throttle(function () {
					var e = arguments[0];
					if (!x0 || !y0) return;
					xDiff = e.touches[0].clientX - x0;
					yDiff = e.touches[0].clientY - y0;
					targetIndex = that.currIndex + (yDiff > 0 ? -1 : 1);
					that.gotoTarget(targetIndex);
					if (targetIndex == 0) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						heroLink.classList.add('pagination__link--active');
						heroLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 1) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						bestLink.classList.add('pagination__link--active');
						bestLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 2) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						sliderLink.classList.add('pagination__link--active');
						sliderLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 3) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						teamLink.classList.add('pagination__link--active');
						teamLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 4) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						selectionLink.classList.add('pagination__link--active');
						selectionLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 5) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						reviewsLink.classList.add('pagination__link--active');
						reviewsLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 6) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						orderLink.classList.add('pagination__link--active');
						orderLink.style.pointerEvents = 'none';
					};

					if (targetIndex == 7) {
						for (i = 0; i < (lengthLinks); i++) {
							let currLink = (anchorLinks[i]);
							currLink.classList.remove('pagination__link--active');
							currLink.style.pointerEvents = 'auto';
						};
						if (targetIndex == 7) {
							appeareFooter.style.display = 'block';
						}else {
							appeareFooter.style.display = 'none';
						};
						yamapLink.classList.add('pagination__link--active');
						yamapLink.style.pointerEvents = 'none';
					};

					position = appeareTouchFooter.style.transform;
					console.log(position);
					if (position == 'translateY(-700%)') {
						appeareFooter.style.display = 'block';
					}else {
						appeareFooter.style.display = 'none';
					};

				}, 16));

				heroLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 0;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					heroLink.classList.add('pagination__link--active');
					heroLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				bestLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 1;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					bestLink.classList.add('pagination__link--active');
					bestLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				sliderLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 2;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					sliderLink.classList.add('pagination__link--active');
					sliderLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				teamLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 3;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					teamLink.classList.add('pagination__link--active');
					teamLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				selectionLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 4;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					selectionLink.classList.add('pagination__link--active');
					selectionLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				reviewsLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 5;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					reviewsLink.classList.add('pagination__link--active');
					reviewsLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				orderLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 6;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					orderLink.classList.add('pagination__link--active');
					orderLink.style.pointerEvents = 'none';
					appeareFooter.style.display = 'none';
				});

				yamapLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 7;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					yamapLink.classList.add('pagination__link--active');
					yamapLink.style.pointerEvents = 'none';
					if (targetIndex == 7) {
						appeareFooter.style.display = 'block';
					}else {
						appeareFooter.style.display = 'none';
					};
				});

				///// MAIN MENU NAV/////
				bestMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 1;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					bestLink.classList.add('pagination__link--active');
					bestLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});
				sliderMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 2;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					sliderLink.classList.add('pagination__link--active');
					sliderLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});
				teamMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 3;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					teamLink.classList.add('pagination__link--active');
					teamLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});
				selectionMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 4;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					selectionLink.classList.add('pagination__link--active');
					selectionLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});
				reviewsMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 5;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					reviewsLink.classList.add('pagination__link--active');
					reviewsLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});
				contactsMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 7;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					yamapLink.classList.add('pagination__link--active');
					yamapLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
					if (targetIndex == 7) {
						appeareFooter.style.display = 'block';
					}else {
						appeareFooter.style.display = 'none';
					};
				});
				recieveMenuLink.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 6;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					orderLink.classList.add('pagination__link--active');
					orderLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});
				recieveMenuLink2.addEventListener("click", function (event) {
					event.preventDefault();
					targetIndex = 6;
					that.gotoTarget(targetIndex);
					for (i = 0; i < (lengthLinks); i++) {
						let currLink = (anchorLinks[i]);
						currLink.classList.remove('pagination__link--active');
						currLink.style.pointerEvents = 'auto';
					};
					orderLink.classList.add('pagination__link--active');
					orderLink.style.pointerEvents = 'none';
					openMenu.classList.remove('header__menu--active');
					trigger.classList.remove('hamburger-menu-link__bars--active')
				});


			},
			gotoTarget: function (targetIndex) {
				var children = this.$el.children();
				var that = this;
				var translateY;

				if (this.animating || targetIndex < 0 || targetIndex > this.$el.children().length - 1) return;

				translateY = 'translateY(-' + targetIndex * 100 + '%)';
				this.animating = true;
				$(children[0]).on('transitionend', function callback() {
					this.removeEventListener('transitionend', callback);
					that.animating = false;
				});
				children.css({
					'transform': translateY,
					'-webkit-transform': translateY
				});

				this.currIndex = targetIndex;
			}
		};

		return Fullpage;
	})();

	$.fn.fullpage = function (options) {
		this.each(function () {
			new Fullpage($(this), options);
		});
		return this;
	};

})(this, this.jQuery);
