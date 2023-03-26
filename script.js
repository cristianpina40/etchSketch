

const blckButton = document.querySelector('#blackButton');
const colorButton = document.querySelector('#colorButton');
const clearButton = document.querySelector('#clear');

const oneSix = document.querySelector('#oneSix');
const threeTwo = document.querySelector('#threeTwo');
const sixFour = document.querySelector('#sixFour');

let rows = 16;
let cols = 16;

let colorStyle = 0;

const container = document.getElementById("container");


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function myFunc(){

  if(colorStyle == 0){
    this.style.backgroundColor = 'black';
  }
   else if(colorStyle == 1){
    this.style.backgroundColor = getRandomColor();
  }
  
  
}




function reset() {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", myFunc);
    

  };
};

makeRows(rows, cols);


blckButton.addEventListener('click', () =>{
  colorStyle = 0;
  reset();
  makeRows(rows, cols);
});

colorButton.addEventListener('click', () =>{
  colorStyle = 1;
  reset();
  makeRows(rows, cols);
});




clearButton.addEventListener('click', () =>{
  reset();
  makeRows(rows, cols);
    
});




oneSix.addEventListener('click', () =>{
  rows = 16;
  cols = 16;
  reset();
  makeRows(rows, cols);
});

threeTwo.addEventListener('click', () =>{
  rows = 32;
  cols = 32;
  reset();
  makeRows(rows, cols);
  
});

sixFour.addEventListener('click', () =>{
  rows = 64;
  cols = 64;
  reset();
  makeRows(rows, cols);
});







     

