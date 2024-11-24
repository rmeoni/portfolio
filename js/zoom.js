document.addEventListener('DOMContentLoaded', () => {
  // Ensure overlay is hidden initially
  const overlay = document.getElementById('overlay');
  const zoomedImage = document.getElementById('zoomed-image');
  const closeOverlay = document.getElementById('close-overlay');
  
  // Check if the hidden class is applied and force it if necessary
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
  
  // Select all images with the 'zoomable-image' class
  const zoomableImages = document.querySelectorAll('.zoomable-image');

  // Add event listeners to all zoomable images
  zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
      zoomedImage.src = image.src;  // Set the source of the zoomed image
      overlay.classList.remove('hidden'); // Show the overlay
      document.body.style.overflow = 'hidden'; // Disable scrolling on body
    });
  });

  // Close the overlay when the 'close-overlay' button is clicked
  closeOverlay.addEventListener('click', () => {
    overlay.classList.add('hidden'); // Hide the overlay
    document.body.style.overflow = ''; // Re-enable scrolling on body
  });

  // Close the overlay if the user clicks outside the image
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('hidden'); // Hide the overlay
      document.body.style.overflow = ''; // Re-enable scrolling on body
    }
  });
});
