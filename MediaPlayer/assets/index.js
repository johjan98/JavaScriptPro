const video = document.querySelector("video");
const button = document.querySelector("button");

function mediaPlayer(config){
  this.media = config.el;
};

mediaPlayer.prototype.playPause = function(){
  if (this.media.paused){
    this.media.play();
  } else {
    this.media.pause();
  }
};

const player = new mediaPlayer({el: video});
button.onclick = () => player.playPause();