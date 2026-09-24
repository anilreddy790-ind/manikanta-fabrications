/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open menu");
    });
  });
}


/* =========================================================
   WHATSAPP QUOTE FORM
   ========================================================= */

const form = document.getElementById("quoteForm");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      document.getElementById("name")?.value.trim() || "";

    const phone =
      document.getElementById("phone")?.value.trim() || "";

    const service =
      document.getElementById("service")?.value ||
      "General enquiry";

    const message =
      document.getElementById("message")?.value.trim() ||
      "I would like to discuss my requirement.";

    const whatsappMessage =
      `Hello Manikanta Welding Works,\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      `Requirement: ${message}`;

    const whatsappURL =
      `https://wa.me/919849504039?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  });
}


/* =========================================================
   CONTACT LINKS
   ========================================================= */

document.querySelectorAll(".contact-list a").forEach((link) => {

  link.addEventListener("click", () => {

    const href = link.getAttribute("href") || "";

    if (
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.includes("wa.me") ||
      href.includes("google.com/maps")
    ) {
      return;
    }

  });

});