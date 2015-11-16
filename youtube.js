var player;
function onYouTubeIframeAPIReady(){
  console.log("READY");
  player = new YT.Player('player', {
      height: '390',
      width: '640',
      playerVars: {
        enablejsapi:'1',
        autoplay:'1',
        listType:'playlist',
        list:'PLwQ8TGJDpReIdq4J2JTA0TOl5B-AkDgNt'
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  }
  );
};

function onPlayerReady(event) {
  event.target.playVideo();
  event.taget.setVolume();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {

  }

  if (event.data == YT.PlayerState.PAUSED){

  }
}

function isMuted(){
  return player.isMuted();
}

function unMute(){
  player.unMute();
}

function setVolume() {
  player.setVolume(100);
}

function stopVideo() {
  player.stopVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function playVideo() {
  player.playVideo();
}

$(window).load(function() {
  console.log("Loading YouTube API");
  var playerDiv = document.createElement('div');
  playerDiv.id = "player";
  document.body.appendChild(playerDiv);
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  console.log("Finished loading YouTube API");
});

