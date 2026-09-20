document.addEventListener("DOMContentLoaded", () => {
  const gradeFotos = document.getElementById("gradeFotos");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalDescription = document.getElementById("modalDescription");

  if (!gradeFotos || !Array.isArray(window.galeriaDados)) return;

  const fotosOrdenadas = [...window.galeriaDados].reverse();

  fotosOrdenadas.forEach((foto) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";

    const card = document.createElement("div");
    card.className = "pure-gallery-card shadow-sm";
    card.dataset.bsToggle = "modal";
    card.dataset.bsTarget = "#fotoModal";
    card.innerHTML = `<img src="${foto.src}" alt="${foto.alt}" loading="lazy" />`;

    card.addEventListener("click", () => {
      if (modalImg) {
        modalImg.src = foto.src;
        modalImg.alt = foto.alt;
      }
      if (modalCaption) modalCaption.textContent = foto.legenda || "";
      if (modalDescription) modalDescription.textContent = foto.descricao || "";
    });

    col.appendChild(card);
    gradeFotos.appendChild(col);
  });
});
