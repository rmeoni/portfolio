document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('project-video-overlay');
  const closeOverlay = document.getElementById('close-project-video-overlay');
  const video = document.getElementById('project-video-player');
  const source = document.getElementById('project-video-source');
  const track = document.getElementById('project-video-track');

  const closeVideoOverlay = () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    video.pause();
    video.currentTime = 0;
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.project-video-trigger');
    if (!trigger) return;
    e.preventDefault();

    source.src = trigger.dataset.videoSrc;
    if (trigger.dataset.videoVtt) {
      track.src = trigger.dataset.videoVtt;
      track.srclang = trigger.dataset.videoLang || 'en';
      track.label = trigger.dataset.videoLabel || 'Subtitles';
    }
    video.load();

    // Dynamically swapped tracks can be left in "disabled" mode by the
    // browser — force it on so captions actually render.
    if (video.textTracks[0]) {
      video.textTracks[0].mode = 'showing';
    }

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    video.play();
  });

  closeOverlay.addEventListener('click', closeVideoOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeVideoOverlay();
  });
});
