/* =========================
   main.js — Portfolio Logic
   ========================= */

/* ---------- Theme ---------- */
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

/* ---------- Cards ---------- */
function projectCardHTML(p) {
  const img = p.image ? `<img src="${p.image}" alt="${p.title}">` : "";
  const live = safeLink(p.live) ? `<a href="${p.live}" target="_blank" rel="noreferrer">↗ Live</a>` : "";
  const gh = safeLink(p.github) ? `<a href="${p.github}" target="_blank" rel="noreferrer">↗ GitHub</a>` : "";

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
  const paper = safeLink(r.paper) ? `<a href="${r.paper}" target="_blank" rel="noreferrer">↗ Paper</a>` : "";
  const repo = safeLink(r.repo) ? `<a href="${r.repo}" target="_blank" rel="noreferrer">↗ Repo</a>` : "";

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

function renderGrid(id, items, renderer) {
  const el = document.getElementById(id);
  if (!el) return;
  const arr = Array.isArray(items) ? items : [];
  el.innerHTML = arr.map(renderer).join("");
}

/* ---------- Fill content ---------- */
if (typeof PROFILE === "undefined") {
  console.error("PROFILE not found. Ensure data/profile.js loads before js/main.js");
} else {
  document.title = `${PROFILE.name} — Portfolio`;

  setText("navName", PROFILE.name);
  setText("heroName", PROFILE.name);
  setText("heroRole", PROFILE.role);
  setText("aboutTitle", PROFILE.aboutTitle || "About Me");
  setText("aboutText", PROFILE.aboutText || "");
  setText("footerCopy", `© ${PROFILE.name}`);

  // CV link (optional)
  const cvBtn = document.getElementById("cvBtn");
  if (cvBtn && PROFILE.cvUrl) cvBtn.href = PROFILE.cvUrl;

  // Photo
  const heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto && PROFILE.photoUrl) {
    heroPhoto.src = PROFILE.photoUrl;
    heroPhoto.alt = `${PROFILE.name} profile photo`;
  }

  // Render
  renderGrid("projectsGrid", PROFILE.projects, projectCardHTML);
  renderGrid("researchGrid", PROFILE.research, researchCardHTML);

  // Footer icon links
  const fGithub = document.getElementById("fGithub");
  if (fGithub && PROFILE.github) fGithub.href = PROFILE.github;

  const fLinkedin = document.getElementById("fLinkedin");
  if (fLinkedin && PROFILE.linkedin) fLinkedin.href = PROFILE.linkedin;

  const fEmail = document.getElementById("fEmail");
  if (fEmail && PROFILE.email) fEmail.href = `mailto:${PROFILE.email}`;

  // Contact mailto form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cName").value.trim();
      const email = document.getElementById("cEmail").value.trim();
      const subject = document.getElementById("cSubject").value.trim();
      const message = document.getElementById("cMessage").value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill all fields.");
        return;
      }

      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const subj = encodeURIComponent(subject);

      window.location.href = `mailto:${PROFILE.email}?subject=${subj}&body=${body}`;
    });
  }
}