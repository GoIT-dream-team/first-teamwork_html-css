$(document).ready(function() {
  $(".sliderm").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots:$(".wr-dot"),
  });
});
