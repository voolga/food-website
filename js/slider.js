const slider = document.querySelector(".offer__slider");
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
const dots = [];

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

slider.style.position = "relative";

const indicators = document.createElement("ol");
indicators.classList.add("carousel-indicators");
slider.append(indicators);

for (let i = 0; i < slidesQty; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-dot-to", i + 1);
  dot.classList.add("dot");
  indicators.append(dot);
  dots.push(dot);

  if (slideIndex - 1 === i) {
    dot.style.opacity = 1;
  }
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

  dots.forEach((dot) => {
    dot.style.opacity = 0.5;
  });

  dots[slideIndex - 1].style.opacity = 1;
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

  dots.forEach((dot) => {
    dot.style.opacity = 0.5;
  });

  dots[slideIndex - 1].style.opacity = 1;
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const dotTo = e.target.getAttribute("data-dot-to");
    slideIndex = dotTo;
    offset = (dotTo - 1) * parseInt(width);
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slidesQty < 10) {
      currentSlide.textContent = `0${slideIndex}`;
    } else if (slidesQty > 10) {
      currentSlide.textContent = slideIndex;
    }

    dots.forEach((dot) => {
      dot.style.opacity = 0.5;
    });
  
    dots[slideIndex - 1].style.opacity = 1;
  });
});
