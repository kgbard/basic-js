function getSumOfDigits(n) {
    // Continue summing digits until the number is a single digit
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
}

module.exports = {
    getSumOfDigits
};