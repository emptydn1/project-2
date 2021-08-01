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
