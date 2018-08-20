global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}

// Compile code to ES2015 with Babel before running tests.
require("babel-register")()
var enzyme = require("enzyme")
var Adapter = require("enzyme-adapter-react-16")

// During tests, ignore file types which Enzyme can't work with.
require.extensions[".css", ".scss", ".sass", ".jpg", ".png"] = function() {}

enzyme.configure({ adapter: new Adapter() })
