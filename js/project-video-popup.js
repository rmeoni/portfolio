document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('project-video-overlay');
  const closeOverlay = document.getElementById('close-project-video-overlay');
  const iframe = document.getElementById('project-video-iframe');

  const closeVideoOverlay = () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    iframe.src = ''; // stops playback
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.project-video-trigger');
    if (!trigger) return;
    e.preventDefault();

    iframe.src = trigger.dataset.videoEmbed;
    iframe.title = trigger.dataset.videoTitle || '';

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeOverlay.addEventListener('click', closeVideoOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeVideoOverlay();
  });
});
