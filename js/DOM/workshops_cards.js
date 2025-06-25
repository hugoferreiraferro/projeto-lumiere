export function getMedia(votos) {
  if (!Array.isArray(votos) || votos.length === 0) return 0;
  return votos.reduce((a, b) => a + b, 0) / votos.length;
}

export function highlightStars(stars, rating) {
  stars.forEach((star) => {
    const value = Number(star.getAttribute("data-value"));
    star.classList.toggle("selected", value <= Math.round(rating));
    star.classList.toggle("hover", false);
  });
}

if (typeof document !== "undefined") {
  document.querySelectorAll(".cards").forEach((card) => {
    const stars = card.querySelectorAll(".star-rating .star");
    const ratingText = card.querySelector(".rating-text");
    let votos = [4, 5, 3, 3];
    let selectedRating = 0;

    stars.forEach((star) => {
      star.addEventListener("mouseover", () => {
        const value = star.getAttribute("data-value");
        highlightStars(stars, value);
      });
      // fazer a mudança depois para o sistema de feedback do workshop

      // star.addEventListener("mouseout", () => {
      //   highlightStars(stars, getMedia(votos));
      // });

      // star.addEventListener("click", () => {
      //   selectedRating = Number(star.getAttribute("data-value"));
      //   votos.push(selectedRating);
      //   mostrarMedia();
      //   highlightStars(stars, getMedia(votos));
      // });
    });

    function mostrarMedia() {
      const media = getMedia(votos);
      if (ratingText) {
        ratingText.textContent = `Média: ${media.toFixed(1)}`;
      }
      highlightStars(stars, getMedia(votos));
    }

    mostrarMedia();
  });
}
