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

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({left: scrollAmount, behavior: "smooth" });
      })
  })
}
window.addEventListener("load", initSlider);