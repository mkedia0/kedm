function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Scroll reveal system
const blocks = document.querySelectorAll(".block");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

blocks.forEach(block => observer.observe(block));