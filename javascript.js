const container = document.querySelector('#gridContainer');

for (i = 1; i < 257; i++){
const cells = document.createElement('div');
cells.classList.add('cells');
//cells.textContent = [i];

container.appendChild(cells);
}