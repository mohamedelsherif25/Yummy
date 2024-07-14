let regexForName =
  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
let regexForEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let regexForPhone = /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/;
let regexForAge = /^[1-9][0-9]?$|^100$/;
let regexForPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let inputName = document.getElementById("input-name");
let inputNameError = document.querySelector(".nameError");

let inputEmail = document.getElementById("input-email");
let inputEmailError = document.querySelector(".emailError");

let inputPhone = document.getElementById("input-phone");
let inputPhoneError = document.querySelector(".phoneError");

let inputAge = document.getElementById("input-age");
let inputAgeError = document.querySelector(".AgeError");

let inputPass = document.getElementById("input-pass");
let inputPassError = document.querySelector(".passwordError");

let inputRepass = document.getElementById("input-repass");
let inputRepassError = document.querySelector(".repasswordError");

inputName.addEventListener("keyup", () => {
  if (regexForName.test(inputName.value)) {
    ValidationDone();
    inputNameError.innerHTML = "";
  } else {
    inputNameError.innerHTML = `
        <div class="alert alert-warning mt-1" role="alert">
  Enter Valid Name! Ahmed Ali
</div>
        `;
  }
  if (inputName.value == "") {
    inputNameError.innerHTML = "";
  }
});

inputEmail.addEventListener("keyup", () => {
  if (regexForEmail.test(inputEmail.value)) {
    ValidationDone();
    inputEmailError.innerHTML = "";
  } else {
    inputEmailError.innerHTML = `
        <div class="alert alert-warning mt-1" role="alert">
  Enter Valid Email! eee@gmail.com
</div>
        `;
  }
  if (inputEmail.value == "") {
    inputEmailError.innerHTML = "";
  }
});

inputPhone.addEventListener("keyup", () => {
  if (regexForPhone.test(inputPhone.value)) {
    ValidationDone();
    inputPhoneError.innerHTML = "";
  } else {
    inputPhoneError.innerHTML = `
          <div class="alert alert-warning mt-1" role="alert">
    Enter Valid Phone Number! 01222222222
  </div>
          `;
  }
  if (inputPhone.value == "") {
    inputPhoneError.innerHTML = "";
  }
});

inputAge.addEventListener("keyup", () => {
  if (regexForAge.test(inputAge.value)) {
    ValidationDone();
    inputAgeError.innerHTML = "";
  } else {
    inputAgeError.innerHTML = `
          <div class="alert alert-warning mt-1" role="alert">
    Enter Valid Age!
  </div>
          `;
  }
  if (inputAge.value == "") {
    inputAgeError.innerHTML = "";
  }
});

let pass;
inputPass.addEventListener("keyup", () => {
  if (regexForPass.test(inputPass.value)) {
    ValidationDone();
    pass = inputPass.value;
    inputPassError.innerHTML = "";
  } else {
    inputPassError.innerHTML = `
            <div class="alert alert-warning mt-1" role="alert">
          Enter Valid Password! , Password 6 => 12 character , It contains Special character and Number
    </div>
            `;
  }
  if (inputPass.value == "") {
    inputPassError.innerHTML = "";
  }
});

inputRepass.addEventListener("keyup", () => {
  if (inputRepass.value == pass) {
    ValidationDone();
    inputRepassError.innerHTML = "";
  } else {
    inputRepassError.innerHTML = `
              <div class="alert alert-warning mt-1" role="alert">
           The Password does not match or the field is empty!
      </div>
              `;
  }
  if (inputRepass.value == "") {
    inputRepassError.innerHTML = "";
  }
});

function ValidationDone() {
  if (
    regexForName.test(inputName.value) &&
    regexForEmail.test(inputEmail.value) &&
    regexForPhone.test(inputPhone.value) &&
    regexForAge.test(inputAge.value) &&
    regexForPass.test(inputPass.value) &&
    inputPass.value == pass
  ) {
    document.querySelector(".btn-outline-danger").classList.remove("disabled");
  }
}
