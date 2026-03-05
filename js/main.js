/* =========================
   main.js (FULL)
   ========================= */

/* ---------- Smooth entrance ---------- */
window.addEventListener("load", () => {
  // If you use body.preload in HTML, remove it on load:
  document.body.classList.remove("preload");
  document.body.classList.add("loaded");
});

/* ---------- Theme toggle ---------- */
(function themeInit() {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const saved = localStorage.getItem("theme") || html.getAttribute("data-theme") || "dark";

  const applyTheme = (t) => {
    html.setAttribute("data-theme", t);
    btn.textContent = t === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", t);
  };

  applyTheme(saved);

  btn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();

/* ---------- Cursor glow spotlight ---------- */
(function cursorGlowInit() {
  const cursorGlow = document.getElementById("cursorGlow");
  if (!cursorGlow) return;

  const update = (e) => {
    cursorGlow.style.setProperty("--mx", `${e.clientX}px`);
    cursorGlow.style.setProperty("--my", `${e.clientY}px`);
  };

  window.addEventListener("mousemove", update, { passive: true });
  window.addEventListener("mouseleave", () => (cursorGlow.style.opacity = "0"));
  window.addEventListener("mouseenter", () => (cursorGlow.style.opacity = "1"));
})();

/* ---------- Helpers ---------- */
function $(id) {
  return document.getElementById(id);
}

function safeLink(url) {
  return typeof url === "string" && url.trim() && url.trim() !== "#" ? url.trim() : "";
}

function esc(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ---------- Render hero + basic text ---------- */
function renderProfileHeader() {
  if (!window.PROFILE) return;

  const { name, role } = PROFILE;

  const pageTitle = $("pageTitle");
  if (pageTitle) pageTitle.textContent = `${name} — Portfolio`;

  const navName = $("navName");
  if (navName) navName.textContent = name;

  const heroName = $("heroName");
  if (heroName) heroName.textContent = name;

  const heroRole = $("heroRole");
  if (heroRole) heroRole.textContent = role;

  const footerCopy = $("footerCopy");
  if (footerCopy) footerCopy.textContent = `© ${new Date().getFullYear()} ${name}`;
}

/* ---------- About text ---------- */
function renderAbout() {
  if (!window.PROFILE) return;

  const aboutText = $("aboutText");
  if (!aboutText) return;

  // If you already store about text in profile.js, use it.
  // Otherwise fallback:
  aboutText.textContent =
    PROFILE.about ||
    "I’m a CSE student at AIUB focused on building real-world software projects, exploring AI/ML (NLP), and robotics. I enjoy clean UI, practical engineering, and research-driven problem solving.";
}

/* ---------- Projects ---------- */
function renderProjects() {
  if (!window.PROFILE) return;

  const grid = $("projectsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  (PROFILE.projects || []).forEach((p) => {
    const live = safeLink(p.live);
    const github = safeLink(p.github);

    const links = `
      <div class="card-links">
        ${live ? `<a href="${esc(live)}" target="_blank" rel="noreferrer">↗ Live</a>` : ""}
        ${github ? `<a href="${esc(github)}" target="_blank" rel="noreferrer">↗ GitHub</a>` : ""}
      </div>
    `;

    grid.insertAdjacentHTML(
      "beforeend",
      `
      <article class="card">
        <img src="${esc(p.image)}" alt="${esc(p.title)} thumbnail"
             onerror="this.style.display='none'; this.closest('.card').classList.add('noimg');" />
        <div class="card-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          ${links}
        </div>
      </article>
      `
    );
  });
}

/* ---------- Research ---------- */
function renderResearch() {
  if (!window.PROFILE) return;

  const grid = $("researchGrid");
  if (!grid) return;

  grid.innerHTML = "";
  (PROFILE.research || []).forEach((r) => {
    const paper = safeLink(r.paper);
    const repo = safeLink(r.repo);

    const links = `
      <div class="card-links">
        ${paper ? `<a href="${esc(paper)}" target="_blank" rel="noreferrer">↗ Paper</a>` : ""}
        ${repo ? `<a href="${esc(repo)}" target="_blank" rel="noreferrer">↗ Repo</a>` : ""}
      </div>
    `;

    grid.insertAdjacentHTML(
      "beforeend",
      `
      <article class="card">
        <div class="card-body">
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.desc)}</p>
          ${links}
        </div>
      </article>
      `
    );
  });
}

/* ---------- Skills (chips + click details) ---------- */
function renderSkills() {
  if (!window.PROFILE) return;

  const grid = $("skillsGrid");
  const details = $("skillDetails");
  if (!grid || !details) return;

  const skills = PROFILE.skills || [];
  grid.innerHTML = "";

  const setDetails = (skill) => {
    const whereList = (skill.where || []).map((x) => `<li>${esc(x)}</li>`).join("");
    details.innerHTML = `
      <div class="skill-details-title">${esc(skill.name)}</div>
      <div class="skill-details-body">
        <div class="skill-meta">
          <div class="skill-meta-label">Where I used it</div>
          <ul class="skill-where">${whereList}</ul>
        </div>
        <div class="skill-meta">
          <div class="skill-meta-label">How I implemented it</div>
          <p class="skill-how">${esc(skill.how || "")}</p>
        </div>
      </div>
    `;
  };

  if (!skills.length) {
    details.innerHTML = `
      <div class="skill-details-title">No skills found.</div>
      <div class="skill-details-body">Add a <code>skills: []</code> section in <code>data/profile.js</code>.</div>
    `;
    return;
  }

  // Build chips
  skills.forEach((skill, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skill-chip";
    btn.textContent = skill.name;
    btn.setAttribute("aria-pressed", "false");

    btn.addEventListener("click", () => {
      [...grid.querySelectorAll(".skill-chip")].forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      setDetails(skill);
    });

    grid.appendChild(btn);

    // auto select first
    if (idx === 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      setDetails(skill);
    }
  });
}

/* ---------- Contact icons + form (mailto) ---------- */
function wireContact() {
  if (!window.PROFILE) return;

  const emailBtn = $("emailBtn");
  const githubBtn = $("githubBtn");
  const linkedinBtn = $("linkedinBtn");

  if (emailBtn) emailBtn.href = `mailto:${PROFILE.email || ""}`;
  if (githubBtn) githubBtn.href = PROFILE.github || "#";
  if (linkedinBtn) linkedinBtn.href = PROFILE.linkedin || "#";

  const form = $("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = $("cName")?.value?.trim() || "";
    const email = $("cEmail")?.value?.trim() || "";
    const subject = $("cSubject")?.value?.trim() || "";
    const message = $("cMessage")?.value?.trim() || "";

    const to = PROFILE.email || "";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

/* ---------- Init ---------- */
function init() {
  if (!window.PROFILE) {
    console.error("PROFILE not found. Check that data/profile.js loads before main.js");
    return;
  }

  renderProfileHeader();
  renderAbout();
  renderProjects();
  renderResearch();
  renderSkills();
  wireContact();
}

document.addEventListener("DOMContentLoaded", init);