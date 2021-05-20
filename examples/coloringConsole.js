// npm library 'chalk' which coloring console output
const chalk = require("chalk");
// Get all arguments and save it in an array
const args = process.argv.slice(2);
// Print out each argument in yellow
args.forEach((arg) => console.log(chalk.yellow(arg)));
// Would be the same with nodes escape sequences
args.forEach((arg) => console.log("\x1b[33m%s\x1b[0m", arg));

// Making CLI (command line interface) interactive
const readline = require("readline").createInterface({
  // Taking an input from the terminal
  input: process.stdin,
  // Displays output --> our question in line 18
  // If 'output: undefined' then the question won't be displayed
  output: process.stdout,
});

// question method accepts query(output) and callback function
// Callback function will be invoked once user inputs something
readline.question("What's your name?", (name) => {
  console.log(chalk.bgGreen(`Hello ${name}!`));
  readline.close();
});

// If wanting to make a more complex CLI tool
// Use inquirer library: 'npm install inquirer'
