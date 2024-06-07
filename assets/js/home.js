let slideIndex = 0;

const arrImages = [
  "/assets/img/silde/slider1.webp",
  "/assets/img/silde/slider2.webp",
];
let isMouseDown = false;
let initialX = 0;
let initialY = 0;
let initialPositionArrImg = 0;
let sliderImages = $(".slider-cont .slide img");
let slideTopElement = $(".slider-cont .slide-top");
let slideElement = $(".slider-cont .slide-bg-fixed");
let slideScaleElement = $(".slider-cont .slide.active");
sliderImages.attr("src", arrImages[initialPositionArrImg]);

const runStartSlide = () => {
  slideTopElement.removeClass("slide-top");
  slideElement.removeClass("slide-bg-fixed");
  slideScaleElement.removeClass("active");
  setTimeout(function () {
    slideTopElement.addClass("slide-top");
    slideElement.addClass("slide-bg-fixed");
    slideScaleElement.addClass("active");
  }, 100);
  if (arrImages.length - 1 === initialPositionArrImg) {
    initialPositionArrImg = 0;
    sliderImages.attr("src", arrImages[0]);
  } else {
    initialPositionArrImg++;
    sliderImages.attr("src", arrImages[initialPositionArrImg]);
  }
  cleanupEvents();
};

function onMouseMove(event) {
  if (!isMouseDown) return;
  const currentX = event.clientX;
  const currentY = event.clientY;
  if (currentX !== initialX || currentY !== initialY) {
    runStartSlide();
  }
}
function onMouseUp() {
  isMouseDown = false;
  cleanupEvents();
}
function startInterval() {
  intervalId = setInterval(runStartSlide, 6000);
}

startInterval();
function resetInterval() {
  clearInterval(intervalId);
  startInterval(); // Start interval again after clearing
}
function cleanupEvents() {
  $("#action-slide").off("mousemove", onMouseMove);
  $("#action-slide").off("mouseup", onMouseUp);
}
$("#action-slide").on("mousedown", function (event) {
  resetInterval();
  isMouseDown = true;
  initialX = event.clientX;
  initialY = event.clientY;
  $("#action-slide").on("mousemove", onMouseMove);
  $("#action-slide").on("mouseup", onMouseUp);
});

$(".product-thumbnail").hover(
  function () {
    $(this).find(".action").stop().fadeIn(500); // Hiển thị phần tử khi hover
  },
  function () {
    $(this).find(".action").stop().fadeOut(500);
  }
);

/*--------------------------------------------------------------
# Start Flash Sale
--------------------------------------------------------------*/
const wrapper = document.querySelector(".fs-swiper-container");
const carousel = document.querySelector(".fs-swiper-wrapper");
const arrowBtns = document.querySelectorAll(".button-control div");
const firstCardWidth = carousel.querySelector(".fs-swiper-item").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// INsert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// INsert copies of the first frw cards to end of carousel for infi...
carouselChildrens
  .slice(0, cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id === "section-flashsale-prev" ? -firstCardWidth : firstCardWidth;
  });
});

wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));

/*--------------------------------------------------------------
# Clients Section
--------------------------------------------------------------*/
// new Swiper(".clients-slider", {
//   speed: 400,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   slidesPerView: "auto",
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 60,
//     },
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 80,
//     },
//     992: {
//       slidesPerView: 6,
//       spaceBetween: 120,
//     },
//   },
// });

new Swiper(".clients-slider", {
  speed: 400,
  loop: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120,
    },
  },
});


/*--------------------------------------------------------------
# End Clients Section
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Sản phẩm nổi bật
--------------------------------------------------------------*/

$(".op-item-product").hover(
  function () {
    $(this).find(".op-action").stop(true, true).fadeIn(500);
  },
  function () {
    $(this).find(".op-action").stop(true, true).fadeOut(500);
  }
);

document.querySelector(".nav-link.active").click();

function showTab(evt, tabName) {
  evt.preventDefault();
  var i, tabcontent, navlinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Deactivate all navigation links
  navlinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].classList.remove("active");
  }

  // Show the clicked tab content and activate the corresponding link
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

/*--------------------------------------------------------------
# End sản phẩm nổi bật
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# Start qùa tặng doanh nghiệp
--------------------------------------------------------------*/

$(".corporate-gift-item").hover(
  function () {
    $(this).find(".action").stop(true, true).fadeIn(500);
  },
  function () {
    $(this).find(".action").stop(true, true).fadeOut(500);
  }
);

/*--------------------------------------------------------------
# Start contact
--------------------------------------------------------------*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});