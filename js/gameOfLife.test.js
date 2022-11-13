import { createGrid } from './gameOfLife';

describe('Given createGrid function', () => {
    test('Return a grid with all 0', () => {
        const grid = createGrid(3, 3);
        const expected = 0;
        const result = grid[0][8];
        expect(result).toEqual(expected);
    });
});
