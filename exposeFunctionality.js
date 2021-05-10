function getArgs() {
  return process.argv.slice(2);
}

// Expose functionality to import in another file
// Using module system
module.exports = getArgs;
