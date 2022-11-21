const inputEmail = document.querySelector('#input-email-header');
const inputSenha = document.querySelector('#input-senha');
const buttonEntrar = document.querySelector('#form-button');
const inputInfo = document.querySelector('#agreement');
const textareaInput = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const formContainer = document.querySelector('#form-container');
const infoContainer = document.querySelector('#form-data');

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
// const evaluationForm = document.querySelector('#evaluation-form').elements;
// document.querySelector('#name-data').innerHTML = `Nome: ${evaluationForm['input-name'].value} 
//   ${evaluationForm['input-lastname'].value}`;
// document.querySelector('#email-data').innerHTML = `Email: ${evaluationForm['input-email'].value}`;
// const houses = document.querySelector('#house');
// const selectedHouse = houses.options[houses.selectedIndex].value;
// document.querySelector('#house-data').innerHTML = `Casa: ${selectedHouse}`;

// const formFamily = document.querySelectorAll('input[name="family"]');
// let result = '';
// for (let index = 0; index < formFamily.length; index += 1) {
//   if (formFamily[index].checked) {
//     result = formFamily[index].value;
//   }
// }
// document.querySelector('#family-data').innerHTML = `Casa: ${result}`;

// const formTech = document.querySelectorAll('input[class="subject"]');
// // console.log(formTech);
// let result = '';
// for (let index = 0; index < formTech.length; index += 1) {
//   if (formTech[index].checked) {
//     result += `${formTech[index].value}, `;
//   }
// }
// document.querySelector('#tech-data').innerHTML = `Matérias: ${result}`;

function handleSumitForm(event) {
  event.preventDefault();
  formContainer.style.display = 'none';
  infoContainer.style.display = 'flex';

  const formRate = document.querySelectorAll('input[name="rate"]');
  let result = '';
  for (let index = 0; index < formRate.length; index += 1) {
    if (formRate[index].checked) {
      result = formRate[index].value;
    }
  }
  document.querySelector('#family-data').innerHTML = `Avaliação: ${result}`;
}


// const dataFamily = ;
// dataFamily.innerText = ;

buttonEntrar.addEventListener('click', handleAlert);
inputInfo.addEventListener('click', handleSubmit);
textareaInput.addEventListener('keyup', handleTextareaChange);
form.onsubmit = handleSumitForm;
