# SUBSTITUTION-TS
Text encrypting program written in TypeScript. User should ensure the key through CLI argument.
If the key is valid you can input the plaintext which is going to be encrypted after hitting enter.
You can see the result in the console > "ciphertext:..."
Every character of the key has its pair from the alphabet.

***************************************

!! Usage: node substitution.js key !!


* Key should be 26 characters long!   
* Key should consist of only letters! 
* Key should have unique characters!  
* The key is case insensitive.        

***************************************

## TECHNOLOGIES
- Typescript
- Node.js
- Jest

## PROJECT SETUP
You can clone the remote git repository to your computer with the following command using your terminal:
git clone git@github.com:gergokutu/substitution-TS.git

The previous command handles all the necessary npm packages.

## BRANCHING STRUCTURE
- master > only features tested on development branch pulled here
- development > changes from feat/... branches pulled here
- feature > there are several feat/... branches to be able to work separately on different features 
