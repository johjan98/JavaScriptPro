import MediaPlayer from "../MediaPlayer";

class AutoPause{
  private threshold: number;
  player: MediaPlayer;

  constructor(){
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);   //De esta forma el this se refiere a la instancia de la clase cuando se llame la función desde otra instancia. Recordar que this siempre hace referencia a la instancia que llama una función, con bind se asegura que this se refiera sólo a la clase AutoPause.
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player){
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {threshold: this.threshold});

    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  private handleIntersection(entries: IntersectionObserverEntry[]){
    const entry = entries[0];

    entry.intersectionRatio >= this.threshold ? this.player.play() : this.player.pause();
  }

  private handleVisibilityChange(){
    document.visibilityState === "visible" ? this.player.play() : this.player.pause();
  }
}

export default AutoPause;