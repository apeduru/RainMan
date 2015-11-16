chrome.tabs.onUpdated({active: true, 
  currentWindow: true},
  function(tabs){
  if (tabs.length === 0 && player.getPlayerState() == 1){
    player.stopVideo();
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  state = player.getPlayerState();
  if (state == 1){
    player.pauseVideo();
  
  } else if (state == 2 || state == -1 || state == 5 || state == 0){
    player.playVideo();
  }

});

chrome.runtime.onSuspend.addListener(function(){
   if (player.getPlayerState() == 1){
    player.pauseVideo();
  }
});

var player;
function onYouTubeIframeAPIReady(){
  console.log("READY");
  player = new YT.Player('player', {
      height: '390',
      width: '640',
      playerVars: {
        enablejsapi:'1',
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
  event.target.setVolume(50);
}

function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.PLAYING) {
    //pauseVideo();
  }
  else if (event.data == YT.PlayerState.PAUSED){
    //playVideo();
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

$(function() {
  setInterval

});

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

