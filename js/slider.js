const slides = document.querySelectorAll(".offer__slide");
const slideWrapper = document.querySelector(".offer__slider-wrapper");
const prevArr = document.querySelector(".offer__slider-prev");
const nextArr = document.querySelector(".offer__slider-next");
const currentSlide = document.querySelector("#current");
const totalAmount = document.querySelector("#total");

let slideIndex = 1;
const slidesQty = slides.length;

showSlides(slideIndex);
if (slidesQty < 10) {
  totalAmount.textContent = `0${slidesQty}`;
} else if (slidesQty > 10) {
  totalAmount.textContent = `${slidesQty}`;
}

function showSlides(n) {
  if (n > slidesQty) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slidesQty;
  }

  slides.forEach((item) => {
    item.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";

  if (slidesQty < 10) {
    currentSlide.textContent = `0${slideIndex}`;
  } else if (slidesQty > 10) {
    currentSlide.textContent = `${slideIndex}`;
  }
}

prevArr.addEventListener("click", () => {
  slideIndex += -1;
  showSlides(slideIndex);
});

nextArr.addEventListener("click", () => {
  slideIndex += 1;
  showSlides(slideIndex);
});
