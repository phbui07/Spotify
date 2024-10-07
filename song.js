const artist = document.getElementsByClassName("artist")[0];
const headerArtist = document.getElementsByClassName("header-artist")[0];
window.onscroll = function () {
  console.log("Kéo xuống được: ", document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    artist.style.opacity = 0;
    headerArtist.style.opacity = 1;
  } else {
    artist.style.opacity = 1;
    headerArtist.style.opacity = 0;
  }
};
