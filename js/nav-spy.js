/* Scroll spy for the main nav on index.html.
   Underlines the nav link of the section being read (.is-active, styled in
   custom.css) and marks it with aria-current="location".
   A section "owns" the page from the moment its top crosses a line 40% down
   the viewport until the next linked section crosses it, so the sections in
   between without a nav link of their own (about, experience, companies…)
   count toward the previous one: everything after the story is "About". */
(function () {
  var links = [].slice.call(document.querySelectorAll('.nav-menu .nav-link[href^="#"]'));
  var items = links.map(function (link) {
    return { link: link, sec: document.getElementById(link.getAttribute('href').slice(1)) };
  }).filter(function (it) { return it.sec; });
  if (!items.length) return;

  // Webflow marks the Home link as the current page; the spy takes over.
  links.forEach(function (link) { link.removeAttribute('aria-current'); });

  var current = null, queued = false;

  function update() {
    queued = false;
    var line = innerHeight * 0.4;
    // Order on the page, not in the nav, decides: the lowest section whose
    // top has passed the line wins. Above them all, Home.
    var active = items[0], best = -Infinity;
    items.forEach(function (it) {
      var top = it.sec.getBoundingClientRect().top;
      if (top <= line && top > best) { best = top; active = it; }
    });
    if (active === current) return;
    if (current) {
      current.link.classList.remove('is-active');
      current.link.removeAttribute('aria-current');
    }
    active.link.classList.add('is-active');
    active.link.setAttribute('aria-current', 'location');
    current = active;
  }

  function queue() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }

  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  addEventListener('load', queue);
  update();
})();
