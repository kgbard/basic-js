function transform(arr) {
    // Check if the input is a valid array
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const result = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current === '--double-next') {
            // Double the next element if exists
            if (i + 1 < arr.length) {
                result.push(arr[i + 1]);
            }
        } else if (current === '--discard-prev') {
            // Discard the previous element if exists
            if (i - 1 >= 0 && arr[i - 1] !== '--discard-prev' && arr[i - 1] !== '--double-next') {
                result.pop();
            }
        } else {
            // For other elements, add them to the result
            result.push(current);
        }
    }

    return result;
}

module.exports = {
    transform
};