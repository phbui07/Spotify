import { radio_list, album_list } from "./data.js";
// Check khi đăng nhập vào rồi thì không cần phải đăng nhập lại nữa ( không vào trang login nữa)
function displayCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    document.getElementById("current-user").innerHTML = currentUser;
  } else {
    window.location.href = "login.html";
  }
  listRadioPopulation();
  smallList(album_list);
}

function listRadioPopulation() {
  const radioList = document.getElementById("list-card");
  for (let i = 0; i < radio_list.length; i++) {
    radioList.innerHTML += `<div class="card">
                <img src="${radio_list[i].img}" alt="" />
                <p>${radio_list[i].title}</p>
                <div class="box-play">
                  <i class="fa-solid fa-play"></i>
                </div>
              </div>`;
  }
}

function smallList(album) {
  const sideAlbum = document.getElementById("albums");
  sideAlbum.innerHTML = "";
  for (let i = 0; i < album.length; i++) {
    sideAlbum.innerHTML += `<div class="album-demo">
                  <img src="${album[i].alb_img}" />
                  <div class="album-info">
                    <p class="name">${album[i].name}</p>
                    <p class="type">Playlist | ${album[i].year}</p>
                  </div>`;
  }
}

const searchValue = document.getElementById("search-ablum");
searchValue.addEventListener("input", function (e) {
  let valueSearch = e.target.value;
  let album = [];
  for (let i = 0; i < album_list.length; i++) {
    console.log(`${album_list[i].name} - ${valueSearch}`);
    if (album_list[i].name.includes(valueSearch)) {
      album.push(album_list[i]);
    }
  }
  console.log(album);
  smallList(album);
});

displayCurrentUser();
console.log(album_list);
