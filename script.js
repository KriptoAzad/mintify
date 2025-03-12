document.addEventListener("DOMContentLoaded", () => {
    let totalMinted = 1; // Başlanğıc dəyər
    setInterval(() => {
        totalMinted++;
        document.getElementById("totalMinted").textContent = totalMinted;
    }, 3000); // Hər 3 saniyədə bir artır
});
