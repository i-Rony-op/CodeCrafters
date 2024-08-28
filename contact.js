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

gsap.from(".heading h4 , .heading h1", {
  y: 300,
  opacity: 0,
  duration: 0.8,
});
gsap.from(".socials", {
  y: 300,
  opacity: 0,
  duration: 0.5,
});
gsap.from(".socials .line1,.socials .line2", {
  opacity: 0,
  duration: 1,
});

gsap.from("#page1 form", {
  x: -300,
  opacity: 0,
  duration: 0.5,
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
