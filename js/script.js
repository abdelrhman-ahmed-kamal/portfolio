/////////////////////////////////////////
//**            ELEMENTS              **/
////////////////////////////////////////

const toggleBtn = document.querySelector(".toggle-icon");
const mainNav = document.querySelector(".main-nav");
// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
// auto padding
const aboutSection = document.querySelector(".section-about");
const hero = document.querySelector(".hero");
// hero
const heroTextBox = document.querySelector(".hero-text-box");

//*-------------- Mobile NAV
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//*-----------------------------  sticky nav

const headerHeight = String(
  "-" + headerEl.getBoundingClientRect().height + "px"
);
const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.011,
    rootMargin: headerHeight,
  }
);
obs.observe(sectionHeroEl);

//------------------ smooth scroll

// we use the delegation strategy
document.querySelector(".header").addEventListener("click", function (e) {
  // e.target is where the event happen
  if (!e.target.classList.contains("active-link")) e.preventDefault();

  // Matching strategy
  const id = e.target.getAttribute("href");
  if (id === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  if (e.target.classList.contains("hash-link")) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  // Close mobile naviagtion
  if (e.target.classList.contains("main-nav-link"))
    headerEl.classList.toggle("nav-open");
});

//*----------------------- Menu fade animation

const handelHover = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;

    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");

    const logo = link.closest(".header").querySelector(".logo");

    siblings.forEach((el) => {
      // so we don't choose the hovered element
      if (el !== link) el.style.opacity = this; // opacity
    });
    logo.style.opacity = this; //opacity
  }
};

mainNav.addEventListener("mouseover", handelHover.bind(0.5));
mainNav.addEventListener("mouseout", handelHover.bind(1));

//*---------------------  relieve sections on scroll

const allSections = document.querySelectorAll(".section");

const revealSection = function (entires, observer) {
  const [entry] = entires;
  // the entry.target is the element that has been observed

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  // stop observing
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});
if (document.documentElement.clientWidth > 776) {
  allSections.forEach(function (section) {
    sectionObserver.observe(section);
  });
}

//*-------------------------- lazy load images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImage = function (entires, observer) {
  const [entry] = entires;

  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function (e) {
    entry.target.classList.remove("lazy-img");
  });

  // stop observer
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imageObserver.observe(img));

//----------- page year
const pageYearEl = document.querySelector(".page-year");

const now = new Date();

pageYearEl.textContent = now.getFullYear();

// sectionObserver.observe(projectsSection);

//----------------------- hero section
const spinnerContainer = document.querySelector(".spinner-container");
window.addEventListener("load", function () {
  spinnerContainer.classList.add("hidden");
  hero.classList.remove("out");
  headerEl.classList.remove("not-visible");
});
