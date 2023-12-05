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
