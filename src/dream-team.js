function createDreamTeam(members) {
    // Validate input is an array
    if (!Array.isArray(members)) return false;

    // Filter and transform valid names
    const teamLetters = members
        .filter(member => typeof member === 'string')
        .map(member => member.trim()[0].toUpperCase())
        .sort();

    // Return false if no valid names, otherwise join letters
    return teamLetters.length > 0 ? teamLetters.join('') : false;
}

module.exports = {
    createDreamTeam
};