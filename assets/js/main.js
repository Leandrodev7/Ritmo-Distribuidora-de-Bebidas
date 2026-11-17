// Ritmo Distribuidora de Bebidas
// Autor: Leandro dev7

document.addEventListener("DOMContentLoaded", () => {
  initCategoryFilters();
});

/**
 * Filtro dinâmico de produtos por categoria
 */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll(".cat-pill-btn");
  const productCards = document.querySelectorAll(".product-item-card");

  if (!filterButtons.length || !productCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-category");

      productCards.forEach((card) => {
        const itemCategory = card.getAttribute("data-category");

        if (selectedCategory === "todos" || itemCategory === selectedCategory) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 150);
        }
      });
    });
  });
}
