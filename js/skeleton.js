/*
 * Skeleton loading for images.
 * Loaded in <head> so it can tag images as the parser inserts them,
 * which makes the skeleton visible from the very first paint.
 * Also covers images rendered later (projects.js) and src swaps
 * (dark/light theme toggle).
 */
(function () {
  var SELECTOR = [
    '.hero-v1-photo',
    '.work-card-preview img',
    '.instagram-preview img',
    '.skill-big-icon',
    '.service-icon',
    '.company-logo-img',
    // Project detail pages (and any other content image in a page section)
    '.wf-section:not(.footer-section) img'
  ].join(',');

  function isLoaded(img) {
    return img.complete && img.naturalWidth > 0;
  }

  // Keep skeletons visible for at least this long after page start,
  // even when images are already cached.
  var MIN_VISIBLE_MS = 2000;

  // Per-image "keep the skeleton until" time. Defaults to MIN_VISIBLE_MS
  // after page start; a theme switch pushes it forward (see below).
  function finish(img) {
    var until = img.__skeletonUntil || MIN_VISIBLE_MS;
    var wait = until - performance.now();
    if (wait > 0) {
      setTimeout(function () {
        img.classList.remove('img-skeleton');
      }, wait);
    } else {
      img.classList.remove('img-skeleton');
    }
  }

  function track(img) {
    if (!img.__skeletonBound) {
      img.__skeletonBound = true;
      img.addEventListener('load', function () { finish(img); });
      img.addEventListener('error', function () { finish(img); });
    }
    img.classList.add('img-skeleton');
    if (isLoaded(img)) finish(img);
  }

  function scan(root) {
    if (!root || root.nodeType !== 1) return;
    if (root.matches && root.matches(SELECTOR)) track(root);
    if (root.querySelectorAll) {
      root.querySelectorAll(SELECTOR).forEach(track);
    }
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.type === 'childList') {
        m.addedNodes.forEach(scan);
      } else if (m.type === 'attributes' && m.target.matches(SELECTOR)) {
        // src changed (e.g. theme swap). Give cached images a moment
        // to resolve so the toggle doesn't flash a skeleton.
        var img = m.target;
        setTimeout(function () {
          if (!isLoaded(img)) track(img);
        }, 80);
      }
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src', 'srcset']
  });

  // Text skeleton: shown until the page's images have loaded
  // (window load) and the minimum time has passed.
  // Capped so a slow third-party resource can't keep it up forever.
  // Replayed for MIN_VISIBLE_MS on every theme switch.
  var MAX_TEXT_SKELETON_MS = 8000;
  var html = document.documentElement;
  var pageLoaded = document.readyState === 'complete';
  var textUntil = MIN_VISIBLE_MS;
  var textTimer = null;

  function checkText() {
    var now = performance.now();
    if (now >= textUntil && (pageLoaded || now >= MAX_TEXT_SKELETON_MS)) {
      html.classList.remove('skeleton-text-loading');
      textTimer = null;
    } else {
      textTimer = setTimeout(checkText, 100);
    }
  }

  function startTextSkeleton(fromPageStart) {
    textUntil = fromPageStart ? MIN_VISIBLE_MS : performance.now() + MIN_VISIBLE_MS;
    html.classList.remove('skeleton-text-loading');
    void html.offsetWidth; // restart the shimmer
    html.classList.add('skeleton-text-loading');
    if (textTimer) clearTimeout(textTimer);
    checkText();
  }

  if (!pageLoaded) {
    window.addEventListener('load', function () { pageLoaded = true; });
  }
  startTextSkeleton(true);

  // Nav skeleton: independent of the page images. Ends once the minimum
  // time has passed and every nav icon has finished loading (or failed),
  // with the same safety cap. Restarts whenever the theme changes.
  var navStart = 0;
  var navTimer = null;

  function navIconsReady() {
    var imgs = document.querySelectorAll('.navbar img');
    for (var i = 0; i < imgs.length; i++) {
      if (!imgs[i].complete) return false;
    }
    return true;
  }

  function checkNav() {
    var elapsed = performance.now() - navStart;
    var parsed = document.readyState !== 'loading';
    if ((elapsed >= MIN_VISIBLE_MS && parsed && navIconsReady()) ||
        elapsed >= MAX_TEXT_SKELETON_MS) {
      html.classList.remove('skeleton-nav-loading');
      navTimer = null;
    } else {
      navTimer = setTimeout(checkNav, 100);
    }
  }

  function startNavSkeleton(fromPageStart) {
    navStart = fromPageStart ? 0 : performance.now();
    // Re-adding the class after a forced reflow restarts the shimmer
    html.classList.remove('skeleton-nav-loading');
    void html.offsetWidth;
    html.classList.add('skeleton-nav-loading');
    if (navTimer) clearTimeout(navTimer);
    checkNav();
  }

  startNavSkeleton(true);

  // Images that swap src with the theme (project thumbnails, company
  // logos), plus the profile photo, replay their skeleton for at least MIN_VISIBLE_MS after the
  // switch, or until the new image has loaded, whichever is later.
  function startThemedImageSkeletons() {
    var until = performance.now() + MIN_VISIBLE_MS;
    // The profile photo doesn't change with the theme, but replays too.
    document.querySelectorAll('img[data-dark-src], .hero-v1-photo').forEach(function (img) {
      if (!img.matches(SELECTOR)) return;
      img.__skeletonUntil = until;
      track(img);
    });
  }

  // Replay the nav skeleton on light <-> dark switches. The theme script
  // also re-sets data-theme to the same value on DOMContentLoaded, so only
  // react to an actual change.
  new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.oldValue !== html.getAttribute('data-theme')) {
        startNavSkeleton(false);
        startTextSkeleton(false);
        startThemedImageSkeletons();
      }
    });
  }).observe(html, {
    attributes: true,
    attributeFilter: ['data-theme'],
    attributeOldValue: true
  });

  // Catch anything already in the DOM
  scan(document.documentElement);
})();
