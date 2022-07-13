let gridSize;

function getGridSize() {
    let gridSize = prompt("Choose the number of squares per side", 0);
    
    if (gridSize === null || gridSize === undefined || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a number greater than 0 and less than 100");
        gridSize = 0 //gridSize still passes to the grid setup with numbers greater than 100, ensuring here that it doesnt overwhelm a browser
    } else {
        return makeGrid(gridSize)
    };
};

document.getElementById('resetBtn').addEventListener('click', () => {window.location = window.location});

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        forRows.appendChild(row);
        row.classList.add("row");
        for (let i = 0; i < gridSize; i++) {
            var gridDivs = document.createElement('div');
            gridDivs.classList.add("gridDivs");    
            row.appendChild(gridDivs);   
        }
    };
    
    const boxes = document.querySelectorAll('.gridDivs');
    boxes.forEach(gridDivs => {
        gridDivs.addEventListener('mouseover', function() {
        gridDivs.classList.add("hit"); })
        }
    );
};
// i believe i need to restructure the way im creating the grid
//the flexbox on #forRows i beleive is causing trouble for me setting a max width and height for the grid no matter the number of divs inside