// npm library 'chalk' which coloring console output
const chalk = require("chalk");
// Get all arguments and save it in an array
const args = process.argv.slice(2);
// Print out each argument in yellow
args.forEach((arg) => console.log(chalk.yellow(arg)));
// Would be the same with nodes escape sequences
args.forEach((arg) => console.log("\x1b[33m%s\x1b[0m", arg));
