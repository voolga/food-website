const slides = document.querySelectorAll(".offer__slide");
const slideWrapper = document.querySelector(".offer__slider-wrapper");
const prevArr = document.querySelector(".offer__slider-prev");
const nextArr = document.querySelector(".offer__slider-next");
const currentSlide = document.querySelector("#current");
const totalAmount = document.querySelector("#total");
const slidesField = document.querySelector(".offer__slider-inner");
const width = window.getComputedStyle(slideWrapper).width;

let slideIndex = 1;
const slidesQty = slides.length;
let offset = 0;

// Animated version of slider

slidesField.style.width = slidesQty * 100 + "%";
slidesField.style.display = "flex";
slidesField.style.transition = "0.5s all";

if (slidesQty < 10) {
  totalAmount.textContent = `0${slidesQty}`;
  currentSlide.textContent = `0${slideIndex}`;
} else if (slidesQty > 10) {
  totalAmount.textContent = slidesQty;
  currentSlide.textContent = slideIndex;
}

slides.forEach((item) => {
  item.style.width = width;
});
slideWrapper.style.overflow = "hidden";

nextArr.addEventListener("click", () => {
  if (offset === (slidesQty - 1) * parseInt(width)) {
    offset = 0;
  } else {
    offset += parseInt(width);
  }
  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex === slidesQty) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }

  if (slidesQty < 10) {
    currentSlide.textContent = `0${slideIndex}`;
  } else if (slidesQty > 10) {
    currentSlide.textContent = slideIndex;
  }
});

prevArr.addEventListener("click", () => {
  if (offset === 0) {
    offset = (slidesQty - 1) * parseInt(width);
  } else {
    offset -= parseInt(width);
  }
  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == 1) {
    slideIndex = slidesQty;
  } else {
    slideIndex -= 1;
  }

  if (slidesQty < 10) {
    currentSlide.textContent = `0${slideIndex}`;
  } else if (slidesQty > 10) {
    currentSlide.textContent = slideIndex;
  }
});

// Simple version of slider
// showSlides(slideIndex);
// if (slidesQty < 10) {
//   totalAmount.textContent = `0${slidesQty}`;
// } else if (slidesQty > 10) {
//   totalAmount.textContent = `${slidesQty}`;
// }

// function showSlides(n) {
//   if (n > slidesQty) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slidesQty;
//   }

//   slides.forEach((item) => {
//     item.style.display = "none";
//   });

//   slides[slideIndex - 1].style.display = "block";

//   if (slidesQty < 10) {
//     currentSlide.textContent = `0${slideIndex}`;
//   } else if (slidesQty > 10) {
//     currentSlide.textContent = `${slideIndex}`;
//   }
// }

// prevArr.addEventListener("click", () => {
//   slideIndex += -1;
//   showSlides(slideIndex);
// });

// nextArr.addEventListener("click", () => {
//   slideIndex += 1;
//   showSlides(slideIndex);
// });
