
const container = document.querySelector('div.container');
container.style.cssText = `grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr)`;
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('square')
  container.appendChild(div);
};

console.log(container);
container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.square')) {
    e.target.classList.add('filled')
  }
})

function reset() {
  while (container.firstChild) {
    container.removeChild(container.lastChild)
  }
}

function newGrid() {
  let gridsize = prompt("Please enter the grid size up 100");
  if (gridsize > 100) {
    return alert("ERROR! Maximum grid size is 100")
  }
  reset()
  let totalGrid = gridsize * gridsize 
  
  container.style.cssText = `grid: repeat(${gridsize}, 1fr) / repeat(${gridsize}, 1fr)`
  for (let i = 0; i < totalGrid; i++) {
    const div = document.createElement('div');;
    div.classList.add('square')
    container.appendChild(div);
  }
} 






