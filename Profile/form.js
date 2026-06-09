const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event){

    let valid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if(nameInput.value === ""){
        nameError.textContent = "Name is required";
        valid = false;
    }

    if(emailInput.value === ""){
        emailError.textContent = "Email is required";
        valid = false;
    }
    else if(!emailInput.value.includes("@")){
        emailError.textContent = "Email must contain @";
        valid = false;
    }

    if(passwordInput.value === ""){
        passwordError.textContent = "Password is required";
        valid = false;
    }

    if(valid === false){
        event.preventDefault();
    }

});