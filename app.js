import { DB } from "./data.js";
import { getRoute, go } from "./router.js";

const app = document.getElementById("app");
const title = document.getElementById("title");
const back = document.querySelector(".back");

function setHeader(text) {
  title.textContent = text;
  const parts = getRoute();
  back.style.visibility = parts.length ? "visible" : "hidden";
  back.onclick = (e) => {
    e.preventDefault();
    if (!parts.length) return;
    if (parts.length === 1) go("/");
    else go("/" + parts.slice(0, -1).join("/"));
  };
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderHome() {
  setHeader(DB.appTitle);

  const card = el(`
    <section class="card">
      <p class="p note">Opslagsværk til rengøringspersonale – hurtigt overblik pr. emne.</p>
    </section>
  `);

  const list = el(`<section class="list"></section>`);
  for (const item of DB.home.items) {
    const a = el(`
      <a class="btn" href="#/${item.id}">
        <div>
          <div>${item.icon ?? "📌"} ${item.title}</div>
          <small>${item.subtitle ?? ""}</small>
        </div>
        <div>›</div>
      </a>
    `);
    list.appendChild(a);
  }

  app.replaceChildren(card, list);
}

function renderSection(sectionId) {
  const section = DB.sections[sectionId];
  if (!section) return renderNotFound();

  setHeader(section.title);

  const intro = el(`
    <section class="card">
      <p class="p">${section.intro ?? ""}</p>
    </section>
  `);

  const list = el(`<section class="list"></section>`);
  for (const item of section.items) {
    const a = el(`
      <a class="btn" href="#/${sectionId}/${item.id}">
        <div>
          <div>${item.title}</div>
          <small>Tryk for forklaring</small>
        </div>
        <div>›</div>
      </a>
    `);
    list.appendChild(a);
  }

  app.replaceChildren(intro, list);
}

function renderDetail(sectionId, itemId) {
  const section = DB.sections[sectionId];
  const item = section?.items?.find((x) => x.id === itemId);
  if (!section || !item) return renderNotFound();

  setHeader(item.title);

  const blocks = [];

  const textHtml = (item.text ?? "").replace(/\n/g, "<br>");

  blocks.push(el(`
    <section class="card">
      <p class="p">${textHtml}</p>
    </section>
  `));

  if (item.image) {
    blocks.push(el(`
      <section class="card">
        <img src="${item.image}" alt="${item.title}" />
      </section>
    `));
  }

  app.replaceChildren(...blocks);
}

function renderNotFound() {
  setHeader("Ikke fundet");
  app.replaceChildren(el(`
    <section class="card">
      <p class="p">Siden findes ikke. Gå tilbage og vælg et emne.</p>
    </section>
  `));
}

function render() {
  const parts = getRoute();

  if (parts.length === 0) return renderHome();
  if (parts.length === 1) return renderSection(parts[0]);
  if (parts.length === 2) return renderDetail(parts[0], parts[1]);

  return renderNotFound();
}

// Service worker (offline)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try { await navigator.serviceWorker.register("./sw.js"); } catch {}
  });
}

window.addEventListener("hashchange", render);
render();
