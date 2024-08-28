const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from("nav a", {
  x: -20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});
gsap.from("#page1 h1", {
  y: 200,
  opacity: 0,
  duration: 0.6,
});
gsap.from(".desc", {
  x: -200,
  opacity: 0,
  duration: 0.6,
});
gsap.from(".images", {
  x: 200,
  opacity: 0,
  duration: 0.6,
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.2,
});
Shery.makeMagnet("#nav_2 a,footer a", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageEffect(".images", {
  style: 4,
  gooey: true,
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;
  var links = document.querySelectorAll("#nav_2 a");
  links.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});
