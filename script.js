gsap.registerPlugin(ScrollTrigger);


gsap.from(".hero-badge", {
  opacity: 0,
  y: 18,
  duration: 0.8,
  delay: 0.1,
  ease: "power3.out"
});

gsap.from(".hero-title", {
  opacity: 0,
  y: 45,
  duration: 1,
  delay: 0.15,
  ease: "power3.out"
});

gsap.from(".hero-text", {
  opacity: 0,
  y: 28,
  duration: 0.9,
  delay: 0.25,
  ease: "power3.out"
});

gsap.from(".hero-buttons", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.35,
  ease: "power3.out"
});

gsap.from(".hero-feature", {
  opacity: 0,
  y: 24,
  duration: 0.7,
  stagger: 0.12,
  delay: 0.45,
  ease: "power3.out"
});

gsap.from(".hero-img", {
  opacity: 0,
  scale: 0.85,
  duration: 1.2,
  delay: 0.2,
  ease: "power3.out"
});

const cursor = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  if (!cursor || window.innerWidth < 992) return;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const heroImg = document.querySelector(".hero-img");
window.addEventListener("mousemove", (e) => {
  if (!heroImg || window.innerWidth < 992) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 16;
  const y = (e.clientY / window.innerHeight - 0.5) * 16;
  heroImg.style.transform = `translate(${x}px, ${y}px)`;
});
window.addEventListener("mouseleave", () => {
  if (!heroImg) return;
  heroImg.style.transform = "translate(0px, 0px)";
});


gsap.utils.toArray(".reveal-card").forEach((card, i) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.85,
    delay: i * 0.12,
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    }
  });
});


const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");
  counter.innerText = "0";

  let started = false;

  const animateCounter = () => {
    if (started) return;
    started = true;

    let count = 0;
    const step = Math.max(1, Math.ceil(target / 200));

    const update = () => {
      count += step;
      if (count < target) {
        counter.innerText = count.toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    update();
  };

  ScrollTrigger.create({
    trigger: counter,
    start: "top 85%",
    onEnter: animateCounter,
    once: true
  });
});


document.querySelectorAll(".glass-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0)";
  });

  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.9,
    scrollTrigger: {
      trigger: card,
      start: "top 88%"
    }
  });
});

gsap.utils.toArray(".step-card").forEach((card, i) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: i * 0.12,
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    }
  });
});


gsap.utils.toArray(".blog-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 55,
    duration: 0.85,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    }
  });
});

gsap.from(".payment-title", {
  opacity: 0,
  x: 40,
  duration: 1,
  scrollTrigger: {
    trigger: ".payment-app",
    start: "top 80%"
  }
});

gsap.from(".payment-text, .features-list, .download-btn", {
  opacity: 0,
  y: 28,
  duration: 0.8,
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".payment-app",
    start: "top 80%"
  }
});

gsap.from(".phone-img2", {
  opacity: 0,
  scale: 0.85,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".payment-app",
    start: "top 80%"
  }
});


window.addEventListener("scroll", () => {
  const nav = document.querySelector(".glass-nav");
  if (!nav) return;
  nav.classList.toggle("nav-scrolled", window.scrollY > 50);
});
