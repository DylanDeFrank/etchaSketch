for (i=0; i <= 255; i++) {
    const container = document.querySelector('.container');
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.maxWidth = '690px'
    let divGrid = document.createElement('div');
    divGrid.classList.add('grid')
    divGrid.style.cssText = 'height: 40px; width: 40px; border: 1px solid black;' ;
    container.appendChild(divGrid); 
}
const divGrids = document.querySelectorAll('.grid')

divGrids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'green'
    })

})

