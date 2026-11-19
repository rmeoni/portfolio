/* Play / pause / skip for the story-world section (index.html #story-sec).
   Play auto-scrolls the page through the story at a steady reading pace; any
   scroll, touch, key press or nav click by the visitor pauses it. Skip glides to
   the section after the story without replaying the chapters (js/smooth-nav.js). */
(function () {
  var sec = document.getElementById('story-sec');
  if (!sec) return;
  var playBtn = sec.querySelector('.sw-play');
  var skipBtn = sec.querySelector('.sw-skip');
  var controls = sec.querySelector('.sw-controls');
  var SPEED = 240; // px per second, ~6s per chapter
  var playing = false, raf = 0, pos = 0, last = 0;

  var t = function (k, fallback) {
    var v = window.__i18nT ? window.__i18nT(k) : k;
    return v === k ? fallback : v;
  };

  function range() {
    var top = sec.getBoundingClientRect().top + scrollY;
    return { top: top, end: top + sec.offsetHeight - innerHeight };
  }

  function jump(y) { window.scrollTo({ top: y, left: 0, behavior: 'instant' }); }

  function render() {
    sec.classList.toggle('sw-playing', playing);
    playBtn.setAttribute('aria-label', playing ? t('story-pause', 'Pause story') : t('story-play', 'Play story'));
    skipBtn.setAttribute('aria-label', t('story-skip-aria', 'Skip the story'));
  }

  function step(now) {
    if (!playing) return;
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    var end = range().end;
    pos = Math.min(end, pos + SPEED * dt);
    jump(pos);
    if (pos >= end - 1) return pause();
    raf = requestAnimationFrame(step);
  }

  function play() {
    var r = range();
    pos = scrollY;
    // From the end (or past it), start over from the first chapter.
    if (pos >= r.end - 2) {
      pos = r.top;
      jump(pos);
      if (window.__swSnap) window.__swSnap();
    }
    playing = true;
    last = performance.now();
    raf = requestAnimationFrame(step);
    render();
  }

  function pause() {
    if (!playing) return;
    playing = false;
    cancelAnimationFrame(raf);
    render();
  }

  playBtn.addEventListener('click', function () { playing ? pause() : play(); });

  skipBtn.addEventListener('click', function () {
    pause();
    var next = document.getElementById('about-sec') || sec.nextElementSibling;
    if (!next) return;
    if (window.__smoothNavTo) window.__smoothNavTo(next);
    else jump(range().end + innerHeight);
  });

  // The visitor taking over (scroll, touch, keys, nav links) pauses playback.
  ['wheel', 'touchstart', 'keydown'].forEach(function (ev) {
    addEventListener(ev, function (e) {
      if (controls.contains(e.target)) return;
      pause();
    }, { passive: true });
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a[href*="#"]')) pause();
  }, true);

  document.addEventListener('i18n:change', render);
  render();
})();
