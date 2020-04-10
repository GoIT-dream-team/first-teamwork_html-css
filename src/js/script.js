$(document).ready(function () {
  // top slider
  $('.top-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots: $('.top-slider-dots'),
  });

  // sleder 5 section
  $('.sec-5-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    appendDots: $('.slider-controls'),
    appendArrows: $('.slider-controls'),
  });

  // scrollup
  $('.scrollup').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    );
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});
