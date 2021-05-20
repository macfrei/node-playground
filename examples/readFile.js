const { readFile } = require("fs");

// Needs to inculde "utf8", otherwise will return binary
readFile("aboutNode.md", "utf8", (error, text) => {
  if (error) console.error(error);
  console.log(text);
});
