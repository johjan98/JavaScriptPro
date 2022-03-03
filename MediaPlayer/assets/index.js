import mediaPlayer from './MediaPlayer.js';
import autoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const playButton = document.querySelector(".playButton");
const muteButton = document.querySelector(".muteButton");

const player = new mediaPlayer({el: video, plugins:[new autoPlay()]});
playButton.onclick = () => player.playPause();
muteButton.onclick = () => player.mute();