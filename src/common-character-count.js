function getCommonCharacterCount(s1, s2) {
    // Create character count maps for both strings
    const charCount1 = {};
    const charCount2 = {};

    // Count characters in first string
    for (let char of s1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count characters in second string
    for (let char of s2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Calculate common character count
    let commonCount = 0;
    for (let char in charCount1) {
        if (charCount2[char]) {
            // Take the minimum count of the character between the two strings
            commonCount += Math.min(charCount1[char], charCount2[char]);
        }
    }

    return commonCount;
}

module.exports = {
    getCommonCharacterCount
};