const userInput = document.querySelector('button')

userInput.addEventListener('click', () => {
    let check = document.getElementById('check')
    if (check) {
        while (check.firstChild) {
            check.removeChild(check.firstChild)
        }
    } else return {

}})

userInput.addEventListener('click', () => {
   
    let gridSize = prompt('What grid size would you like?')
    getGridSize(gridSize)
    colorGrids()
 })


function getGridSize(gridSize) {
for (i=0; i < gridSize; i++) {
    const container = document.querySelector('.container');
    container.id = 'check'
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.maxWidth = '690px'
    let divGrid = document.createElement('div');
    divGrid.classList.add('grid')
    divGrid.style.cssText = 'height: 40px; width: 40px; border: 1px solid black;' ;
    container.appendChild(divGrid); 
}}

function colorGrids() {
const divGrids = document.querySelectorAll('.grid')
divGrids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'green'
    })
})}









