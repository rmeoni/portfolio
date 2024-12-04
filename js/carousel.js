let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-images img");
  const altText = document.getElementById("carousel-alt-text");

  // Update the index
  currentIndex += step;

  // Loop the index
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  // Update the carousel transform
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  document.querySelector(".carousel-images").style.transform = newTransform;

  // Update the alt text
  altText.textContent = slides[currentIndex].alt;
}

// Initialize with the alt text of the first image
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-images img");
  const altText = document.getElementById("carousel-alt-text");
  altText.textContent = slides[currentIndex].alt;
});
