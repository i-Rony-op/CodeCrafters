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
gsap.from(".desc", {
  x: -100,
  opacity: 0,
  duration: 0.4,
});
gsap.from(".img-div", {
  x: 100,
  opacity: 0,
  duration: 0.4,
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
