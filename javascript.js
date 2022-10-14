//draw black
function colorFunction(e) {
    e.target.style.backgroundColor = "black";
}

function creategrid(){
    const container = document.querySelector('#gridContainer');
    let j = prompt();
    for (i = 0; i < (j*j); i++){
    let cell = document.createElement('div');
    cell.classList.add('cells');
    cell.addEventListener("mouseover", colorFunction)
    container.appendChild(cell);
    let r = document.querySelector(':root');
    r.style.setProperty('--columnCount', j)
    }
}
creategrid();

function newGrid(){
    const cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.remove();
    });
    creategrid();
}