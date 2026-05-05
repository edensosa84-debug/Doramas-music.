const modal = document.getElementById('infoModal');
const playerScreen = document.getElementById('video-player-screen');
const mainVideo = document.getElementById('main-video-player');
const videoSrc = document.getElementById('video-src');
const searchInput = document.getElementById('searchInput');

// --- FUNCIONES DEL MODAL ---
function openInfo() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeInfo() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// --- BUSCADOR INTELIGENTE ---
searchInput.addEventListener('input', function() {
    let filter = searchInput.value.toLowerCase();
    let items = document.querySelectorAll('.searchable');

    items.forEach(item => {
        let title = item.querySelector('.serie-title').innerText.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = "block"; // Se muestra si coincide
        } else {
            item.style.display = "none"; // Se oculta si no
        }
    });
});

// --- REPRODUCTOR DE VIDEO ---
function playVideo(url) {
    videoSrc.src = url;
    mainVideo.load();
    playerScreen.style.display = 'block';
    mainVideo.play();
    
    // Intenta pantalla completa
    if (mainVideo.requestFullscreen) mainVideo.requestFullscreen();
}

function stopVideo() {
    mainVideo.pause();
    playerScreen.style.display = 'none';
    if (document.fullscreenElement) document.exitFullscreen();
}

// Cerrar con tecla Escape
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        stopVideo();
        closeInfo();
    }
});
