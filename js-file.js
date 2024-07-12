



for (i=0; i <= 16; i++) {
    const container = document.querySelector('div');
    container.style.display = 'flex'
    let divGrid = document.createElement('div');
    divGrid.style.cssText = 'height: 40px; width: 40px; border: 1px solid black;' ;
    container.appendChild(divGrid); 
}