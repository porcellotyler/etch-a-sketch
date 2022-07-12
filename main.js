for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.classList.add("row");
    for (let i = 0; i < 4; i++) {
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