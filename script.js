// Total Minted Token Counter Simulation
let totalMinted = 0;
const counter = document.getElementById('total-minted');

function mintToken() {
    totalMinted++;
    counter.textContent = totalMinted.toLocaleString();
}

// Simulate minting every 3 seconds
setInterval(mintToken, 3000);
