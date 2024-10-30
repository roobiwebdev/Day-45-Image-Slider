// const carousel = document.querySelector(".carousel");
// let isDraging = false,
//   startX,
//   startScrollLeft;

// const dragStart = () => {
//   isDraging = true;
//   carousel.classList.add("dragging");
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDraging) return; //if it draging return from this

//   //   console.log(e.pageX); //it return horzontal cordinate of mouse pointer it is number

//   carousel.scrollLeft = e.pageX; //it returns number of pixels an elements content scrolled horizontally
// };

// const dragStop = () => {
//   isDraging = false;
//   carousel.classList.remove("dragging");
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// const carousel = document.querySelector(".carousel");

// let isDragging = false;
// let startX;
// let scrollLeft;

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   startX = e.pageX - carousel.offsetLeft;
//   scrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return;
//   e.preventDefault();
//   const x = e.pageX - carousel.offsetLeft;
//   const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
//   carousel.scrollLeft = scrollLeft - walk;
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// // Touch events for mobile devices
// carousel.addEventListener("touchstart", (e) => {
//   isDragging = true;
//   startX = e.touches[0].pageX - carousel.offsetLeft;
//   scrollLeft = carousel.scrollLeft;
// });

// carousel.addEventListener("touchend", () => {
//   isDragging = false;
// });

// carousel.addEventListener("touchmove", (e) => {
//   if (!isDragging) return;
//   const x = e.touches[0].pageX - carousel.offsetLeft;
//   const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
//   carousel.scrollLeft = scrollLeft - walk;
// });

// const carousel = document.querySelector(".carousel");
// const leftButton = document.querySelector("#left");
// const rightButton = document.querySelector("#right");

// let isDragging = false;
// let startX;
// let scrollLeft;

// const dragStart = (e) => {
//   isDragging = true;
//   startX = e.pageX - carousel.offsetLeft;
//   scrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return;
//   e.preventDefault();
//   const x = e.pageX - carousel.offsetLeft;
//   const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
//   carousel.scrollLeft = scrollLeft - walk;
// };

// const dragStop = () => {
//   isDragging = false;
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// // Touch events for mobile devices
// carousel.addEventListener("touchstart", (e) => {
//   isDragging = true;
//   startX = e.touches[0].pageX - carousel.offsetLeft;
//   scrollLeft = carousel.scrollLeft;
// });

// carousel.addEventListener("touchend", () => {
//   isDragging = false;
// });

// carousel.addEventListener("touchmove", (e) => {
//   if (!isDragging) return;
//   const x = e.touches[0].pageX - carousel.offsetLeft;
//   const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
//   carousel.scrollLeft = scrollLeft - walk;
// });

// // Button navigation
// // leftButton.addEventListener("click", () => {
// //   carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
// // });

// // rightButton.addEventListener("click", () => {
// //   carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
// // });

// leftButton.addEventListener("click", () => {
//   const slideWidth = slides[0].clientWidth;
//   carousel.scrollBy({ left: -slideWidth, behavior: "smooth" });
// });

// rightButton.addEventListener("click", () => {
//   const slideWidth = slides[0].clientWidth;
//   carousel.scrollBy({ left: slideWidth, behavior: "smooth" });
// });

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
