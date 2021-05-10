// Importing functionality from another file
const getArgs = require("./exposeFunctionality");

const args = getArgs();
args.forEach((arg) => console.log(arg));
