# Notes

## [Node.js](https://nodejs.dev/learn)

- JavaScript runtime environment
- V8 JavaScript engine
  - 'V8 compiles and executes JavaScript source code' [V8 Docs](https://v8.dev/docs)
- Node.js runs in a sigle process --> asynchronous behaviour
- Advantage; it's still JavaScript and frontend devs are able to write server-side code without learning a new language
- Node.js allowes newest ECMAScript standards to be used, it can be specified by the developer
- 'Node.js is a low-level platform'
  - Lots of libraries were build on Node.js, like `Express`
- Where does JavaScript end, where does Node.js begin? Key for understanding Node.js:
  - Asynchronous programming and callsbacks
  - Timers
  - Promises
  - Async and Await
  - Closures
  - The Event Loop
- Differences Node.js and Brwoser

  - No DOM and it's APIs in Node.js
  - No filesystem access in Browser
  - `require()` vs. `import` --> CommonJS module system vs. ES Modules

- Run Node.js scripts `node index.js`
- Run REPL (Read Evaluate Print Loop) `node`
  - Used to enter and run JavaScript code, like the console in the browser
  - Interactive, with autocomplete, JavaScript objects
  - `Number .` + `tab tab` would print all properties and methods
  - `global .` + `tab tab` would print all global objects
  - REPL knows when typing multi-line statements; e. g. when writing a function or iteration
- Able to pass any number of arguments when running Node.js `node index.js joe`
  - Can be retrieved by using `process` object build into Node.js
  - Comes with an `argv` property which is an array and contains the command line arguments
    - [0]: full path of `node` command
    - [1]: full path of file being axecuted
    - [2]...: All aditional arguments

### Event Loop

- Node.js JavaScript code runs single threaded, one thing happening at a time
- Write clean code and avoid anything like synchronous network calls or infinite loops
- Code which takes too long will block execution of other code
- Call stack: LIFO (Last In, First Out)
  - Event loop checks if any function needs to be run
  - If yes, adds to call stack and executes one function after another
  - Asynchronous functionality: callback function put in _Message Queue_ and called after call stack is done [example](https://nodejs.dev/learn/the-nodejs-event-loop) (setTimeout...)
  - _Job Queue_ used by promises, to execute result of async function as soon as possible and not put it at the end of call stack
  - Callback functions; simple function which is passed to another function and will execute when the event happens
  - Error handling: first parameter is error object (Node.js) ?
  - Alternative to callbacks: promises & async/await

## Read

- https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line
- https://nodejs.org/api/
- https://www.redhat.com/en/topics/api/what-is-a-rest-api
- https://www.freecodecamp.org/learn/apis-and-microservices/#basic-node-and-express

## Resources

- https://nodecli.com/node-stdin-stdout
- https://www.geeksforgeeks.org/node-js-process-stdin-property/

## Repos

- https://github.com/badabam/node-playground
- https://github.com/badabam/file-generator
