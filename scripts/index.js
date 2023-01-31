"use strict";

import { antennas } from "./equipment.js";
import { routers } from "./equipment.js";
import { brackets } from "./equipment.js";
import { modems } from "./equipment.js";
import { pigtails } from "./equipment.js";
import { simCards } from "./equipment.js";

const form = document.querySelector(".calculator");
const antennasPower = form.querySelector("#antenna-power");
const routersPower = form.querySelector("#router-power");
const bracketsPower = form.querySelector("#bracket-power");
const simsPower = form.querySelector("#sim-power");
const antenna = form.querySelector(".antenna");
const router = form.querySelector(".router");
const bracket = form.querySelector(".bracket");
const modem = form.querySelector(".modem");
const pigtail = form.querySelector(".pigtail");
const sim = form.querySelector(".sim");

//Динамически добавляем option в select из массива данных
const addNewOption = (array, select) => {
  array.forEach((item, index) => {
    const option = document.createElement("option");
    option.classList.add("product__option-antenna");
    option.textContent = item.power;
    option.value = `${index + 1}`;
    select.append(option);
  });

  const arrayOptions = Array.from(select.children);
  arrayOptions[0].setAttribute("selected", "");
};
addNewOption(antennas, antennasPower);
addNewOption(routers, routersPower);
addNewOption(brackets, bracketsPower);
addNewOption(simCards, simsPower);

//Добавляем товар в калькулятор
const addEquipmentInCalc = (equipment, key) => {
  const productName = key.querySelector(".product__name");
  const productDescription = key.querySelector(".product__description");
  const productPrice = key.querySelector(".product__price");
  const productImage = key.querySelector(".product__img");
  const productLink = key.querySelector(".product__link");

  productName.textContent = equipment.name;
  productDescription.textContent = equipment.description;
  productPrice.textContent = equipment.price;
  productImage.src = equipment.image;
  productImage.alt = `Фотография ${equipment.name}`;
  productLink.href = equipment.link;
};

//Добавляем товар при загрузке страницы
addEquipmentInCalc(antennas[0], antenna);
addEquipmentInCalc(routers[0], router);
addEquipmentInCalc(brackets[0], bracket);
addEquipmentInCalc(modems[0], modem);
addEquipmentInCalc(pigtails[0], pigtail);
addEquipmentInCalc(simCards[0], sim);

//Итоговая сумма калькулятора
//цены и результат
let antennaPrice = Number(form.querySelector(".antenna__price").innerText);
let routerPrice = Number(form.querySelector(".router__price").innerText);
let bracketPrice = Number(form.querySelector(".bracket__price").innerText);
let simPrice = Number(form.querySelector(".sim__price").innerText);
let calcResult = form.querySelector(".calculator__num");

//Присваеваем товару маркер checked при выбранном товаре в селекте
const addedChekedProduct = (selectValueNum, findedEquipment) => {
  if (selectValueNum !== findedEquipment.id) {
    findedEquipment.checked = false;
  } else {
    findedEquipment.checked = true;
  }
};
//Меняем содержимое при изменении selecta
//для антенны
antennasPower.addEventListener("change", () => {
  let selectValueNum = Number(antennasPower.value);
  const findedEquipment = antennas.find((equipment) => {
    return equipment.id === selectValueNum;
  });

  addEquipmentInCalc(findedEquipment, antenna);
  addedChekedProduct(selectValueNum, findedEquipment);
});

//для роутера
routersPower.addEventListener("change", () => {
  let selectValueNum = Number(routersPower.value);

  const findedEquipment = routers.find((equipment) => {
    return equipment.id === selectValueNum;
  });

  addEquipmentInCalc(findedEquipment, router);
  addedChekedProduct(selectValueNum, findedEquipment);
});

//для кронштейна
bracketsPower.addEventListener("change", () => {
  let selectValueNum = Number(bracketsPower.value);

  const findedEquipment = brackets.find((equipment) => {
    return equipment.id === selectValueNum;
  });

  addEquipmentInCalc(findedEquipment, bracket);
  addedChekedProduct(selectValueNum, findedEquipment);
});

//для сим-карты
simsPower.addEventListener("change", () => {
  let selectValueNum = Number(simsPower.value);

  const findedEquipment = simCards.find((equipment) => {
    return equipment.id === selectValueNum;
  });

  addEquipmentInCalc(findedEquipment, sim);
  addedChekedProduct(selectValueNum, findedEquipment);
});

const findCheckedProduct = (antennas, routers, brackets, simCards) => {
  const productsArray = antennas.concat(routers, brackets, simCards);
  console.log(productsArray);
  const filtredCheckedProducts = productsArray.filter(
    (product) => product.checked === true
  );

  console.log(filtredCheckedProducts);
};

findCheckedProduct(antennas, routers, brackets, simCards);
