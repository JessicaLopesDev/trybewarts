const inputEmail = document.querySelector('#input-email-header');
const inputSenha = document.querySelector('#input-senha');
const buttonEntrar = document.querySelector('#form-button');
const inputInfo = document.querySelector('#agreement');

function handleSubmit(event) {
  const submitButton = document.querySelector('#submit-btn');
  const element = event.target;
  if (element.checked) {
    submitButton.disabled = false;
  }
}

function handleAlert(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', handleAlert);
inputInfo.addEventListener('click', handleSubmit);
