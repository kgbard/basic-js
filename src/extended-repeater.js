function repeater(str, options) {
    // Default options
    const {
        repeatTimes = 1,
            separator = '+',
            addition = '',
            additionRepeatTimes = 1,
            additionSeparator = '|'
    } = options || {};

    // Convert input to string
    const mainStr = String(str);
    const additionStr = String(addition);

    // Create addition part
    const additionPart = new Array(additionRepeatTimes)
        .fill(additionStr)
        .join(additionSeparator);

    // Create full repeated string
    const fullRepeatedStr = mainStr + additionPart;

    // Create final result
    return new Array(repeatTimes)
        .fill(fullRepeatedStr)
        .join(separator);
}

module.exports = {
    repeater
};