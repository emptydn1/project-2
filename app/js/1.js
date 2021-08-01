// let Flickity = require("Flickity");

let time = setInterval(function () {
  autoSlide();
}, 4000);

let remove = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove(text);
  }
};

let slides = document.querySelectorAll(".hero__wrapper");
function autoSlide() {
  var position = 0;
  var thisActive = document.querySelector(".hero .hero__wrapper.active");
  for (
    position = 0;
    (thisActive = thisActive.previousElementSibling);
    position++
  ) {}
  console.log(position);

  if (position < slides.length - 1) {
    remove(slides, "active");
    slides[position].nextElementSibling.classList.add("active");
  } else {
    remove(slides, "active");
    slides[0].classList.add("active");
  }
}

//slide// init Flickity
var $carousel = $(".products .main-carousel").flickity({
  prevNextButtons: false,
  pageDots: false,
});
// Flickity instance
var flkty = $carousel.data("flickity");
// elements
var $cellButtonGroup = $(".button-group--cells");
var $cellButtons = $cellButtonGroup.find(".button");

// update selected cellButtons
$carousel.on("select.flickity", function () {
  $cellButtons.filter(".is-selected").removeClass("is-selected");
  $cellButtons.eq(flkty.selectedIndex).addClass("is-selected");
});

// select cell on button click
$cellButtonGroup.on("click", ".button", function () {
  var index = $(this).index();
  $carousel.flickity("select", index);
});
// previous
$(".button--previous").on("click", function () {
  $carousel.flickity("previous", true);
});
// next
$(".button--next").on("click", function () {
  $carousel.flickity("next", true);
});
