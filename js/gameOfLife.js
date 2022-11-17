// Conway's game of life
// Reglas célula viva:
//    - Si tiene más de 3 células contiguas vivas, (cont > 3) muere por sobrepoblación.
//    - Si tiene menos de 2 células contiguas vivas, (cont < 2) muere por soledad.
//    - Si tiene 2 o 3 células contiguas vivas, sobrevive.

// Regla célula muerta:
//    - Permanece muerta hasta que tiene exactamente células contiguas vivas, momento en el que nace.

//Calculamos un numero random entero entre el valor asignado al max
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Create grid size
export function createGrid(columns, rows) {
    //empty grid
    const array = new Array(columns); // eje x
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows); // eje y
    }
    return array; //devolvemos matriz y evitamos 0 -> undefined
}

//Valores por defecto dimension grid
let grid;
const columns = 9;
const rows = 9;

//Funcion principal Conway's game of life
export function GoT() {
    grid = createGrid(columns, rows); //dimension grid
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            //recorremos y rellenamos matriz con valores random de 0-1
            grid[i][j] = getRandomInt(2);
        }
    }
    return grid;
}

//Count live neighbors (value 1)
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
    const secondArray = [].concat(createGrid(columns, rows)); //concatena createGrid dentro del array vacio secondArray
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            //celulas muertas
            if (array[i][j] === 0) {
                //Num secondArray = cont de celulas vecinas es 3 (true 1/false 0)
                secondArray[i][j] = countNeighbors(array, i, j) === 3 ? 1 : 0;
            } else {
                //celulas vivas
                //Num secondArray = cont de celulas vecinas esta entre 1-4 (true 1/false 0)
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

//Comentado por async (test con jest)
// const gameOfLife = () => {
//     setInterval(() => {
//         const outputGrid = GoT();
//         console.table(outputGrid);
//     }, 1000);
// };
// gameOfLife();
