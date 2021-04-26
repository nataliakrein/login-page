const btn = document.querySelector('#button');
const help = document.querySelector('.help');

const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const inputs = document.querySelectorAll('.input');

btn.addEventListener("click", () => validateUser());

function validateUser() {
  const userEmail = document.querySelector('#email');
  const emailCorrect = userEmail.value;
  const userPassword = document.querySelector('#password');
  const passwordCorrect = userPassword.value;

  if (emailCorrect != emailCorrect.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    const inputEmail = document.querySelector('#inputEmail');
    inputEmail.classList.add('input--error');
    return;
  } 
  else if (passwordCorrect != passwordCorrect.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/)) {
    const inputPassword = document.querySelector('#inputPassword');
    inputPassword.classList.add('input--error');
    return;
  }
  emailCorrect.value = "";
  passwordCorrect.value = "";
  alert("Login com sucesso");
}

inputs.forEach((e) => e.addEventListener('click', () => clearError()));

function clearError() {
  const errorClass = document.querySelectorAll('.input');
  errorClass.forEach((e) => {
      e.classList.remove('input--error');
  });
}

help.addEventListener("click", () =>
  alert("Sua senha deve conter no mínimo 5 caracteres incluindo UMA letra maiúscula, UMA letra minúscula e UM número. Não pode ter caracteres especiais")
);