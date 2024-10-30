const carousel = document.querySelector(".carousel");
const profileCards = document.querySelectorAll(".card");
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");

let isDragging = false;
let startX;
let scrollLeft;

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
  carousel.scrollLeft = scrollLeft - walk;
};

const dragStop = () => {
  isDragging = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Touch events for mobile devices
carousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchend", () => {
  isDragging = false;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
  carousel.scrollLeft = scrollLeft - walk;
});

// Button navigation
leftButton.addEventListener("click", () => {
  const cardWidth = profileCards[0].clientWidth + 16; // Include margin-right
  carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  const cardWidth = profileCards[0].clientWidth + 16; // Include margin-right
  carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
});
