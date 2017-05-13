// Compile code to ES2015 with Babel before running tests.
require("babel-register")()

// During tests, ignore file types which Enzyme can't work with.
require.extensions[".css", ".scss", ".sass", ".jpg", ".png"] = function() {}
