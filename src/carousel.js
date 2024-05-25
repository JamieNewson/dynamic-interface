import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
const images = [image1, image2, image3, image4, image5];

const carouselElements = document.querySelectorAll(".carousel-list-element");

for (let i = 0; i < carouselElements.length; i++) {
  const image = new Image();
  image.src = images[i];
  carouselElements[i].appendChild(image);
}

const carousel = document.querySelector(".carousel-list");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

let currentCarouselPosition = 0;

navLeft.addEventListener("click", () => {
  calculateCarouselPosition();
  carousel.style.right = `${currentCarouselPosition}px`;
});
navRight.addEventListener("click", () => {
  calculateCarouselPosition(true);
  carousel.style.right = `${currentCarouselPosition}px`;
});

function calculateCarouselPosition(toRight) {
  const carouselOffset = carousel.offsetWidth / 5;
  const maxCarouselPosition = carousel.offsetWidth - carouselOffset;

  currentCarouselPosition += toRight ? carouselOffset : -carouselOffset;

  if (toRight && currentCarouselPosition > maxCarouselPosition)
    currentCarouselPosition = 0;
  if (!toRight && currentCarouselPosition < 0)
    currentCarouselPosition = maxCarouselPosition;
}
