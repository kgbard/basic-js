function calculateHanoi(disksNumber, turnsSpeed) {
    // Calculate total turns (2^n - 1)
    const turns = Math.pow(2, disksNumber) - 1;

    // Calculate seconds (turns * 3600 / turnsSpeed)
    const seconds = Math.floor(turns * 3600 / turnsSpeed);

    return { turns, seconds };
}

module.exports = {
    calculateHanoi
};