const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

// get a random image
const chosenImage = images[Math.floor(Math.random() * images.length)];

// create html img element from js
const bgImage = document.createElement("img");
// set image source
bgImage.src = `./img/${chosenImage}`;
bgImage.className = "bg-image";
// add the new element to the html
document.body.appendChild(bgImage);