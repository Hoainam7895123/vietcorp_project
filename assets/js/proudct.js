$("#next").click(function () {
  $(".swiper-wrapper").append($(".swiper-slide").first());
});

$("#prev").click(function () {
  $(".swiper-wrapper").prepend($(".swiper-slide").last());
});

$(".product-thumbnail").hover(
  function () {
    $(this).find(".action").stop().fadeIn(500); // Hiển thị phần tử khi hover
  },
  function () {
    $(this).find(".action").stop().fadeOut(500);
  }
);

$("#open-category span").click(function () {
  $(".content-below").slideToggle();
});