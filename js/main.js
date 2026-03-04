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

/* ---------- Helpers ---------- */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

function safeLink(url) {
  return typeof url === "string" && url.trim() !== "" && url !== "#";
}

/* ---------- Card Templates ---------- */
function projectCardHTML(p) {
  const img = p.image ? `<img src="${p.image}" alt="${p.title}">` : "";
  const live = safeLink(p.live)
    ? `<a href="${p.live}" target="_blank" rel="noreferrer">↗ Live</a>`
    : "";
  const gh = safeLink(p.github)
    ? `<a href="${p.github}" target="_blank" rel="noreferrer">↗ GitHub</a>`
    : "";

  return `
    <div class="card">
      ${img}
      <div class="card-body">
        <h3>${p.title || ""}</h3>
        <p>${p.desc || ""}</p>
        <div class="card-links">${live}${gh}</div>
      </div>
    </div>
  `;
}

function researchCardHTML(r) {
  const paper = safeLink(r.paper)
    ? `<a href="${r.paper}" target="_blank" rel="noreferrer">↗ Paper</a>`
    : "";
  const repo = safeLink(r.repo)
    ? `<a href="${r.repo}" target="_blank" rel="noreferrer">↗ Repo</a>`
    : "";

  return `
    <div class="card">
      <div class="card-body">
        <h3>${r.title || ""}</h3>
        <p>${r.desc || ""}</p>
        <div class="card-links">${paper}${repo}</div>
      </div>
    </div>
  `;
}

function renderGrid(gridId, items, templateFn) {
  const el = document.getElementById(gridId);
  if (!el) return;
  const arr = Array.isArray(items) ? items : [];
  el.innerHTML = arr.map(templateFn).join("");

  // Optional: show a small message if empty
  if (arr.length === 0) {
    el.innerHTML = `<p style="color: var(--muted);">Nothing added yet.</p>`;
  }
}

/* ---------- PROFILE must exist ---------- */
if (typeof PROFILE === "undefined") {
  console.error("PROFILE is not defined. Make sure data/profile.js loads before js/main.js");
} else {
  // Title + nav
  document.title = `${PROFILE.name} — Portfolio`;
  setText("navName", PROFILE.name);

  // Hero
  setText("heroName", PROFILE.name);
  setText("heroRole", PROFILE.role);

  const heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto) {
    heroPhoto.src = PROFILE.photoUrl || "";
    heroPhoto.alt = `${PROFILE.name} profile photo`;
    if (!PROFILE.photoUrl) heroPhoto.style.display = "none";
  }

  // About
  setText("aboutTitle", PROFILE.aboutTitle || "About Me");
  setText("aboutText", PROFILE.aboutText || "");

  // Projects + Research (THIS is what you’re missing)
  renderGrid("projectsGrid", PROFILE.projects, projectCardHTML);
  renderGrid("researchGrid", PROFILE.research, researchCardHTML);

  // Social links
  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn && PROFILE.email) emailBtn.href = `mailto:${PROFILE.email}`;

  const githubBtn = document.getElementById("githubBtn");
  if (githubBtn && PROFILE.github) githubBtn.href = PROFILE.github;

  const linkedinBtn = document.getElementById("linkedinBtn");
  if (linkedinBtn && PROFILE.linkedin) linkedinBtn.href = PROFILE.linkedin;

  // Footer
  setText("footerCopy", `© 2026 ${PROFILE.name}`);

  // Contact form (mailto)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cName")?.value.trim() || "";
      const email = document.getElementById("cEmail")?.value.trim() || "";
      const subject = document.getElementById("cSubject")?.value.trim() || "";
      const message = document.getElementById("cMessage")?.value.trim() || "";

      if (!PROFILE.email) return alert("Receiver email is missing in PROFILE.email");
      if (!name || !email || !subject || !message) return alert("Please fill all fields.");

      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const subj = encodeURIComponent(subject);

      window.location.href = `mailto:${PROFILE.email}?subject=${subj}&body=${body}`;
    });
  }
}