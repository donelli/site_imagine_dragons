
var player;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '360',
        width: '640',
        videoId: '7wtfhZwyrcc',
        playerVars: {
            'autoplay': 1
        }
    });
}


function alteraVideo(idVideo, btnClicado) {
    player.loadVideoById(idVideo);
    
    const links = document.getElementsByClassName('list-group-item');
    
    for (const elemLink of links) {
        elemLink.classList.remove("list-group-item-primary");
    }
    
    btnClicado.classList.add('list-group-item-primary');
    
}