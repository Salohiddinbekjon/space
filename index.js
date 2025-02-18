let idInput = document.querySelector(".idInput");
let passInput = document.querySelector(".passInput");
let loginBtn = document.querySelector(".loginBtn");
let errorP = document.querySelector(".errorp");

loginBtn.addEventListener("click", login);

alert("id parol console.log da")
console.log(408077,123456);


function login(event) {
    event.preventDefault();
    let id = Number(idInput.value);
    let pass = Number(passInput.value);

    if (id === 408077 && pass === 123456)
        window.location.replace("./pages/login.html");
    else {

        errorP.textContent = "ID yoki parol xato";
    }

    idInput.value = "";
    passInput.value = "";
}