document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Mobile navigation
  // =========================

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", open);
    });
  }


  // =========================
  // Footer year
  // =========================

  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });


  // =========================
  // Demo links
  // =========================

  document.querySelectorAll("[data-demo-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Replace this # link with your real URL in the HTML.");
      }
    });
  });


  // =========================
  // Newsletter form
  // =========================

  document.querySelectorAll("#connect-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const msg = form.querySelector(".form-message");

      if (msg) {
        msg.textContent =
          "Thank you! Connect this form to your email service when you're ready.";
      }

      form.reset();
    });
  });


  // =========================
  // Back to top
  // =========================

  const back = document.querySelector(".back-top");

  window.addEventListener("scroll", () => {
    back?.classList.toggle("show", window.scrollY > 500);
  });

  back?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  // =========================
  // BOOK CAROUSELS
  // =========================

  document.querySelectorAll(".book-carousel").forEach(carousel => {

    const track = carousel.querySelector(".book-track");

    const prev = carousel.querySelector(".book-prev");

    const next = carousel.querySelector(".book-next");


    // Make sure this carousel has everything it needs
    if (!track || !prev || !next) return;


    // How far the carousel moves per click
    const scrollAmount = 250;


    // LEFT ARROW
    prev.addEventListener("click", () => {

      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });

    });


    // RIGHT ARROW
    next.addEventListener("click", () => {

      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });

    });

  });

});
// =========================
// GALLERY CAROUSELS
// =========================

document.querySelectorAll(".gallery-month").forEach(month => {

  const track = month.querySelector(".gallery-track");
  const prev = month.querySelector(".gallery-prev");
  const next = month.querySelector(".gallery-next");

  if (!track || !prev || !next) return;

  const scrollAmount = 300;


  // LEFT ARROW
  prev.addEventListener("click", () => {

    track.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });

  });


  // RIGHT ARROW
  next.addEventListener("click", () => {

    track.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });

  });

});