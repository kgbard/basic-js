function encodeLine(str) {
    // Handle empty or non-string input
    if (!str || typeof str !== 'string') return '';

    let encoded = '';
    let count = 1;

    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        // If next character is the same, increment count
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // If count > 1, add count before character
            encoded += count > 1 ? count + str[i] : str[i];
            // Reset count
            count = 1;
        }
    }

    return encoded;
}

module.exports = {
    encodeLine
};