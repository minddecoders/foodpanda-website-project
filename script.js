// Simple interaction (example)

document.querySelector(".menu").addEventListener("click", () => {
  alert("Menu clicked");
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Deal clicked!");
  });
});