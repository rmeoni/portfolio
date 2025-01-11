document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('video-overlay');
    const closeOverlay = document.getElementById('close-video-overlay');
    const triggerButton = document.querySelector('.video-trigger');
    const videoElement = overlay.querySelector('video'); // Select the video element inside the overlay
  
    // Show the overlay when the button is clicked
    triggerButton.addEventListener('click', () => {
      overlay.classList.remove('hidden'); // Show the overlay
      document.body.style.overflow = 'hidden'; // Disable scrolling on body
    });
  
    // Close the overlay when the 'close-overlay' button is clicked
    closeOverlay.addEventListener('click', () => {
      overlay.classList.add('hidden'); // Hide the overlay
      document.body.style.overflow = ''; // Re-enable scrolling on body
      if (videoElement) {
        videoElement.pause(); // Pause the video
        videoElement.currentTime = 0; // Reset the video to the start
      }
    });
  
    // Close the overlay if the user clicks outside the video
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.add('hidden'); // Hide the overlay
        document.body.style.overflow = ''; // Re-enable scrolling on body
        if (videoElement) {
          videoElement.pause(); // Pause the video
          videoElement.currentTime = 0; // Reset the video to the start
        }
      }
    });
  });
  