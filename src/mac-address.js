function isMAC48Address(inputString) {
    // Regular expression to match MAC-48 address pattern
    const regex = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;

    // Test if the input string matches the MAC-48 address pattern
    return regex.test(inputString);
}

module.exports = {
    isMAC48Address
};