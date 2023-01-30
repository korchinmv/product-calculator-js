"use strict";

import { antennas } from "./equipment.js";
import { router } from "./equipment.js";
import { bracket } from "./equipment.js";
import { modem } from "./equipment.js";
import { pigtails } from "./equipment.js";
import { sim } from "./equipment.js";

const form = document.querySelector(".calculator");
const antennasPower = form.querySelector("#antenna-power");
const selectValueNum = Number(antennasPower.value);
const optionsInSelectAntennas = antennasPower.querySelectorAll(
  ".product__option-antenna"
);

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

//Добавляем товар в калькулятор
const addEquipmentInCalc = (equipment) => {
  const productName = document.querySelector(".product__name");
  const productDescription = document.querySelector(".product__description");
  const productPrice = document.querySelector(".product__price");
  const productImage = document.querySelector(".product__img");
  const productLink = document.querySelector(".product__link");

  productName.textContent = equipment.name;
  productDescription.textContent = equipment.description;
  productPrice.textContent = equipment.price;
  productImage.src = equipment.image;
  productImage.alt = `Фотография ${equipment.name}`;
  productLink.link = equipment.link;
};

//Находим option с атрибутом selected и добавляем соответствующий товар по id в калькулятор
const findSelectedOption = (options) => {
  const optionsArray = Array.from(options);
  const selected = Array.from(optionsArray).find((option) => {
    console.log(option);
    return option.hasAttribute("selected") === true;
  });

  console.log(selected);
};
findSelectedOption(optionsInSelectAntennas);

//Меняем содержимое при изменении selecta
antennasPower.addEventListener("change", () => {
  const findedEquipment = antennas.find((equipment) => {
    return equipment.id === selectValueNum;
  });

  addEquipmentInCalc(findedEquipment);
});
