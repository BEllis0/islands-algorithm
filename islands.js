const assertionTest = (expected, actual) => {
    if (expected === actual) {
        return `Test successful, islands: ${actual}`;
    } else {
        return `Testing error: Expected ${expected} but recieved ${actual}`;
    }
};

const calculateNumberOfIslands = grid => {
    
    // save island count
    let islandCount = 0;
    
    // loop through grid row
    for (let row = 0; i < grid.length; row++) {
        // loop through each column
        for (let column = 0; column < grid[row].length; column++) {
        // if current column in current row is 1
            if (grid[row][column] === 1) {
                // increment island count
                islandCount++;
                // use depth first search to check neighbors
                depthSearch(grid, row, column);
            }
        }
    }
    // return island count
    return islandCount;
};

const depthSearch = (grid, row, col) => {
    // check boundaries, base case
    if( row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
        return;
    }

    // reference to current value
    let currentValue = grid[row][col];

    // if current value is an island
    if (currentValue === 1) {
        // change value at that index to show it as marked
        grid[row][col] = '#';

        // recursively check neighbors
        depthSearch(grid, row + 1, col);
        depthSearch(grid, row - 1, col);
        depthSearch(grid, row, col + 1);
        depthSearch(grid, row, col - 1);
    }

};

let grid1 = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
];

let grid2 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
]

//actual values
const actual1 = calculateNumberOfIslands(grid1);
const actual2 = calculateNumberOfIslands(grid2);

//expected values
const expected1 = 1;
const expected2 = 3;

//tests
const assertionTest1 = assertionTest(expected1, actual1);
const assertionTest2 = assertionTest(expected2, actual2);

console.log(assertionTest1);