// Conway's game of life
// Reglas célula viva:
//    - Si tiene más de 3 células contiguas vivas, (cont > 3) muere por sobrepoblación.
//    - Si tiene menos de 2 células contiguas vivas, (cont < 2) muere por soledad.
//    - Si tiene 2 o 3 células contiguas vivas, sobrevive.

// Regla célula muerta:
//    - Permanece muerta hasta que tiene exactamente células contiguas vivas, momento en el que nace.

//Create grid size
export function createGrid() {
    const grid = [];
    const columns = 9;
    const rows = 9;
    for (let i = 0; i < rows; i++) {
        grid.push([]);
        for (let j = 0; j < columns; j++) {
            grid[i].push(0);
        }
    }
    return grid;
}

//Create second grid
//Create method checkAliveNextCell

setInterval(() => {
    //!Modificación de array, ahora esta imprimiendo solo la matriz "madre"  -->13/11
    //Print table
    const grid = createGrid();
    console.table(grid);
    console.log('-----------------------------------------------');
}, 1000);
