export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function createGrid(columns, rows) {
    const array = new Array(columns);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array;
}

let grid;
const columns = 9;
const rows = 9;

export function GoT() {
    grid = createGrid(columns, rows);
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = getRandomInt(2);
        }
    }
    return grid;
}

export function countNeighbors(array, i, j) {
    let contLiveCells = 0;

    if (i !== 0) {
        contLiveCells += array[i - 1][j + 1];
        contLiveCells += array[i - 1][j - 1];
        contLiveCells += array[i - 1][j];
    }
    if (i !== 1) {
        contLiveCells += array[i][j + 1];
        contLiveCells += array[i][j - 1];
    }
    if (i + 1 !== array.length) {
        contLiveCells += array[i + 1][j + 1];
        contLiveCells += array[i + 1][j - 1];
        contLiveCells += array[i + 1][j];
    }
    return contLiveCells;
}

export function mirrorArray(array, columns, rows) {
    const secondArray = [].concat(createGrid(columns, rows));
    // grid = createGrid(columns, rows);
    // const secondArray = [...grid];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === 0) {
                secondArray[i][j] = countNeighbors(array, i, j) === 3 ? 1 : 0;
            } else {
                secondArray[i][j] =
                    countNeighbors(array, i, j) > 1 &&
                    countNeighbors(array, i, j) < 4
                        ? 1
                        : 0;
            }
        }
    }
    return secondArray;
}

const gameOfLife = () => {
    const outputGrid = GoT();
    console.table(outputGrid);
};
gameOfLife();

// //Comentado por async (test con jest)
// export function gameOfLife() {
//     setInterval(() => {
//         const outputGrid = GoT();
//         console.table(outputGrid);
//     }, 1000);
// }
