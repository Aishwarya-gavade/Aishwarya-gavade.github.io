const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuToggle?.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
