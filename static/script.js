const gameboard = document.getElementById("gameboard");

// neue Memory Karte erstellen
const memoryCard = document.createElement("div");
memoryCard.classList.add("memory-card");
memoryCard.innerHTML = `<img src="/static/img/1.svg" alt="card" />`;

// Karte hinzufügen
gameboard.appendChild(memoryCard);