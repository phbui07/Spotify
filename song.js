import { songsList } from "./data.js";
const artist = document.getElementsByClassName("artist")[0];
const headerArtist = document.getElementsByClassName("header-artist")[0];
// window.onscroll = function () {
//   console.log("Kéo xuống được: ", document.documentElement.scrollTop);
//   if (
//     document.body.scrollTop > 350 ||
//     document.documentElement.scrollTop > 350
//   ) {
//     artist.style.opacity = 0;
//     headerArtist.style.opacity = 1;
//   } else {
//     artist.style.opacity = 1;
//     headerArtist.style.opacity = 0;
//   }
// };

function listSong() {
  const artistList = document.getElementById("music-list");
  artistList.innerHTML = "";
  for (let i = 0; i < songsList.length; i++) {
    artistList.innerHTML += `
      <div class="song-container">
        <div class="img-thumbnail">
          <p class="number">${songsList[i].number}</p>
          <img class="thumbnail" src="${songsList[i].thumbnail}">
          <p class="songName">${songsList[i].info}</p>
        </div>
        <p class="viewers">${songsList[i].viewers}</p>
        <p class="duration">${songsList[i].duration}</p>
      </div>
  `;
  }
}

let check = true;
let index = 0;
let audio = new Audio(songsList[index].audio);
const listCurrentSong = (song = songsList[0]) => {
  const thumbnail = document.getElementsByClassName("thumbnail-music")[0];
  const songName = document.getElementsByClassName("music-name")[0];
  const artistName = document.getElementsByClassName("music-artist")[0];
  thumbnail.src = song.thumbnail;
  songName.innerText = song.info;
  artistName.innerText = song.artist;
};

const waveSong = document.getElementsByClassName("wave")[0];

const playSong = document.getElementById("play-song");
playSong.addEventListener("click", function () {
  if (check) {
    playSong.classList.remove("fa-circle-play");
    playSong.classList.add("fa-pause");
    waveSong.classList.add("active");
    audio.play();
    check = false;
  } else {
    playSong.classList.remove("fa-pause");
    playSong.classList.add("fa-circle-play");
    waveSong.classList.remove("active");
    audio.pause();
    check = true;
  }
});

const nextSong = document.getElementById("next-song");
nextSong.addEventListener("click", function () {
  audio.pause();
  index = index === songsList.length - 1 ? 0 : index + 1;
  audio = new Audio(songsList[index].audio);
  listCurrentSong(songsList[index]);
  playSong.classList.remove("fa-circle-play");
  playSong.classList.add("fa-pause");
  audio.play();
});

const prevSong = document.getElementById("prev-song");
prevSong.addEventListener("click", function () {
  audio.pause();
  index = index === 0 ? 0 : index - 1;
  audio = new Audio(songsList[index].audio);
  listCurrentSong(songsList[index]);
  listCurrentSong(songsList[index]);
  playSong.classList.remove("fa-circle-play");
  playSong.classList.add("fa-pause");
  audio.play();
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let bar1 = document.getElementById("bar1");
let dot = document.getElementById("dot");

audio.addEventListener("timeupdate", function () {
  let music_current = audio.currentTime; // thời gian thể hiện là tổng số s hiện tại
  let music_duration = audio.duration;
  let min = Math.floor(music_current / 60);
  let sec = Math.floor(music_current % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentStart.innerText = `${min}:${sec}`;
  let endMin = Math.floor(music_duration / 60);
  let endSec = Math.floor(music_duration % 60);
  currentEnd.innerText = `${endMin}:${endSec}`;
  let progress = (music_current / music_duration) * 100;
  seek.value = progress;
  bar2.style.width = `${progress}%`;
  dot.style.left = `${progress}%`;
});

seek.addEventListener("change", function (e) {
  let seekTime = audio.duration * (e.target.value / 100);
  console.log(seekTime, e.target.value);
  audio.currentTime = seekTime;
});

audio.addEventListener("ended", function () {
  audio.pause();
  index = index === songsList.length - 1 ? 0 : index + 1;
  audio = new Audio(songsList[index].audio);
  listCurrentSong(songsList[index]);
  playSong.classList.remove("fa-circle-play");
  playSong.classList.add("fa-pause");
  currentStart.innerText = `0:00`;
  let endMin = Math.floor(audio.duration / 60);
  let endSec = Math.floor(audio.duration % 60);
  console.log(audio, endSec, endMin);
  currentEnd.innerText = `${endMin}:${endSec}`;
  audio.play();
});

// const music = new Audio("./assets/divenha.mp3");
// music.play();
listCurrentSong();
listSong();
