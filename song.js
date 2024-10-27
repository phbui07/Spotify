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

let check = false;
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

// const music = new Audio("./assets/divenha.mp3");
// music.play();
listCurrentSong();
listSong();
