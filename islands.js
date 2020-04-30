
const assertionTest = (expected, actual) => {
    if (expected === actual) {
        return "Test successful";
    } else {
        return `Testing error: Expected ${expected} but recieved ${actual}`;
    }
};

const calculateNumberOfIslands = grid => {

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