class DepthCalculator {
    calculateDepth(arr) {
        // Base case: if the array is not an array (flat element), depth is 1
        if (!Array.isArray(arr)) {
            return 0; // A non-array element does not contribute to the depth
        }

        // Recursive case: calculate depth for each element in the array
        let depth = 1; // Start with the current level (1)

        for (let i = 0; i < arr.length; i++) {
            // Recursively calculate depth for sub-arrays
            if (Array.isArray(arr[i])) {
                depth = Math.max(depth, 1 + this.calculateDepth(arr[i])); // Add 1 for the current level
            }
        }

        return depth;
    }
}

module.exports = {
    DepthCalculator
};