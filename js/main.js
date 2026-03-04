/* =========================
   main.js — Portfolio Logic
   ========================= */

/* ---------- Theme Toggle ---------- */
const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

applyTheme(localStorage.getItem("theme") || "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

/* ---------- Small helper ---------- */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

/* ---------- Guard: PROFILE must exist ---------- */
if (typeof PROFILE === "undefined") {
  console.error("PROFILE is not defined. Make sure data/profile.js loads before js/main.js");
} else {
  /* ---------- Page title + nav ---------- */
  document.title = `${PROFILE.name} — Portfolio`;
  setText("navName", PROFILE.name);

  /* ---------- HERO ---------- */
  setText("heroName", PROFILE.name);
  setText("heroRole", PROFILE.role);

  const heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto) {
    heroPhoto.src = PROFILE.photoUrl || "";
    heroPhoto.alt = `${PROFILE.name} profile photo`;
    // If no photo provided, hide image to avoid broken icon
    if (!PROFILE.photoUrl) heroPhoto.style.display = "none";
  }

  /* ---------- ABOUT ---------- */
  setText("aboutTitle", PROFILE.aboutTitle || "About Me");
  setText("aboutText", PROFILE.aboutText || "");

  /* ---------- Social icon links ---------- */
  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn && PROFILE.email) {
    emailBtn.href = `mailto:${PROFILE.email}`;
  }

  const githubBtn = document.getElementById("githubBtn");
  if (githubBtn && PROFILE.github) {
    githubBtn.href = PROFILE.github;
  }

  const linkedinBtn = document.getElementById("linkedinBtn");
  if (linkedinBtn && PROFILE.linkedin) {
    linkedinBtn.href = PROFILE.linkedin;
  }

  /* ---------- Footer ---------- */
  setText("footerCopy", `© 2026 ${PROFILE.name}`);

  /* ---------- Contact Form (mailto) ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cName")?.value.trim() || "";
      const email = document.getElementById("cEmail")?.value.trim() || "";
      const subject = document.getElementById("cSubject")?.value.trim() || "";
      const message = document.getElementById("cMessage")?.value.trim() || "";

      // Basic validation
      if (!PROFILE.email) {
        alert("Receiver email is missing in PROFILE.email");
        return;
      }
      if (!name || !email || !subject || !message) {
        alert("Please fill all fields.");
        return;
      }

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      const subj = encodeURIComponent(subject);

      // Opens user's email app (works on GitHub Pages)
      window.location.href = `mailto:${PROFILE.email}?subject=${subj}&body=${body}`;
    });
  }
}