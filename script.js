const inputEmail = document.querySelector('#input-email-header');
const inputSenha = document.querySelector('#input-senha');
const buttonEntrar = document.querySelector('#form-button');
const inputInfo = document.querySelector('#agreement');
const textareaInput = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function handleSubmit(event) {
  const submitButton = document.querySelector('#submit-btn');
  const element = event.target;

  submitButton.disabled = !element.checked;
}

function handleAlert(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function handleTextareaChange(event) {
  counter.innerHTML = 500;
  counter.innerHTML -= event.target.value.length;
}

buttonEntrar.addEventListener('click', handleAlert);
inputInfo.addEventListener('click', handleSubmit);
textareaInput.addEventListener('keyup', handleTextareaChange);
