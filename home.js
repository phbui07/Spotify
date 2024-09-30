import { radio_list } from "./data.js";
import { album_list } from "./data.js";
// Check khi đăng nhập vào rồi thì không cần phải đăng nhập lại nữa ( không vào trang login nữa)
function displayCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    document.getElementById("current-user").innerHTML = currentUser;
  } else {
    window.location.href = "login.html";
  }
  listRadioPopulation();
  smallList();
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
function smallList() {
  const sideAlbum = document.getElementById("albums");
  for (let i = 0; i < album_list.length; i++) {
    sideAlbum.innerHTML += `<div class="album-demo">
                  <img src="${album_list[i].alb_img}" />
                  <div class="album-info">
                    <p class="name">${album_list[i].name}</p>
                    <p class="type">Playlist | ${album_list[i].year}</p>
                  </div>`;

  }
}
displayCurrentUser();
console.log(album_list);