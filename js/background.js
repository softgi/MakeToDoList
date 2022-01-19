const images = ["1.jfif", "2.jfif", "3.jfif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;
bgImage.style.position = "left top";
bgImage.className = "backImage";

document.body.appendChild(bgImage);


