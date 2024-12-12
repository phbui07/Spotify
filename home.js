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
  songsList();
}

function listRadioPopulation() {
  const radioList = document.getElementById("list-card");
  for (let i = 0; i < radio_list.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${radio_list[i].img}" alt="" />
      <p>${radio_list[i].title}</p>
      <div class="box-play">
        <i class="fa-solid fa-play"></i>
      </div>
    `;
    // Thêm sự kiện click vào thẻ div .card
    card.addEventListener("click", () => {
      window.location.href = "songs.html"; // Điều hướng sang file songs.html
    });
    radioList.appendChild(card); // Thêm thẻ card vào danh sách
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
  let valueSearch = e.target.value.toLowerCase();
  let album = [];
  for (let i = 0; i < album_list.length; i++) {
    console.log(`${album_list[i].name} - ${valueSearch}`);
    if (album_list[i].name.toLowerCase().includes(valueSearch)) {
      album.push(album_list[i]);
    }
  }
  console.log(album);
  smallList(album);
});

displayCurrentUser();
console.log(album_list);
