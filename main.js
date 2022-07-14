let gridSize;

function getGridSize() {
    let gridSize = prompt("Choose the number of squares per side", 0);
    
    if (gridSize === null || gridSize === undefined || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a number greater than 0 and less than 100");
        gridSize = 0 //gridSize still passes to makeGrid with numbers greater than 100, ensuring here that the limit is applied
    } else {
        return makeGrid(gridSize)
    };
};

//Unsure if this is inefficient, I imagine I could remove the hit class added in the mouseover, however this was concise and worked for this context.
document.getElementById('resetBtn').addEventListener('click', () => {window.location = window.location});

function makeGrid(gridSize) {
    
    for (let rowNum = 0; rowNum < gridSize; rowNum++) {
        
        const row = document.createElement('div');
        
        forRows.appendChild(row);
        row.classList.add("row");

        for (let i = 0; i < gridSize; i++) {
            var gridDivs = document.createElement('div');
            gridDivs.classList.add("gridDivs");

            //After some trouble determining how to set a size for my grid, the below code works to fill the specified size evenly.
            gridDivs.style.width = 600/gridSize + 'px';
            gridDivs.style.height = 600/gridSize + 'px';  

            row.appendChild(gridDivs);   
        }
    };
    
    const boxes = document.querySelectorAll('.gridDivs');

    boxes.forEach(gridDivs => {
        gridDivs.addEventListener('mouseover', function() {
            gridDivs.classList.add("hit"); 
            })
        }
    );
};