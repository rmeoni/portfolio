/* Smooth in-page navigation for index.html.
   Replaces Webflow's anchor scroll (which fights the CSS `scroll-behavior: smooth`
   and stutters over the tall #story-sec) with one eased rAF animation that:
   - scales its duration with distance, so long jumps still feel continuous
   - re-measures the target every frame (sections can change height mid-scroll)
   - offsets for the fixed navbar (a section can opt out with data-nav-offset="0")
   - stops as soon as the visitor scrolls, touches or presses a key
   - jumps instantly when the visitor prefers reduced motion */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');
  var raf = 0, active = false;

  function navOffset(target) {
    var own = target.getAttribute('data-nav-offset');
    if (own !== null) return parseFloat(own) || 0;
    var nav = document.querySelector('.navbar');
    return nav && getComputedStyle(nav).position === 'fixed' ? nav.offsetHeight : 0;
  }

  function targetY(target) {
    var max = root.scrollHeight - innerHeight;
    var y = target.getBoundingClientRect().top + scrollY - navOffset(target);
    return Math.max(0, Math.min(max, y));
  }

  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function jump(y) { window.scrollTo({ top: y, left: 0, behavior: 'instant' }); }

  // The story section is ~10,000px of pinned scroll. A nav jump that would pass
  // through it collapses it to one screen for the trip (the 3D scene holds its
  // current frame), so it slides by like any other section instead of
  // fast-forwarding all 7 chapters. The real height comes back when we land.
  var skip = null; // { sec, top, extra } while collapsed

  function collapse(sec, frame) {
    var top = sec.getBoundingClientRect().top + scrollY;
    var extra = sec.offsetHeight - innerHeight; // the pinned range we hide
    if (extra <= 0) return;
    var y = scrollY;
    var mapped = y <= top + 2 ? y : y >= top + extra ? y - extra : top;
    skip = { sec: sec, top: top, extra: extra, inline: sec.style.height };
    if (window.__swFreeze) window.__swFreeze(true, frame);
    else sec.style.height = innerHeight + 'px';
    jump(mapped);
  }

  function expand() {
    if (!skip) return;
    var s = skip; skip = null;
    var y = scrollY;
    if (window.__swFreeze) window.__swFreeze(false);
    else s.sec.style.height = s.inline;
    jump(y > s.top + 2 ? y + s.extra : y);
  }

  function stop() {
    if (!active) return;
    active = false;
    cancelAnimationFrame(raf);
    expand();
    root.style.scrollBehavior = '';
    window.__navScrolling = false;
  }

  function scrollToEl(target) {
    stop();
    var from = scrollY;
    if (Math.abs(targetY(target) - from) < 2) return;
    if (reduce && reduce.matches) return jump(targetY(target));

    root.style.scrollBehavior = 'auto';
    var sec = document.getElementById('story-sec');
    if (sec && !sec.contains(target)) {
      var top = sec.getBoundingClientRect().top + scrollY;
      var end = top + sec.offsetHeight - innerHeight;
      var to0 = targetY(target);
      if (Math.max(from, to0) > top && Math.min(from, to0) < end) collapse(sec);
    } else if (sec && from > sec.getBoundingClientRect().top + scrollY + sec.offsetHeight - innerHeight) {
      // heading back up to the story from below: show its first frame on the
      // way in instead of rewinding through the chapters
      collapse(sec, 0);
    }
    from = scrollY;
    var dist = Math.abs(targetY(target) - from);

    // ~650ms for short hops, up to ~1.9s for the full length of the page
    var dur = Math.min(1900, 450 + 260 * Math.log(1 + dist / 120));
    var t0 = performance.now();
    window.__navScrolling = true;
    active = true;

    (function step(now) {
      var p = Math.min(1, (now - t0) / dur);
      var to = targetY(target);
      jump(from + (to - from) * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else stop();
    })(t0);
  }

  // Used by the story's Skip button (js/story-controls.js)
  window.__smoothNavTo = function (el) {
    if (window.__swPreload) window.__swPreload();
    scrollToEl(el);
  };

  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) {
    addEventListener(ev, function (e) {
      if (ev === 'mousedown' && e.target.closest && e.target.closest('a')) return;
      stop();
    }, { passive: true });
  });

  // Turn off Webflow's own anchor scroll (it runs on jQuery ready, before this).
  function unbindWebflow() { if (window.jQuery) jQuery(document).off('click.wf-scroll'); }
  if (window.jQuery) jQuery(unbindWebflow);
  addEventListener('load', unbindWebflow);

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a) return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
    var target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    if (location.hash !== url.hash && history.pushState) history.pushState(null, '', url.hash);
    // Make sure the story animation is loading before we fly through it.
    if (window.__swPreload) window.__swPreload();
    scrollToEl(target);
  });
})();
