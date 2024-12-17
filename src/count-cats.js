function countCats(matrix) {
    // Check if matrix is valid and is an array of arrays
    if (!matrix || !Array.isArray(matrix) || matrix.length === 0) return 0;

    // Count cats by finding "^^" in the matrix
    return matrix.reduce((total, row) => {
        // Ensure row is an array and count "^^" occurrences
        return total + (Array.isArray(row) ? row.filter(item => item === '^^').length : 0);
    }, 0);
}

module.exports = {
    countCats
};