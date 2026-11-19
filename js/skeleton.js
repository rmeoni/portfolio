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
    '.company-logo-img'
  ].join(',');

  function isLoaded(img) {
    return img.complete && img.naturalWidth > 0;
  }

  // Keep skeletons visible for at least this long after page start,
  // even when images are already cached.
  var MIN_VISIBLE_MS = 3000;

  function finish(img) {
    var wait = MIN_VISIBLE_MS - performance.now();
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
  var MAX_TEXT_SKELETON_MS = 8000;
  var html = document.documentElement;
  html.classList.add('skeleton-text-loading');

  function endTextSkeleton() {
    var wait = MIN_VISIBLE_MS - performance.now();
    setTimeout(function () {
      html.classList.remove('skeleton-text-loading');
    }, Math.max(0, wait));
  }

  if (document.readyState === 'complete') {
    endTextSkeleton();
  } else {
    window.addEventListener('load', endTextSkeleton);
  }
  setTimeout(function () {
    html.classList.remove('skeleton-text-loading');
  }, MAX_TEXT_SKELETON_MS);

  // Catch anything already in the DOM
  scan(document.documentElement);
})();
