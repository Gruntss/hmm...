"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 9; // 9 images
let play = true;
let noCount = 0;

const messages = [
  "Sure ka r'yan?",
  "Please po",
  "Wagggggggg 🙁",
  "Hirap mo mahalin",
  "Ayaw mo talaga",
  "Tumesting ka sakin",
  "Di naba mababago isip mo?",
  "Ang sakit",
  "Miss ganda, sige na",
];

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  // Create a response message dynamically
  const responseMessage = document.createElement("p");
  responseMessage.textContent = "❤️ Yay! I knew you would say yes! ❤️";
  responseMessage.style.color = "red";
  responseMessage.style.fontSize = "20px";
  responseMessage.style.textAlign = "center";

  document.body.appendChild(responseMessage);
}

function handleNoClick() {
  if (play) {
    noCount++;

    // Change the question text
    titleElement.innerHTML = messages[Math.min(noCount - 1, messages.length - 1)];

    // Change the image
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);

    // Resize the buttons
    resizeButtons();

    // At the last "No" click, turn both into "Yes"
    if (noCount === MAX_IMAGES) {
      play = false;
      noButton.innerHTML = "Yes";
      noButton.classList.add("btn--yes");
      noButton.removeEventListener("click", handleNoClick);
      noButton.addEventListener("click", handleYesClick);
    }
  }
}

function resizeButtons() {
  // Increase Yes button size
  const yesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${yesFontSize * 1.4}px`;

  // Decrease No button size
  const noFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${
