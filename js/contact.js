const form = document.querySelector("#contactform");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
  event.preventDefault();

  if(checklength(name.value, 6) === true){
    nameError.style.display ="none";
  }else {
    nameError.style.display ="block";
  }

  if(validateEmail(email.value) === true){
    emailError.style.display = "none";
  }else {
    emailError.style.display = "block";
  }

  if(checklength(subject.value, 16) === true){
    subjectError.style.display = "none";
  }else {
    subjectError.style.display = "block";
  }

  if(checklength(message.value, 26) === true){
    messageError.style.display = "none";
  }else {
    messageError.style.display = "block";
  }

  console.log()
}

form.addEventListener("submit", validateForm);

function checklength(value,length){
  if(value.trim().length > length) {
    return true;
  }else {
    return false;
  }
}

function validateEmail(email){
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}