// Total number of images you have
const totalImages = 17;

// Build the array dynamically, only with jpg/jpeg/png
const images = [];
for (let i = 1; i <= totalImages; i++) {
    images.push(`images/pup${i}.jpg`);
    images.push(`images/pup${i}.jpeg`);
    images.push(`images/pup${i}.png`);
}

// Filter out ones that don’t exist
const validImages = images.filter(src => src.endsWith(".jpg")); // since yours are .jpg

let index = Math.floor(Math.random() * validImages.length); // random start
const banner = document.getElementById("banner-img");

function rotateBanner() {
    index = (index + 1) % validImages.length;
    banner.style.opacity = 0;
    setTimeout(() => {
        banner.src = validImages[index];
        banner.style.opacity = 1;
    }, 500); // fade time
}

// Change every 3 seconds
setInterval(rotateBanner, 3000);
