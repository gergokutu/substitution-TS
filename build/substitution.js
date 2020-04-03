"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usageInfo = `
!! Usage: node substitution.js <key> !!

***************************************
* Key should be 26 characters long!   *
* Key should consist of only letters! *
* Key should have unique characters!  *
* The key is case insensitive.        *
***************************************
`;
const { argv, exit } = process;
const len = argv.length;
const key = argv[2];
// validate if 1 CLI arg is passed
// actually argv is not necessary as an argument >
// when the function does not find it inside the block >
// search it outside
// like with exit()...
exports.validateCLIArg = (len, info) => {
    if (len !== 3) {
        console.log(info);
        exit(1);
    }
};
exports.validate_key = (key) => {
    if (key.length !== 26) {
        console.log("Key should be 26 characters long!");
        exit(1);
    }
    for (let i = 0; i < key.length; i++) {
        const upperCaseKey = key.toUpperCase();
        if (upperCaseKey.charCodeAt(i) < 65 || upperCaseKey.charCodeAt(i) > 90) {
            console.log("Key should consist of only letters!");
            exit(1);
        }
    }
    for (let i = 0; i < key.length; i++) {
        for (let j = 1; j < key.length; j++) {
            const upperCaseKey = key.toUpperCase();
            if ((upperCaseKey[i] === upperCaseKey[j]) && i !== j) {
                console.log("Key should have unique characters!");
                exit(1);
            }
        }
    }
};
exports.validateCLIArg(len, usageInfo);
exports.validate_key(key);
console.log("Success");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const print_ciphertext = (plaintext, key) => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZuvwxyz";
    const plain_length = plaintext.length;
    const upperCasePlaintext = plaintext.toUpperCase();
    const ciphertext = [];
    // implement cipher algorithm
    // Iterate over each character of the plaintext:
    for (let i = 0; i < plain_length; i++) {
        // check for letters
        if ((upperCasePlaintext.charCodeAt(i) > 64 && upperCasePlaintext.charCodeAt(i) < 91)) {
            for (let j = 0; j < abc.length; j++) {
                if (upperCasePlaintext[i] === abc[j]) {
                    // make it case sensitive
                    (plaintext.charCodeAt(i) > 64 && plaintext.charCodeAt(i) < 91) ?
                        ciphertext.push(key[j].toUpperCase()) :
                        ciphertext.push(key[j].toLowerCase());
                }
            }
        }
        else {
            // if not a letter > just return the special char itself
            ciphertext.push(plaintext[i]);
        }
    }
    const ciphertextString = ciphertext.join('');
    return ciphertextString;
};
readline.question("plaintext: ", (text) => {
    console.log("ciphertext:", print_ciphertext(text, key));
    readline.close();
});
//# sourceMappingURL=substitution.js.map