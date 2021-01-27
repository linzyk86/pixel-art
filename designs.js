
//variables//
const colorSelected = document.getElementById("colorPicker");
const grid = document.getElementById("pixelCanvas");
const submitSize = document.getElementById("submit");



submitSize.addEventListener("click", function(evt) {
  grid.innerHTML='';
  makeGrid();
  evt.preventDefault();
});

$('body').on('click', 'td', function(){
  let color=colorSelected.value;
  $(this).css('background-color', color);
});
 
  

function makeGrid(){
  const height = document.getElementById("inputHeight");
	const width = document.getElementById("inputWidth");
  for (let m = 1; m <= height.value; m++) {
    let gridHeight = document.createElement("tr");
    grid.appendChild(gridHeight);
    	for (let n = 1; n <= width.value; n++) {
      let gridWidth = document.createElement("td");
      grid.appendChild(gridWidth);
      gridHeight.appendChild(gridWidth);
    }
  } 
}
  colorSelected.addEventListener('click', function(evt){
    colors(event.value);
    evt.preventDefault;
  });

function colors() { 
	let box= document.getElementsByTagName('td');
  for(let i=0; i<=box.length; i++){
    box[i].addEventListener('click',function(evt){
 evt.target.style.backgroundColor=colorSelected.value;
    });
}
}
