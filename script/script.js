let freeForm = document.querySelector(".free-form");
let listCard = document.querySelector(".list");

let firstInput = document.createElement("input");
let firstSpan = document.createElement("span");

let lastInput = document.createElement("input");
let lastSpan = document.createElement("span");

let emailInput = document.createElement("input");
let emailSpan = document.createElement("span");

let passwordInput = document.createElement("input");
let passwordSpan = document.createElement("span");

let submitBtn = document.createElement("button");

////////////////
firstInput.id = "firstName";
firstInput.className = "inputs";
firstInput.type = "text";
firstInput.placeholder = "First Name";
firstInput.required = true;

firstSpan.id = "firstSpan";
firstSpan.className = "Span-text first-error first-error-hid";
firstSpan.textContent = "4tadan ko'p xarf kiriting";

lastInput.id = "lastName";
lastInput.className = "inputs";
lastInput.type = "text";
lastInput.placeholder = "Last Name";
lastInput.required = true;

lastSpan.id = "lastSpan";
lastSpan.className = "Span-text last-error last-error-hid";
lastSpan.textContent = "4tadan ko'p xarf kiriting";

emailInput.id = "email";
emailInput.className = "inputs";
emailInput.type = "email";
emailInput.placeholder = "Email Address";
emailInput.required = true;

emailSpan.id = "emailSpan";
emailSpan.className = "Span-text email-error email-error-hid";
emailSpan.textContent = "4tadan ko'p xarf kiriting";

passwordInput.id = "password";
passwordInput.className = "inputs";
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.required = true;

passwordSpan.id = "passwordSpan";
passwordSpan.className = "Span-text password-error password-error-hid";
passwordSpan.textContent = "4tadan ko'p xarf kiriting";

submitBtn.className = "submitBtn";
submitBtn.textContent = "CLAIM YOUR FREE TRIAL";

/////////
freeForm.append(firstInput);
freeForm.append(firstSpan);
freeForm.append(lastInput);
freeForm.append(lastSpan);
freeForm.append(emailInput);
freeForm.append(emailSpan);
freeForm.append(passwordInput);
freeForm.append(passwordSpan);
freeForm.append(submitBtn);

//////////////
let firstError = document.querySelector(".first-error");
let lastError = document.querySelector(".last-error");
let emailError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");

//////////////
firstInput.addEventListener("input", function (e) {
  let firstValue = e.target.value;
  if (firstValue.length < 4) {
    firstError.classList.remove("first-error-hid");
  } else if (firstValue.length >= 4) {
    firstError.classList.add("first-error-hid");
  }
});

lastInput.addEventListener("input", function (e) {
  let lastValue = e.target.value;
  if (lastValue.length < 4) {
    lastError.classList.remove("last-error-hid");
  } else if (lastValue.length >= 4) {
    lastError.classList.add("last-error-hid");
  }
});

emailInput.addEventListener("input", function (e) {
  let emailValue = e.target.value;
  if (emailValue.length < 4) {
    emailError.classList.remove("email-error-hid");
  } else if (emailValue.length >= 4) {
    emailError.classList.add("email-error-hid");
  }
});

passwordInput.addEventListener("input", function (e) {
  let passwordValue = e.target.value;
  if (passwordValue.length < 4) {
    passwordError.classList.remove("password-error-hid");
  } else if (passwordValue.length >= 4) {
    passwordError.classList.add("password-error-hid");
  }
});

////////////////
let clients = [];

function handleSubmit(e) {
  e.preventDefault();

  let client = {
    firstName: firstInput.value,
    lastName: lastInput.value,
    mail: emailInput.value,
    password: passwordInput.valuet,
  };

  clients.push(client);

  firstInput.value = "";
  lastInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  console.log(clients);

  renderClients();
}

freeForm.addEventListener("submit", handleSubmit);

function renderClients() {
  listCard.innerHTML = null;
  for (let i = 0; i < clients.length; i++) {
    let item = document.createElement("li");
    item.className = "item";
    let fName = document.createElement("p");
    fName.className = "fName";
    fName.textContent = clients[i].firstName;
    item.append(fName);

    let LName = document.createElement("p");
    LName.className = "LName";
    LName.textContent = clients[i].lastName;
    item.append(LName);

    let userEmail = document.createElement("span");
    userEmail.className = "userEmail";
    userEmail.textContent = clients[i].mail;
    item.append(userEmail);

    listCard.append(item);
  }
}
