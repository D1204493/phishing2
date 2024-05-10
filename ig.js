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
    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dzh_TW%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522q6nuakpddj83xelbwj1o760pu12iuuzuxrkbhi9migny1l4xe07%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db789e603-31a4-4a3f-a8a3-e71969f67325%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522q6nuakpddj83xelbwj1o760pu12iuuzuxrkbhi9migny1l4xe07%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=zh_TW&pl_dbl=0";
}); //log in with facebook的連結

document.getElementById("forget").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/accounts/password/reset/"; //忘記密碼的連結
});











