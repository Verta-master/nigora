//Mobile menu
$('.header__menu').click(function() {
  $('.mobile').addClass('mobile--opened');
});

$('.mobile__close').click(function() {
  $('.mobile').removeClass('mobile--opened');
});

//Cart scroll
$('.cart__wrap').niceScroll();

//Menu scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 200) {
    $(".menu").addClass('menu--scroll');
  } else {
    $(".menu").removeClass('menu--scroll');
  };
});
