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
const navDots = document.querySelectorAll(".nav-index-element");

let currentCarouselPosition = 0;
let autoScroll;
const autoScrollTime = 10000;
setTimeout(CalculateCarouselPosition, autoScrollTime);

navLeft.addEventListener("click", () => {
  clearTimeout(autoScroll);
  CalculateCarouselPosition(true);
});
navRight.addEventListener("click", () => {
  clearTimeout(autoScroll);
  CalculateCarouselPosition();
});

navDots.forEach((navDot) =>
  navDot.addEventListener("click", () => {
    currentCarouselPosition = navDot.id * (carousel.offsetWidth / 5);
    carousel.style.right = `${currentCarouselPosition}px`;
    clearTimeout(autoScroll);
    UpdateNavIndex();
    setTimeout(CalculateCarouselPosition, autoScrollTime);
  })
);

function CalculateCarouselPosition(toLeft) {
  const carouselOffset = carousel.offsetWidth / 5;
  const maxCarouselPosition = carousel.offsetWidth - carouselOffset;

  currentCarouselPosition += toLeft ? -carouselOffset : carouselOffset;

  if (!toLeft && currentCarouselPosition > maxCarouselPosition)
    currentCarouselPosition = 0;
  if (toLeft && currentCarouselPosition < 0)
    currentCarouselPosition = maxCarouselPosition;

  carousel.style.right = `${currentCarouselPosition}px`;
  UpdateNavIndex();

  autoScroll = setTimeout(CalculateCarouselPosition, autoScrollTime);
}

function UpdateNavIndex() {
  const currentIndex = currentCarouselPosition / (carousel.offsetWidth / 5);
  navDots.forEach((dot) => {
    if (dot.id == currentIndex) dot.classList.add("active");
    else dot.className = "nav-index-element";
  });
}
