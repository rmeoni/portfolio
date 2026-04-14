document.addEventListener('DOMContentLoaded', function () {
  if (typeof projects === 'undefined') return;

  // Order comes directly from the projects object — no separate array to maintain
  const projectOrder = Object.keys(projects);
  const currentFile = window.location.pathname.split('/').pop();
  const currentKey = projectOrder.find(key => projects[key].link.includes(currentFile));
  const currentIndex = projectOrder.indexOf(currentKey);

  if (currentIndex === -1) return;

  // Wrap around: last project loops back to first, first loops back to last
  const prevIndex = (currentIndex - 1 + projectOrder.length) % projectOrder.length;
  const nextIndex = (currentIndex + 1) % projectOrder.length;

  const prevProject = projects[projectOrder[prevIndex]];
  const nextProject = projects[projectOrder[nextIndex]];

  const projectNav = document.getElementById('project-nav');
  if (!projectNav) return;

  projectNav.innerHTML = `
    <div class="section no-padding-top wf-section">
      <div class="wrapper">
        <div class="work-nav">
          <a id="work-nav-prev" href="${prevProject.link}" class="work-nav-link w-inline-block">
            <div class="work-nav-preview">
              <div class="work-nav-hover">
                <div class="w-icon-slider-left"></div>
              </div>
              <img src="${prevProject.image}" alt="${prevProject.title}" class="work-nav-image">
            </div>
            <div class="work-nav-info">
              <div class="work-nav-text">Previous</div>
              <h3 class="work-nav-name">${prevProject.title}</h3>
            </div>
          </a>
          <a id="work-nav-center" href="./index.html#portfolio-sec" class="work-nav-button w-inline-block">
            <div class="circle"><img src="images/portfolio-dots-white.svg" alt="" class="work-nav-icon"></div>
            <div class="circle-wave-1"></div>
            <div class="circle-wave-2"></div>
          </a>
          <a id="work-nav-next" href="${nextProject.link}" class="work-nav-link right w-inline-block">
            <div class="work-nav-info">
              <div class="work-nav-text">Next</div>
              <h3 class="work-nav-name">${nextProject.title}</h3>
            </div>
            <div class="work-nav-preview">
              <div class="work-nav-hover">
                <div class="w-icon-slider-right"></div>
              </div>
              <img src="${nextProject.image}" alt="${nextProject.title}" class="work-nav-image">
            </div>
          </a>
        </div>
      </div>
    </div>
  `;
});
