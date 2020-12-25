var headerNav = document.querySelector('.header-nav');
var navToggle = document.querySelector('.header-nav__toggle');

headerNav.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function() {
  if (headerNav.classList.contains('header-nav--closed')) {
    headerNav.classList.remove('header-nav--closed');
    headerNav.classList.add('header-nav--expanded');
  } else {
    headerNav.classList.add('header-nav--closed');
    headerNav.classList.remove('header-nav--expanded');
  }
});

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 1) {
    headerNav.classList.add("header-nav--sticky")
  } else {
    headerNav.classList.remove("header-nav--sticky");
  }
});
