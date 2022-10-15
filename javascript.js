let color = 'black';
function colorFunction(e) {
    e.target.style.backgroundColor = color;
}
function red(){
    return color = 'red';
}
function green(){
    return color = 'green';
}
function yellow(){
    return color = 'yellow';
}
function blue(){
    return color = 'blue';
}
function black(){
    return color = 'black';
}
function white(){
    return color = 'white';
}
const container = document.querySelector('#gridContainer');
for (i = 0; i < (16*16); i++){
    let cell = document.createElement('div');
    cell.classList.add('cells');
    cell.addEventListener("mouseover", colorFunction)
    container.appendChild(cell);
}

function creategrid(){
    const container = document.querySelector('#gridContainer');
    let j = prompt("Enter the number of squares per side for the new grid (limit 100)");
    if (j < 100 && j > 0 && j % 1 == 0){
    for (i = 0; i < (j*j); i++){
    let cell = document.createElement('div');
    cell.classList.add('cells');
    cell.addEventListener("mouseover", colorFunction)
    container.appendChild(cell);
    let r = document.querySelector(':root');
    r.style.setProperty('--columnCount', j)
    }
    }
    else {
        alert("That's....not right. Try it again. Between 0 and 100 this time. Whole numbers only.");
    }
}

function newGrid(){
    const cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.remove();
    });
    creategrid();
}