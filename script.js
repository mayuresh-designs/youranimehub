const animeList = [
  { name: "Naruto", status: "Watching", image: "https://i.imgur.com/63aUGmW.jpg" },
  { name: "Attack on Titan", status: "Completed", image: "https://i.imgur.com/Ld9U3HF.jpg" },
  { name: "One Piece", status: "Plan to Watch", image: "https://i.imgur.com/bdF9YUZ.jpg" }
];

const listContainer = document.getElementById("anime-list");

animeList.forEach(anime => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${anime.image}" alt="${anime.name}">
    <h2>${anime.name}</h2>
    <p>Status: ${anime.status}</p>
    <button>Update Status</button>
  `;

  listContainer.appendChild(card);
});
