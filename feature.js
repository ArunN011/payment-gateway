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

  gsap.from(".hero-badge, .hero-title, .hero-text, .hero-actions, .hero-mini", {
    opacity: 0,
    y: 35,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out"
  });

  gsap.from(".floating-card, .dashboard-card", {
    opacity: 0,
    scale: 0.92,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.2
  });

  gsap.from(".feature-box", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 72%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out"
  });

  gsap.from(".method-box", {
    scrollTrigger: {
      trigger: ".payment-methods",
      start: "top 75%"
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.08,
    ease: "power3.out"
  });

  gsap.from(".why-item, .stats-card", {
    scrollTrigger: {
      trigger: ".why-stackly",
      start: "top 72%"
    },
    opacity: 0,
    y: 35,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });

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
