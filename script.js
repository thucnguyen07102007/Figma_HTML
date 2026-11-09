//name,email,password,signup-bt,form-help
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBt = document.getElementById("signup-bt");
const formHelp = document.getElementById("form-help");
const signinBt = document.getElementById("signin-bt");

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
//Sign Up
if(signupBt){
signupBt.addEventListener("click", function (event) {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  //kiểm tra email hợp lệ
  
  if (!validateEmail(email) ) {
    formHelp.style.display = "block";
    formHelp.innerText = "Email không hợp lệ.";
    return;
  }

  if (name === "" || email === "" || password === "") {
    formHelp.style.display = "block";
    formHelp.innerText = "Vui lòng điền đầy đủ thông tin.";
    return;
  }
  //tên không được để trống
  if (name === "") {
    formHelp.style.display = "block";
    formHelp.innerText = "Tên không được để trống.";
    return;
  }
  //kiểm tra password có đủ độ dài không
  if (password.length < 8) {
    formHelp.style.display = "block";
    formHelp.innerText = "Mật khẩu cần ít nhất 8 ký tự.";
    return;
  }
  //hiển thị ra ngoài
  formHelp.style.display = "none";
  alert("Đăng ký thành công!");
  emailInput.value = "";
  passwordInput.value = "";
  window.location.href = "login.html"; //chuyển hướng sang trang login.html
});
}
//Sign In
if(signinBt){
signinBt.addEventListener("click", function (event) {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
 

  if (email === "" || password === "") {
    formHelp.style.display = "block";
    formHelp.innerText = "Vui lòng điền đầy đủ thông tin.";
    return;
  }
  if (!validateEmail(email)) {
    formHelp.style.display = "block";
    formHelp.innerText = "Email không hợp lệ.";
    return;
  }
  if (password.length < 8) {
    formHelp.style.display = "block";
    formHelp.innerText = "Mật khẩu cần ít nhất 8 ký tự.";
    return;
  }

  formHelp.style.display = "none";
  alert("Đăng nhập thành công!");
});
}
