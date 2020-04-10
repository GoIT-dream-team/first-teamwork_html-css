$(document).ready(function () {
  // menu
  $('.bur-menu').click(function () {
    $('.bur-menu, .nav-menu').toggleClass('active');
    $('body').toggleClass('lock');
    $('.top-header').toggleClass('to-top');
  });

  $('.bur-menu').on('click', function () {
    $(this)
      .next('.nav-menu__list')
      .slideToggle('fast', function () {
        $(this)
          .prev()
          .html($(this).is(':visible') ? 'Скрыть' : 'Меню');
      });
  });
  $('.nav-menu__list a').click(function (e) {
    $('.bur-menu').click();
  });
  // $(".bur-menu").click();

  // scroll time
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();

      var sc = $(this).attr('href'),
        dn = $(sc).offset().top;

      $('html, body').animate({ scrollTop: dn }, 1000);
    });
  });
  //

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

  $(window).scroll(function () {
    // arrow
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
    // header
    if ($(window).scrollTop() > 450) {
      $('.top-header').addClass('scroll');
    } else {
      $('.top-header').removeClass('scroll');
    }
  });
});
