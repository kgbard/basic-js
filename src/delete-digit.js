function deleteDigit(n) {
    // Convert number to string for easy manipulation
    const numStr = n.toString();

    // Track the maximum number after deleting a digit
    let maxNum = 0;

    // Try deleting each digit and compare results
    for (let i = 0; i < numStr.length; i++) {
        // Create new number by removing digit at index i
        const newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
        const newNum = parseInt(newNumStr);

        // Update max if new number is larger
        maxNum = Math.max(maxNum, newNum);
    }

    return maxNum;
}

module.exports = {
    deleteDigit
};