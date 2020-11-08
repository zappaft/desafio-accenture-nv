var perLetter = true;

var lastNumberClicked = -1
var timesNumberClicked = 1

var firstTime = true;
var counterOn = false;
var counterObj;
var counterTime = 0.4;

var codeToTranslate = '';

const url = 'http://localhost:3000/traduzir'

function numberClick(number) {
  if (lastNumberClicked === number) {
    timesNumberClicked += 1;
    clearTimeout(counterObj);
  } else {
    if (firstTime) {
      firstTime = true;
    } else {
      clearTimeout(counterObj);
    }
    timesNumberClicked = 1;
    lastNumberClicked = number;
  }
  counterObj = setTimeout(countdown, counterTime * 1000);
}

function countdown() {
  codeToTranslate += lastNumberClicked.toString().repeat(timesNumberClicked) + ' ';
  console.log(codeToTranslate);
  timesNumberClicked = 0;
  if (perLetter) sendCode();
}


function clearCode() {
  if (perLetter) {
    codeToTranslate = codeToTranslate.slice(0, -1);
    codeToTranslate = codeToTranslate.slice(0, codeToTranslate.lastIndexOf(' ') + 1);
  } else codeToTranslate = '';
  console.log(codeToTranslate);
  sendCode();
  lastNumberClicked = -1;
  timesNumberClicked = 1;
  clearTimeout(counterObj);
}

async function sendCode() {
  await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'codigo': codeToTranslate })
  }).then(resp => {
    resp.json().then(({ palavra }) => {
      console.log(palavra);
      document.getElementById('palavra').innerHTML = palavra;
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}
