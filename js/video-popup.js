document.addEventListener('DOMContentLoaded', () => {
    // Ensure overlay is hidden initially
    const overlay = document.getElementById('video-overlay');
    const videoContainer = document.getElementById('video-container');
    const closeOverlay = document.getElementById('close-video-overlay');
  
    // Check if the hidden class is applied and force it if necessary
    if (!overlay.classList.contains('hidden')) {
      overlay.classList.add('hidden');
    }
  
    // Select all elements with the 'video-trigger' class
    const videoTriggers = document.querySelectorAll('.video-trigger');
  
    // Add event listeners to all video trigger elements
    videoTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const videoUrl = trigger.dataset.videoUrl; // Get video URL from data attribute
        if (videoUrl) {
          videoContainer.innerHTML = `
            <video controls autoplay id="popup-video">
              <source src="${videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>`;
          overlay.classList.remove('hidden'); // Show the overlay
          document.body.style.overflow = 'hidden'; // Disable scrolling on body
        }
      });
    });
  
    // Close the overlay when the 'close-overlay' button is clicked
    closeOverlay.addEventListener('click', () => {
      overlay.classList.add('hidden'); // Hide the overlay
      document.body.style.overflow = ''; // Re-enable scrolling on body
      videoContainer.innerHTML = ''; // Clear the video content
    });
  
    // Close the overlay if the user clicks outside the video
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.add('hidden'); // Hide the overlay
        document.body.style.overflow = ''; // Re-enable scrolling on body
        videoContainer.innerHTML = ''; // Clear the video content
      }
    });
  });
  