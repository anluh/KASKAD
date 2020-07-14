import $ from "jquery";

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > 20) {
    $('body').addClass('collapsed');
    $('.main-header__title, .main-header__sub-title, .main-header__menu').slideUp(200);
  } else {
    $('body').removeClass('collapsed');
    $('.main-header__title, .main-header__sub-title, .main-header__menu').slideDown(200);
  }
});
