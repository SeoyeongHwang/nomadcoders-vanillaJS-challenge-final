// 랜덤 배경 이미지

const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
bgImg.className = `bgImg`;

document.body.appendChild(bgImg);