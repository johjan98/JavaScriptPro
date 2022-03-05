//JS no tiene implementado el uso de clases. Sin embargo, de esta forma se pueden crear.

function MediaPlayer(config){
  this.media = config.el;
  this.plugins = config.plugins || [];   //Con || [] se da un valor inicial si plugins viene vacío.

  this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function(){
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted(){
      return this.media.muted;
    },
    set muted(value){
      this.media.muted = value;
    }
  }

  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.play = function(){
  this.media.play();
}

MediaPlayer.prototype.pause = function(){
  this.media.pause();
}

MediaPlayer.prototype.playPause = function(){
  if (this.media.paused){
    this.media.play();
  } else {
    this.media.pause();
  }
};

MediaPlayer.prototype.mute = function(){
  if (this.media.muted){
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
};

export default MediaPlayer;