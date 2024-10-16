import {songsList} from './data.js';
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
  artistList.innerHTML ="";
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
console.log(songsList);
listSong();