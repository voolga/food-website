const gender = document.querySelector("#gender");
const resultCalor = document.querySelector(".calculating__result span");
let sex = "woman",
  height,
  weight,
  age,
  activity = 1.375;

function initLocalSettings(selector, activeClass) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.classList.remove(activeClass);
    if (el.getAttribute("data-ratio") === localStorage.getItem("activity")) {
      el.classList.add(activeClass);
    }
    if (el.getAttribute("id") === localStorage.getItem("sex")) {
      el.classList.add(activeClass);
    }
  });

}

initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );
  initLocalSettings("#gender div", "calculating__choose-item_active");

if (localStorage.getItem("activity")) {
  activity = localStorage.getItem("activity");
} else {
  activity = 1.375;
  localStorage.setItem("activity", activity);
}

if (localStorage.getItem("sex")) {
  sex = localStorage.getItem("sex");
} else {
  sex = "woman";
  localStorage.setItem("sex", sex);
}

function calcResultCalor() {
  let res = "00";
  if (!sex || !height || !weight || !age || !activity) {
    resultCalor.textContent = res;
    return;
  }

  if (sex === "man") {
    res = Math.round(
      (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * activity
    );
    resultCalor.textContent = `${res}`;
  } else if (sex === "woman") {
    res = Math.round(
      (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * activity
    );
    resultCalor.textContent = `${res}`;
  }
}

calcResultCalor();

function getStaticValues(parentSelector, activeClass) {
  const elements = document.querySelectorAll(`${parentSelector} div`);

  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-ratio")) {
        activity = +e.target.getAttribute("data-ratio");
        localStorage.setItem("activity", +e.target.getAttribute("data-ratio"));

        calcResultCalor();
      } else {
        sex = e.target.getAttribute("id");
        localStorage.setItem("sex", e.target.getAttribute("id"));

        calcResultCalor();
      }

      elements.forEach((el) => {
        el.classList.remove(activeClass);
      });

      e.target.classList.add(activeClass);
    });

    calcResultCalor();
  });
}

getStaticValues("#gender", "calculating__choose-item_active");
getStaticValues(".calculating__choose_big", "calculating__choose-item_active");

function getDynamicValues() {
  const inputs = document.querySelectorAll(".calculating__choose-item");

  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }
      switch (e.target.getAttribute("id")) {
        case "height":
          height = +input.value;
          console.log(height);
          calcResultCalor();
          break;
        case "weight":
          weight = +input.value;
          console.log(weight);

          calcResultCalor();
          break;
        case "age":
          age = +input.value;
          console.log(age);

          calcResultCalor();
          break;
      }
    });
  });
}

getDynamicValues();
