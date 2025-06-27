const animeList = [
  {
    name: "Naruto",
    status: "Watching",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    link: "https://myanimelist.net/anime/20/Naruto"
  },
  {
    name: "Attack on Titan",
    status: "Completed",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/AoT_cover.jpg",
    link: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
  },
  {
    name: "One Piece",
    status: "Plan to Watch",
    image: "https://upload.wikimedia.org/wikipedia/en/6/65/OnePiece62Cover.png",
    link: "https://myanimelist.net/anime/21/One_Piece"
  }
];

const container = document.getElementById("anime-list");

animeList.forEach(anime => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${anime.image}" alt="${anime.name}" width="100%">
    <h2>${anime.name}</h2>
    <p>Status: ${anime.status}</p>
    <a href="${anime.link}" target="_blank">
      <button>More Info</button>
    </a>
  `;
  container.appendChild(card);
});
button {
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e84118;
}
