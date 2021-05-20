// Print out process.argv array
console.log(process.argv);
// 'node arguments.js jane doe' should return:
/*
[
    '/opt/homebrew/lib/node_modules/node/bin/node',
    '/Users/macfrei/neuefische/coaches/node-playground/arguments.js',
    'jane',
    'doe'
]
*/

// Get only array of arguments
const args = process.argv.slice(2);
console.log(args);
// 'node arguments.js jane doe john' should return:
// ['jane', 'doe', 'john']
