const getArgs = require("./exposeFunctionality");
const args = getArgs();

setTimeout(() => {
  args.forEach((el) => console.log(`This is ${el}.`));
}, 50);

args.forEach((el) => console.log(el));

// Invoke function at the end of current event loop
// Could be used to make sure code is already executed
process.nextTick(() => {
  console.log("DONE");
});

/*
This code will print:
foo
bar
baz
DONE
This is foo.
This is bar.
This is baz.
*/
