document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor-glow");
  const nav = document.querySelector(".glass-nav");

  if (cursor) {
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out"
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (nav) {
      nav.classList.toggle("nav-scrolled", window.scrollY > 30);
    }
  });

  gsap.registerPlugin(ScrollTrigger);


 



  

  gsap.from(".footer-logo, .footer h5, .footer-links, .copyright", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%"
    },
    opacity: 0,
    y: 25,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out"
  });
});

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
const bubbles = document.querySelectorAll(".chat-message");
  bubbles.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.12}s`;
  });
