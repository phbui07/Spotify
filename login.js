const loginUser = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginForm = document.getElementById("loginForm");
const login = document.getElementById("login");

login.addEventListener("click", function (event) {
  event.preventDefault();

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  console.log(accounts);
  console.log(loginUser.value);
  console.log(loginPassword.value);
  for (let i = 0; i < accounts.length; i++) {
    if (
      loginUser.value === accounts[i].username &&
      loginPassword.value === accounts[i].password
    ) {
      toast({
        title: "Thông báo ✅✅✅",
        message: `${loginUser.value} đã đăng ký thành công!`,
        type: "success",
        duration: 2000,
      });
      console.log(accounts[i].username);
      localStorage.setItem("currentUser", JSON.stringify(accounts[i].username));
      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
      return;
    }
  }
});

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}
