/**
 * Projeto de Extensão Olaria - IFSP Caraguatatuba
 * Interatividades e Comportamentos em JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicialização do Carrossel do Banner
  const bannerElement = document.querySelector("#bannerOlaria");
  if (bannerElement && window.bootstrap) {
    const bannerCarousel = new bootstrap.Carousel(bannerElement, {
      interval: 6000,
      ride: "carousel",
      touch: true,
      pause: "hover",
      wrap: true,
    });
  }

  // 2. Renderização dinâmica das quatro fotos mais recentes na página inicial
  const galeriaRow = document.querySelector("#galeriaRow");
  if (galeriaRow && Array.isArray(window.galeriaDados)) {
    const ultimasFotos = window.galeriaDados.slice(-4).reverse(); // Seleciona as últimas 4 fotos e inverte a ordem (as mais recentes primeiro)

    ultimasFotos.forEach((foto) => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-3";
      col.innerHTML = `
        <div class="gallery-card">
          <img src="${foto.src}" alt="${foto.alt}" loading="lazy" />
        </div>
      `;
      galeriaRow.appendChild(col);
    });
  }

  // 3. Renderização Dinâmica das Notícias na Página Inicial (Últimas 3 Primeiro via forEach)
  const containerNoticiasHome = document.getElementById(
    "containerNoticiasHome",
  );
  if (
    containerNoticiasHome &&
    window.noticiasDados &&
    Array.isArray(window.noticiasDados)
  ) {
    // Seleciona as últimas 3 notícias do array e inverte a ordem (as mais recentes primeiro)
    const ultimasNoticias = window.noticiasDados.slice(-3).reverse();

    ultimasNoticias.forEach((noticia) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      col.innerHTML = `
        <article class="news-card h-100 d-flex flex-column">
          <div class="news-img-wrap">
            <a href="noticia.html?id=${noticia.id}" aria-label="Ler notícia completa: ${noticia.titulo}">
              <img
                src="${noticia.img}"
                alt="${noticia.titulo}"
                loading="lazy"
              />
            </a>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="news-category">${noticia.categoria}</span>
              <span class="news-date">${noticia.data}</span>
            </div>
            <h3 class="news-title">
              <a href="noticia.html?id=${noticia.id}" class="text-decoration-none" style="color: inherit;">
                ${noticia.titulo}
              </a>
            </h3>
            <p class="news-desc">
              ${noticia.descricao}
            </p>
            <a href="noticia.html?id=${noticia.id}" class="news-link mt-auto fw-bold text-decoration-none">
              Leia mais <i class="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </article>
      `;
      containerNoticiasHome.appendChild(col);
    });
  }

  // 4. Atualização Dinâmica do Menu de Navegação ao Rolar a Página (ScrollSpy)
  const secoes = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".site-header .nav-link");

  function destacarMenu() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight =
      document.querySelector(".site-header")?.offsetHeight || 80;

    secoes.forEach((secao) => {
      const topoSecao = secao.offsetTop - headerHeight - 120;
      const alturaSecao = secao.offsetHeight;
      const idSecao = secao.getAttribute("id");

      if (scrollY >= topoSecao && scrollY < topoSecao + alturaSecao) {
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${idSecao}`) {
            link.classList.add("active");
          } else if (href && href.startsWith("#")) {
            link.classList.remove("active");
          }
        });
      }
    });

    if (scrollY < 100) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === "#inicio") {
          link.classList.add("active");
        } else if (
          link.getAttribute("href") &&
          link.getAttribute("href").startsWith("#")
        ) {
          link.classList.remove("active");
        }
      });
    }
  }

  window.addEventListener("scroll", destacarMenu, { passive: true });

  // 5. Fechar Menu Mobile ao Clicar em um Link
  const menuColapsavel = document.getElementById("menuPrincipal");
  if (menuColapsavel && window.bootstrap) {
    const bsCollapse = new bootstrap.Collapse(menuColapsavel, {
      toggle: false,
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (menuColapsavel.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }

  // 6. Efeito de Sombra no Header ao Rolar
  const siteHeader = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add("shadow-sm");
      } else {
        siteHeader.classList.remove("shadow-sm");
      }
    },
    { passive: true },
  );
});
