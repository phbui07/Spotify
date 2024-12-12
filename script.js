const userName = document.getElementById("login-username");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPassword = document.getElementById("confirmPassword");
const password = document.getElementById("login-password");
const confirmError = document.getElementById("confirmError");
// validate form: Xử lý ngoại lệ
// độ dài username >= 5
// password phải lớn hơn 6 ký tự
// confirmPassword phải trùng với password

// trỏ vào id của form
const form = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPassword.innerHTML = "";

  if (userName.value.length < 5) {
    usernameError.style.display = "block";
    usernameError.innerHTML += "Username has to have more than 5 characters";
  }

  if (password.value.length < 6) {
    passwordError.style.display = "block";
    passwordError.innerHTML += "Password has to have more than 6 characters";
  }
  if (confirmPassword.value !== password.value) {
    confirmError.style.display = "block";
    confirmError.innerHTML += "Confirm Password has to be the same as Password";
  }
  if (
    usernameError.innerHTML !== "" ||
    confirmPassword.innerHTML !== "" ||
    passwordError.innerHTML !== ""
  )
    return;

  console.log(
    `Đăng ký thành công ✅
      - ${userName.value} 
      - ${password.value} 
      - ${confirmPassword.value}`
  );

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  accounts.push({
    username: userName.value,
    password: password.value,
  });

  localStorage.setItem("accounts", JSON.stringify(accounts));

  userName.value = "";
  password.value = "";
  confirmPassword.value = "";
  window.location.href = "login.html";
});
