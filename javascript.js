const container = document.querySelector('#gridContainer');

function colorFunction(e) {
    e.target.style.backgroundColor = "black";
    }
//create grid
for (i = 1; i < [16*16+1]; i++){
let cell = document.createElement('div');
cell.classList.add('cells');
cell.addEventListener("mouseover", colorFunction)
container.appendChild(cell);
}

