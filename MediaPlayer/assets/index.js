import mediaPlayer from './MediaPlayer.js';
import autoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new mediaPlayer({el: video, plugins:[new autoPlay()]});
button.onclick = () => player.playPause();