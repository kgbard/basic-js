function getMatrixElementsSum(matrix) {
    let sum = 0;
    const n = matrix[0].length; // Number of columns

    // Loop through each column
    for (let col = 0; col < n; col++) {
        // Loop through each row
        for (let row = 0; row < matrix.length; row++) {
            // If there's a 0 in the current cell, stop summing for this column
            if (matrix[row][col] === 0) {
                break; // This column is blocked from this row downwards
            }
            // Otherwise, add the current cell's value to the sum
            sum += matrix[row][col];
        }
    }

    return sum;
}

module.exports = {
    getMatrixElementsSum
};