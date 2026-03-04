// Theme toggle
const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

applyTheme(localStorage.getItem("theme") || "dark");

themeToggle.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

// Render helper
function cardHTML(item, links) {
  const img = item.image ? `<img src="${item.image}" alt="${item.title}">` : "";
  const linksHTML = links
    .map(l => (item[l.key] && item[l.key] !== "#")
      ? `<a href="${item[l.key]}" target="_blank" rel="noreferrer">↗ ${l.label}</a>`
      : "")
    .join("");

  return `
    <div class="card">
      ${img}
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="card-links">${linksHTML}</div>
      </div>
    </div>
  `;
}

function renderGrid(id, items, links) {
  const el = document.getElementById(id);
  el.innerHTML = items.map(i => cardHTML(i, links)).join("");
}

// Fill basic info
document.getElementById("pageTitle").textContent = `${PROFILE.name} — Portfolio`;
document.getElementById("navName").textContent = PROFILE.name;
document.getElementById("heroName").textContent = PROFILE.name;
document.getElementById("heroRole").textContent = PROFILE.role;

const emailLink = document.getElementById("emailLink");
emailLink.textContent = PROFILE.email;
emailLink.href = `mailto:${PROFILE.email}`;

const githubLink = document.getElementById("githubLink");
githubLink.textContent = PROFILE.github.replace("https://", "");
githubLink.href = PROFILE.github;

const linkedinLink = document.getElementById("linkedinLink");
linkedinLink.textContent = PROFILE.linkedin.replace("https://", "");
linkedinLink.href = PROFILE.linkedin;

// Render sections
renderGrid("projectsGrid", PROFILE.projects, [
  { key: "live", label: "Live" },
  { key: "github", label: "GitHub" }
]);

renderGrid("researchGrid", PROFILE.research, [
  { key: "paper", label: "Paper" },
  { key: "repo", label: "Repo" }
]);