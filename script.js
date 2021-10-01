
const img = document.getElementById('img');

let images = 1;
const totalImg = 7;

setInterval(() => {
    if (images > totalImg) {
        images = 1;
    }
    const url = `img/pic (${images}).jpg`
    img.setAttribute('src', url);
    images++;
}, 1000);
