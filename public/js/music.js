var list = document.getElementById("list");
var audio = null;
var classes = ['button1', 'button2'];
/* for (var i = 0; i < classes.length; i++) {
    var elements = document.getElementsByClassName(classes[i]);
    for (var j = 0; j < elements.length; j++) {
        elements[j].onclick = function (event) {

            audio = document.createElement('audio');
            audio.src = '/audio/onClick.ogg';
            audio.autoplay = true;

            list.appendChild(audio);
        }

    }
}*/
var buttonTop = document.querySelectorAll(".button1");
var buttonDown = document.querySelectorAll(".button2");

buttonTop.forEach(button => {
    button.addEventListener('click', function () {
        let player = document.getElementById("audio2");

        player.autoplay = true;
        player.load();

    })
});
buttonDown.forEach(button => {
    button.addEventListener('click', function () {
        let player = document.getElementById("audio2");

        player.autoplay = true;
        player.load();

    })
});
var music = document.getElementsByClassName("music")[0];
function play() {
    let player = document.getElementById("audio1");

    player.autoplay = true;
    player.loop = true;
    player.load();

}
function playmanual() {
    let player = document.getElementById("audio1");

    player.autoplay = true;
    player.loop = true;
    player.load();

}

