function renameFiles(names) {
    const fileNameMap = new Map();
    const result = [];

    for (const name of names) {
        let newName = name;
        let counter = 1;

        // If name exists, modify it
        while (fileNameMap.has(newName)) {
            newName = `${name}(${counter})`;
            counter++;
        }

        // Add to map and result
        fileNameMap.set(newName, true);
        result.push(newName);
    }

    return result;
}

module.exports = {
    renameFiles
};