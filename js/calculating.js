const gender = document.querySelector("#gender");
const resultCalor = document.querySelector(".calculating__result span");
let sex = "woman",
  height,
  weight,
  age,
  activity = 1.375;

function calcResultCalor() {
    let res = '00';
  if (!sex || !height || !weight || !age || !activity) {
    resultCalor.textContent = res;
    return;
  }

  if (sex === "man") {
    res = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * activity);
    resultCalor.textContent = `${res}`;
  } else if (sex === "woman") {
    res = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * activity);
    resultCalor.textContent = `${res}`;
  }

  console.log(sex, height, weight, age, activity);
  console.log('res', res);
}

calcResultCalor();

function getStaticValues(parentSelector, activeClass) {
  const elements = document.querySelectorAll(`${parentSelector} div`);

  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-ratio")) {
        activity = +e.target.getAttribute("data-ratio");
        console.log(activity);
        calcResultCalor();
      } else {
        sex = e.target.getAttribute("id");
        console.log(sex);

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

