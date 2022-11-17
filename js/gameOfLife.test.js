import {
    getRandomInt,
    createGrid,
    GoT,
    countNeighbors,
    mirrorArray,
} from './gameOfLife';

describe('Given getRandomInt function', () => {
    test('Get a integer random number between 0 and 1', () => {
        const result = getRandomInt(13);
        const expected = result >= 1 || result <= 13;
        expect(expected).toBe(true);
    });
});

describe('Given createGrid function', () => {
    test('Return a grid with all the boxes with value 0', () => {
        const grid = createGrid(3, 3);
        const expected = undefined;
        const result = grid[0][7];
        expect(result).toEqual(expected);
    });
    test('Return a grid with length 7', () => {
        const result = 7;
        const expected = createGrid(7, 7).length;
        expect(expected).toEqual(result);
    });
});

describe('Given GoT function', () => {
    const grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
    ];
    test('Return a grid with the same length (length 9x9), result should be true', () => {
        const result = grid.length;
        const expected = GoT().length === result;
        expect(expected).toBe(true);
    });
    test.each(grid)(
        'Return a grid includes the number 1, result should be true',
        () => {
            const result = grid.includes(1);
            const expected = GoT().includes(1);
            expect(expected).toBe(result);
        }
    );
});

describe('Given countNeighbor function', () => {
    test('When it receives its coordinates it checks for dead neighbors', () => {
        const grid = [
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        const row = 7;
        const colum = 5;
        const result = countNeighbors(grid, row, colum);
        expect(result).toBe(0);
    });
    test('When it receives its coordinates it checks the living neighbors', () => {
        const grid = [
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        const row = 5;
        const colum = 5;
        const result = countNeighbors(grid, row, colum);
        expect(result).toBe(3);
    });
});

describe('Given mirrorArray function', () => {
    const grid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const row = 7;
    const colum = 7;
    test('The result given the grid, the numbers 1 would change from vertical to horizontal view', () => {
        const result = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
        const expected = mirrorArray(grid, row, colum);
        expect(expected).toEqual(result);
    });
});
