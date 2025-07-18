const gameboard = document.getElementById("gameboard");

// Karten-Array mit den Zahlen 1-24 erstellen
let karten_array = [];
for (let i=1; i <=24; i++) {
    karten_array.push(i);
}
// Karten mischen
karten_array.sort(() => Math.random() - 0.5);

console.log(karten_array);

for (let i of karten_array) {
    // neue Memory Karte erstellen
    const memoryCard = document.createElement("div");
    memoryCard.classList.add("memory-card");
    memoryCard.innerHTML = `<img 
                            src="/static/img/${i%12+1}.svg" 
                            alt="card" 
                            class="hidden"
                            id=${i} />`;
    // Event-Listener für Klick
    memoryCard.addEventListener('click', () => handleClick(i));
    // Karte hinzufügen
    gameboard.appendChild(memoryCard);
}

// Funktion, wenn Karte angeklickt wird
function handleClick(i) {
    console.log(i);
    const karte = document.getElementById(i);
    karte.classList.toggle('hidden');
}
