
function autoPlay(){

}

autoPlay.prototype.run = function(player){
  player.mute();
  player.playPause();
};

export default autoPlay;