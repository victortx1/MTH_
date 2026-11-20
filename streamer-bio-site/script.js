
(() => {
  "use strict";

  const config = window.STREAMER_CONFIG || {};

  const byId = (id) => document.getElementById(id);

  const safeText = (value, fallback = "") =>
    typeof value === "string" ? value : fallback;

  const setText = (id, value) => {
    const element = byId(id);
    if (element) element.textContent = value;
  };

  const validUrl = (value) => {
    try {
      const parsed = new URL(value, window.location.href);

      if (
        parsed.protocol === "https:" ||
        parsed.protocol === "http:"
      ) {
        return parsed.href;
      }

      return null;
    } catch (_) {
      return null;
    }
  };

  // INFORMAÇÕES DO STREAMER
  const name = safeText(config.name, "MTH_");

  setText("brand-name", safeText(config.brand, name));
  setText("hero-name", name);
  setText("status-label", safeText(config.status, "CRIADOR DE CONTEÚDO"));
  setText("bio", safeText(config.bio));
  setText("about-text", safeText(config.about));

  setText(
    "footer-copy",
    `© ${new Date().getFullYear()} — ${name}. Todos os direitos reservados.`
  );

  // BOTÃO PRINCIPAL
  const mainLive = byId("main-live");
  const mainLink = validUrl(safeText(config.mainLink, "#links"));

  if (mainLive && mainLink) {
    mainLive.href = mainLink;
  }

  // REDES SOCIAIS
  const grid = byId("link-grid");

  if (!grid) return;

  const links = Array.isArray(config.links)
    ? config.links
    : [];

  grid.replaceChildren();

  links.forEach((item, index) => {
    if (!item || typeof item !== "object") return;

    const url = validUrl(item.url);

    if (!url) return;

    const card = document.createElement("a");

    card.className = "link-card";
    card.href = url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.setAttribute(
      "aria-label",
      `${safeText(item.title, "Link")} — abrir em nova aba`
    );

    const icon = document.createElement("span");
    icon.className = "link-icon";
    icon.textContent = safeText(item.icon, "↗");

    const content = document.createElement("span");
    content.className = "link-content";

    const title = document.createElement("strong");
    title.textContent = safeText(item.title, "Minha plataforma");

    const desc = document.createElement("small");
    desc.textContent = safeText(item.description);

    const label = document.createElement("span");
    label.className = "link-label";
    label.textContent = safeText(item.label, "ACESSAR");

    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.textContent = "↗";

    content.append(title, desc);
    card.append(icon, content, label, arrow);

    card.style.setProperty("--card-index", String(index));

    grid.appendChild(card);
  });

  // MENSAGEM CASO NÃO EXISTAM LINKS
  if (!grid.children.length) {
    const empty = document.createElement("p");

    empty.className = "empty-state";
    empty.textContent = "Adicione seus links no arquivo config.js.";

    grid.appendChild(empty);
  }

})();
