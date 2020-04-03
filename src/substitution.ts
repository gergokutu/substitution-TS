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
const validateCLIArg = (len: number, info: string): void => {
  if (len !== 3) {
    console.log(usageInfo);
    exit(1);
  }
}

validateCLIArg(len, usageInfo);

if (key.length !== 26) {
  console.log(`Your CLI input: ${key}\n${usageInfo}`);
  exit(1);
}

console.log("Success");

export = validateCLIArg;