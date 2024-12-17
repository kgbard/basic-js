function minesweeper(matrix) {
    // Get the number of rows and columns in the matrix
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create the result matrix initialized with zeros
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Directions for the 8 possible neighbors (top-left, top, top-right, left, right, bottom-left, bottom, bottom-right)
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1], // top-left, top, top-right
        [0, -1],
        [0, 1], // left, right
        [1, -1],
        [1, 0],
        [1, 1] // bottom-left, bottom, bottom-right
    ];

    // Iterate over the matrix
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // If the current cell contains a mine, set the corresponding result cell to -1 (or any other value representing a mine)
            if (matrix[row][col] === true) {
                result[row][col] = -1; // Mine is represented as -1
            } else {
                // For non-mine cells, count the mines in the neighboring cells
                let mineCount = 0;

                // Check all 8 possible neighbors
                for (let [dx, dy] of directions) {
                    const newRow = row + dx;
                    const newCol = col + dy;

                    // Check if the neighbor is within bounds
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                        if (matrix[newRow][newCol] === true) {
                            mineCount++;
                        }
                    }
                }

                // Set the result matrix value to the mine count
                result[row][col] = mineCount;
            }
        }
    }

    return result;
}

module.exports = {
    minesweeper
};