const artist = document.getElementsByClassName("artist")[0];
const headerArtist = document.getElementsByClassName("header-artist")[0];
window.onscroll = function () {
  console.log("Kéo xuống được: ", document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    artist.style.display = "none";
    headerArtist.style.display = "flex";
  } else {
    artist.style.display = "block";
    headerArtist.style.display = "none";
  }
};
