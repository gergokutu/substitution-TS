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
// validate if 1 CLI arg is passed
// actually argv is not necessary as an argument >
// when the function does not find it inside the block >
// search it outside
// like with exit()...
const validateCLIArg = (argv, info) => {
    if (argv.length !== 3) {
        console.log(usageInfo);
        exit(1);
    }
};
validateCLIArg(argv, usageInfo);
console.log("Success");
//# sourceMappingURL=substitution.js.map