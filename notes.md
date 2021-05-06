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
