//JS no tiene implementado el uso de clases. Sin embargo, de esta forma se pueden crear.

class MediaPlayer {

  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || []; //Con || [] se da un valor inicial si plugins viene vacío.

    this.initPlayer();
    this.initPlugins();
  }

  initPlayer(){
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  playPause() {
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause();
    }
  }

  mute() {
    if (this.media.muted) {
      this.media.muted = false;
    } else {
      this.media.muted = true;
    }
  }
};






export default MediaPlayer;