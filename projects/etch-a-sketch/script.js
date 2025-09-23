const controls = document.getElementById("controls");
const gridContainer = document.getElementById("gridContainer");
let isMouseDown = false;


function createControlButtons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container"); // for styling
    controls.appendChild(buttonContainer);

    const resizeButton = document.createElement("button");
    resizeButton.textContent = "Resize Grid";
    resizeButton.classList.add("control-button");
    buttonContainer.appendChild(resizeButton);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.classList.add("control-button");
    buttonContainer.appendChild(resetButton);

    // Add events
    resizeButton.addEventListener("click", () => {
        clearGrid();
        userGridSize = getUserGridSize();
        createGrid(userGridSize);
    });

    resetButton.addEventListener("click", () => {
        clearGrid();
        createGrid(userGridSize);
    });
}



function randomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

function getUserGridSize() {
    let size = Number(prompt("Choose a grid size between 1 and 100"));
    if (size < 1 || size > 100 || isNaN(size)) size = 16;
    return size;
}

function createGrid(size) {
    const cellSize = 80 / size;
    gridContainer.style.backgroundColor = randomColor();

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}vmin`;
        cell.style.height = `${cellSize}vmin`;
        gridContainer.appendChild(cell);
    }
    addCellInteraction();
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resizeGrid() {
    createControlButtons();
    resizeButton.addEventListener("click", () => {
        clearGrid();
        userGridSize = getUserGridSize(); // update global size
        createGrid(userGridSize);
    });
}

function resetGrid() {
    createControlButtons();
    resetButton.addEventListener("click", () => {
        clearGrid();
        createGrid(userGridSize); // uses current grid size
    });
}

function addCellInteraction() {
    const cells = document.querySelectorAll("#gridContainer .cell");

    document.body.addEventListener("mousedown", () => isMouseDown = true);
    document.body.addEventListener("mouseup", () => isMouseDown = false);

    cells.forEach(cell => {
        cell.addEventListener("mousedown", () => {
            cell.style.backgroundColor = randomColor();
        });
        cell.addEventListener("mouseover", () => {
            if (isMouseDown) cell.style.backgroundColor = randomColor();
        });
    });
}

// Initialize
let userGridSize = getUserGridSize();
createGrid(userGridSize);
resizeGrid();
resetGrid();
