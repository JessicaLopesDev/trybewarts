const inputEmail = document.querySelector('#input-email');
const inputSenha = document.querySelector('#input-senha');
const buttonEntrar = document.querySelector('#form-button');

function handleAlert (event) {
    event.preventDefault()
    if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert('Email ou senha inválidos.')
    }
}
buttonEntrar.addEventListener('click', handleAlert)