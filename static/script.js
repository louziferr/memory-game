const gameboard = document.getElementById("gameboard");

// Karten-Array mit den Zahlen 1-24 erstellen
let karten_array = [];
for (let i=1; i <=24; i++) {
    karten_array.push(i);
}
// Karten mischen
karten_array.sort(() => Math.random() - 0.5);


for (let i of karten_array) {
    // neue Memory Karte erstellen
    const memoryCard = document.createElement("div");
    memoryCard.classList.add("memory-card");
    memoryCard.innerHTML = `<img src="/static/img/3.svg" alt="card" />`;

    // Karte hinzufügen
    gameboard.appendChild(memoryCard);
}
