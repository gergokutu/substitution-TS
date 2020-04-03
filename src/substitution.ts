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
const len: number = argv.length;
const key: string = argv[2];

// validate if 1 CLI arg is passed
// actually argv is not necessary as an argument >
// when the function does not find it inside the block >
// search it outside
// like with exit()...
export const validateCLIArg = (len: number, info: string): void => {
  if (len !== 3) {
    console.log(info);
    exit(1);
  }
}

export const validate_key = (key: string): void => {
  if (key.length !== 26) {
    console.log("Key should be 26 characters long!");
    exit(1);
  }

  for (let i: number = 0; i < key.length; i++) {
    const upperCaseKey: string = key.toUpperCase();

    if (upperCaseKey.charCodeAt(i) < 65 || upperCaseKey.charCodeAt(i) > 90) {
      console.log("Key should consist of only letters!");
      exit(1);
    }
  }

  for (let i: number = 0; i < key.length; i++) {
    for (let j: number = 1; j < key.length; j++) {
      const upperCaseKey: string = key.toUpperCase();

      if ((upperCaseKey[i] === upperCaseKey[j]) && i !== j) {
        console.log("Key should have unique characters!");
        exit(1);
      }
    }
  }
}

validateCLIArg(len, usageInfo);
validate_key(key);

console.log("Success");

const readline: any = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const print_ciphertext = (plaintext: string, key: string): string => {

  const abc: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZuvwxyz";
  const plain_length = plaintext.length;
  const upperCasePlaintext = plaintext.toUpperCase();
  const ciphertext: string[] = [];

  // implement cipher algorithm
  // Iterate over each character of the plaintext:
  for (let i: number = 0; i < plain_length; i++) {
    // check for letters
    if ((upperCasePlaintext.charCodeAt(i) > 64 && upperCasePlaintext.charCodeAt(i) < 91)) {

      for (let j: number = 0; j < abc.length; j++) {

        if (upperCasePlaintext[i] === abc[j]) {
          // make it case sensitive
          (plaintext.charCodeAt(i) > 64 && plaintext.charCodeAt(i) < 91) ?
            ciphertext.push(key[j].toUpperCase()) :
            ciphertext.push(key[j].toLowerCase())
        }
      }
    } else {
      // if not a letter > just return the special char itself
      ciphertext.push(plaintext[i])
    }
  }
  
  const ciphertextString: string = ciphertext.join('');
  return ciphertextString;
}

readline.question("plaintext: ", (text: string) => {
  console.log("ciphertext:", print_ciphertext(text, key));
  readline.close();
});



