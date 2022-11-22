const inputEmail = document.querySelector('#input-email-header');
const inputSenha = document.querySelector('#input-senha');
const buttonEntrar = document.querySelector('#form-button');
const inputInfo = document.querySelector('#agreement');
const textareaInput = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const formContainer = document.querySelector('#form-container');
const infoContainer = document.querySelector('#form-data');
const listData = document.querySelectorAll('li');

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

function getNameAndHouseValues(event) {
  const elements = event.target;
  const houses = elements.house.options;
  const selectedHouse = houses[houses.selectedIndex].value;
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].name === 'name') {
      listData[0].innerHTML = `Nome: ${elements[index].value} ${elements['input-lastname'].value}`;
    }
    if (elements[index].name === 'house') {
      listData[2].innerHTML = `Casa: ${selectedHouse}`;
    }
  }
}

function getEmailAndTextareaValues(event) {
  const elements = event.target;
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].name === 'email') {
      listData[1].innerHTML = `Email: ${elements[index].value}`;
    }
    if (elements[index].name === 'textarea') {
      listData[6].innerHTML = `Observações: ${elements[index].value}`;
    }
  }
}

function getTechValues(event) {
  const elements = event.target;
  const result = [];
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].name === 'subject' && elements[index].checked) {
      result.push(elements[index].value);
    }
  }
  listData[4].innerHTML = `Matérias: ${result.join(', ')}`;
}

function getRadioValues(event, index) {
  if (event[index].name === 'rate') {
    listData[5].innerHTML = `Avaliação: ${event[index].value}`;
  }
  if (event[index].name === 'family') {
    listData[3].innerHTML = `Família: ${event[index].value}`;
  }
}

function handleSumitForm(event) {
  const elements = event.target;
  event.preventDefault();
  formContainer.style.display = 'none';
  infoContainer.style.display = 'flex';

  getEmailAndTextareaValues(event);
  getNameAndHouseValues(event);
  getTechValues(event);

  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].checked) {
      getRadioValues(elements, index);
    }
  }
}

buttonEntrar.addEventListener('click', handleAlert);
inputInfo.addEventListener('click', handleSubmit);
textareaInput.addEventListener('keyup', handleTextareaChange);
form.onsubmit = handleSumitForm;
