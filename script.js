// --- config ---
const FOLDER = "images/dogs";   // where your files live
const COUNT  = 17;              // pup1..pup17
const EXT    = "jpg";           // file extension
const FADE_MS = 500;
const INTERVAL_MS = 3000;

// build the list: images/dogs/pup1.jpg ... pup17.jpg
const sources = Array.from({ length: COUNT }, (_, i) => `${FOLDER}/pup${i + 1}.${EXT}`);

const banner = document.getElementById("banner-img");
if (!banner) {
    // script is loaded but page has no banner image
    // (safe exit; nothing else runs)
    throw new Error("banner-img not found");
}

// pick a random start
let idx = Math.floor(Math.random() * sources.length);
banner.src = sources[idx];

// if an image is missing/corrupt, skip to the next one
banner.addEventListener("error", () => {
    idx = (idx + 1) % sources.length;
    banner.src = sources[idx];
});

// rotate with a quick fade
function rotateBanner() {
    idx = (idx + 1) % sources.length;
    banner.style.opacity = 0;
    setTimeout(() => {
        banner.src = sources[idx];
        banner.style.opacity = 1;
    }, FADE_MS);
}

setInterval(rotateBanner, INTERVAL_MS);
