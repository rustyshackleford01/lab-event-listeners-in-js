
const butt = document.getElementById('changeColorButton');

function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightgreen';
  };


butt.addEventListener('click', changeBackgroundColor);

const butts = document.getElementById('resetColorButton');

function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
};

butts.addEventListener('dblclick', resetBackgroundColor);





const displayKey = document.addEventListener('keydown', displayKeyPress)



function displayKeyPress(textInput) {
}

const textInput = document.getElementById('textInput');

const keyPressDisplay = document.getElementById('keyPressDisplay');

const id = document.getElementById('textInputDisplay')
function displayUserInput() {
  id.textContent = textInput.value;
}


addEventListener('input', displayUserInput)

const someElement = document.querySelector("body");



someElement.addEventListener('mouseover', () => {
  someElement.style.backgroundColor = 'pink';
});

