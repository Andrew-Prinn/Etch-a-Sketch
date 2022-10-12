const container = document.querySelector('#container');

for (i = 1; i < 17; i++){
const content = document.createElement('div');
content.classList.add('content');
content.textContent = [i];

container.appendChild(content);
}