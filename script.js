// Sample anime list (you can expand this later)
const animeList = [
  { title: "Naruto", status: "Watching" },
  { title: "Attack on Titan", status: "Completed" },
  { title: "One Piece", status: "Plan to Watch" }
];

// Get the container
const container = document.getElementById("anime-list");

// Render anime cards
animeList.forEach(anime => {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.innerHTML = `<h3>${anime.title}</h3><p>Status: ${anime.status}</p>`;
  container.appendChild(card);
});
