const { writeFile } = require("fs");

// Does not need encoding parameter, default is utf8
writeFile("test.md", "Write this in new file", (error) => {
  if (error) console.error(error);
  console.log("File written");
});
