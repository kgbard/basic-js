function sortByHeight(arr) {
    // Step 1: Extract all non -1 values
    const sortedHeights = arr.filter(value => value !== -1).sort((a, b) => a - b);

    // Step 2: Rebuild the array, putting back -1 where necessary
    return arr.map(value => (value === -1 ? -1 : sortedHeights.shift()));
}

module.exports = {
    sortByHeight
};