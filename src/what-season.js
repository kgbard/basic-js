function getSeason(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date!');
    }

    const month = date.getMonth(); // getMonth() returns 0-11 (0 = January, 11 = December)

    // Determine the season based on the month
    if (month === 11 || month <= 1) {
        return 'winter';
    } else if (month >= 2 && month <= 4) {
        return 'spring';
    } else if (month >= 5 && month <= 7) {
        return 'summer';
    } else {
        return 'autumn';
    }
}

module.exports = {
    getSeason
};