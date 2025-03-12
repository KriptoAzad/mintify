// Mint olunan token sayını artıra bilərik
let tokenCount = 1;

function mintNewToken() {
    tokenCount++;
    document.getElementById('mintCount').innerText = tokenCount;
}

// Saniyədə 1 dəfə token yaratsın (demo üçün)
setInterval(mintNewToken, 1000);
