var img = document.querySelector("#image");
const audio = document.querySelector('audio')


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

img.addEventListener("click", function() {

    img.setAttribute('src', './images/im'+getRandomInt(1,19)+'.png');
    audio.play()
});



