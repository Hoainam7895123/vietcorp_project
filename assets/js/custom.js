/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
/**
 * Sticky header on scroll
 */
const selectHeader = document.querySelector("#header");
if (selectHeader) {
  document.addEventListener("scroll", () => {
    window.scrollY > 100
      ? selectHeader.classList.add("sticked")
      : selectHeader.classList.remove("sticked");
  });
}

/**
 * Mobile nav toggle
 */

const mobileNavToogleButton = document.querySelector(".mobile-nav-toggle");

if (mobileNavToogleButton) {
  mobileNavToogleButton.addEventListener("click", function (event) {
    event.preventDefault();
    mobileNavToogle();
  });
}

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToogleButton.classList.toggle("bi-list");
  mobileNavToogleButton.classList.toggle("bi-x");
}

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navbar a").forEach((navbarlink) => {
  if (!navbarlink.hash) return;

  let section = document.querySelector(navbarlink.hash);
  if (!section) return;

  navbarlink.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

navDropdowns.forEach((el) => {
  el.addEventListener("click", function (event) {
    if (document.querySelector(".mobile-nav-active")) {
      event.preventDefault();
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("dropdown-active");

      let dropDownIndicator = this.querySelector(".dropdown-indicator");
    //   dropDownIndicator.classList.toggle("bi-chevron-up");
      dropDownIndicator.classList.toggle("bi-chevron-down");
    }
  });
});
/**
 * Open and close the search form.
 */
const searchOpen = document.querySelector(".js-search-open");
const searchClose = document.querySelector(".js-search-close");
const searchWrap = document.querySelector(".js-search-form-wrap");

searchOpen.addEventListener("click", (e) => {
  e.preventDefault();
  searchWrap.classList.add("active");
});

searchClose.addEventListener("click", (e) => {
  e.preventDefault();
  searchWrap.classList.remove("active");
});

/*--------------------------------------------------------------
# End Header
--------------------------------------------------------------*/


function rotate() {
    $('.rotating-bg').css({ transform: 'rotate(0deg)' }).animate({ borderSpacing: 360 }, {
        step: function(now, fx) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 20000,
        easing: 'linear',
        complete: rotate
    });
}

rotate();