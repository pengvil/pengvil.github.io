/* =========================
   main.js — Portfolio Logic
   ========================= */

/* ---------- Theme ---------- */
// Smooth entrance after first paint
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

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

/* ---------- Cursor glow spotlight ---------- */
const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow) {
  const updateGlow = (e) => {
    cursorGlow.style.setProperty("--mx", `${e.clientX}px`);
    cursorGlow.style.setProperty("--my", `${e.clientY}px`);
  };

  window.addEventListener("mousemove", updateGlow, { passive: true });

  // If mouse leaves the window, fade out
  window.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });

  window.addEventListener("mouseenter", () => {
    cursorGlow.style.opacity = "1";
  });
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
  renderSkills();
  function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  const details = document.getElementById("skillDetails");
  if (!grid || !details || !window.PROFILE) return;

  const skills = PROFILE.skills || [];
  grid.innerHTML = "";

  const setDetails = (skill) => {
    const whereList = (skill.where || []).map(x => `<li>${x}</li>`).join("");
    details.innerHTML = `
      <div class="skill-details-title">${skill.name}</div>
      <div class="skill-details-body">
        <div class="skill-meta">
          <div class="skill-meta-label">Where I used it</div>
          <ul class="skill-where">${whereList}</ul>
        </div>
        <div class="skill-meta">
          <div class="skill-meta-label">How I implemented it</div>
          <p class="skill-how">${skill.how || ""}</p>
        </div>
      </div>
    `;
  };

  // Default (nothing selected)
  details.innerHTML = `
    <div class="skill-details-title">Click a skill to see how I used it.</div>
    <div class="skill-details-body">Projects, coursework, or research where I implemented it will appear here.</div>
  `;

  skills.forEach((skill, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skill-chip";
    btn.textContent = skill.name;
    btn.setAttribute("aria-pressed", "false");

    btn.addEventListener("click", () => {
      // remove active from all
      [...grid.querySelectorAll(".skill-chip")].forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });

      // set active
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      setDetails(skill);
    });

    grid.appendChild(btn);

    // Optional: auto-select first skill
    if (idx === 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      setDetails(skill);
    }
  });
}

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