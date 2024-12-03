let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-images img");
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const newTransform = `translateX(-${currentIndex * 100}%)`;
  document.querySelector(".carousel-images").style.transform = newTransform;
}
