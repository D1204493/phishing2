document.addEventListener("DOMContentLoaded",() => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const loginButton = document.getElementById("loginButton");

    togglePassword.addEventListener("click", () => {
        if(passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = "Hide";
        } else {
         passwordInput.type = "password";
         togglePassword.innerHTML = "Show";
        }
    });

    const updateToggleButtonVisibility = () => {
        if (passwordInput.value.trim() === "") {
            togglePassword.style.visibility = "hidden";
        } else {
            togglePassword.style.visibility = "visible";
        }
    }
    updateToggleButtonVisibility();

    passwordInput.addEventListener("input", () => {
        updateToggleButtonVisibility();
        if (
            usernameInput.value.trim() === "" ||
            passwordInput.value.trim() === ""
        ){
            loginButton.disabled = true;
        } else {
            loginButton.disabled = false;
        }
    });

});

document.getElementById('loginButton').onclick = function () {
    //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容
    var userAccount = document.getElementById('username').value;
    var userPassword = document.getElementById('password').value;
    //命名變數為抓取 input 裡面的數值，所以要用 value
    alert("哈哈，騙到你了～\r" + "帳號：" + userAccount + "\r密碼：" + userPassword);
    //使用 alert 做驗證
}

document.getElementById("loginFB").addEventListener("click", function() {
    window.location.href = "https://www.facebook.com/?locale=zh_TW";
}); //log in with facebook的連結

document.getElementById("forget").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/accounts/password/reset/"; //忘記密碼的連結
});











