class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');

        let result = '';
        let keyIndex = 0;

        // Loop through each character of the message
        for (let i = 0; i < message.length; i++) {
            let char = message[i];

            if (/[a-zA-Z]/.test(char)) {
                const isUpper = char === char.toUpperCase();
                const messageCharCode = char.toUpperCase().charCodeAt(0);
                const keyCharCode = key[keyIndex % key.length].toUpperCase().charCodeAt(0);

                // Calculate the shift (Vigenère cipher)
                const shift = keyCharCode - 65; // 'A' is at code 65
                const newCharCode = ((messageCharCode - 65 + shift) % 26) + 65;
                const newChar = String.fromCharCode(newCharCode);

                // Append the encrypted character in the correct case
                result += isUpper ? newChar : newChar.toLowerCase();

                keyIndex++;
            } else {
                // Non-alphabetic characters are added directly without changes
                result += char;
            }
        }

        // Reverse the result if needed
        return this.isDirect ? result : result.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');

        let result = '';
        let keyIndex = 0;

        // Loop through each character of the message
        for (let i = 0; i < message.length; i++) {
            let char = message[i];

            if (/[a-zA-Z]/.test(char)) {
                const isUpper = char === char.toUpperCase();
                const messageCharCode = char.toUpperCase().charCodeAt(0);
                const keyCharCode = key[keyIndex % key.length].toUpperCase().charCodeAt(0);

                // Calculate the shift (Vigenère cipher)
                const shift = keyCharCode - 65; // 'A' is at code 65
                const newCharCode = ((messageCharCode - 65 - shift + 26) % 26) + 65;
                const newChar = String.fromCharCode(newCharCode);

                // Append the decrypted character in the correct case
                result += isUpper ? newChar : newChar.toLowerCase();

                keyIndex++;
            } else {
                // Non-alphabetic characters are added directly without changes
                result += char;
            }
        }

        // Reverse the result if needed
        return this.isDirect ? result : result.split('').reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};