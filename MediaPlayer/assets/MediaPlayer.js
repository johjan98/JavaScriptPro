//JS no tiene implementado el uso de clases. Sin embargo, de esta forma se pueden crear.

function mediaPlayer(config){
  this.media = config.el;
  this.plugins = config.plugins || [];   //Con || [] se da un valor inicial si plugins viene vacío.

  this._initPlugins();
};

mediaPlayer.prototype._initPlugins = function(){
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

mediaPlayer.prototype.playPause = function(){
  if (this.media.paused){
    this.media.play();
  } else {
    this.media.pause();
  }
};

mediaPlayer.prototype.mute = function(){
  if (this.media.muted){
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
};

export default mediaPlayer;