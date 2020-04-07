$(document).ready(function() {
  $(".top-slider").slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots:$(".top-slider-dots"),
  });

  $(".sec-5-slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    appendDots:$(".slider-controls"),
    appendArrows:$(".slider-controls"),
  });
});