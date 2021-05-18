# Node.js

- Program that allowes JavaScript to run outside of the browser
- Able to build anything: small command line tools, HTTP servers, etc.

- `console.log` prints out text in the terminal _not_ in the browser
- `process` available globally in Node, like `console`
  - Exit a programm `process.exit(0)` --> if successfull (0) other status codes mean unsuccessfull
  - `process.argv` reads command line arguments, starting at index 2 (third element)
- Standard JS global objects available (Array, Math, JSON ...), just not those with browser related functionality (document, prompt)
- Additional bindings in global scope which can be accessed by requiring it from module system `require...`
  - Can be another file or an additional build-in module or installed module
  - `require('fs')` will give build in file system module
  - Add to interface of modules by exporting it

## File System Module `fs`

- Module exports functions which can be used for working with files and directories
- e.g. `readFile` reads file and calls callback with file's contents
  - Second parameter indicates character encoding, if not given, it will `Buffer` object (binary data) instead of string

```js
const { readFile } = require("fs");

readFile("file.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});
```

- `writeFile` used to write a file to disk
  - No encoding parameter needed, as its default is utf8

```js
const { writeFile } = require("fs)

writeFile("file.txt", "Node was here", err => {
    if(err) console.log(`faild to write file: ${err}`)
    console.log("File written)
})
```

- New way to write with promises, which is an object added to `fs`
