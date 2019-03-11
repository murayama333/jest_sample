module.exports = {
  counter: function(i) {
    return i + 1
  },
  add: function(x, y) {
    return x + y
  },
  substract: function(x, y ) {
    return x - y
  },
  multiply: function(x, y ) {
    return x * y
  },
  divide: function(x, y) {
    if (y == 0) {
      return 0
    }
    return x / y
  },
  hello: function() {
    return "hello"
  },
  world: function() {
    return "world"
  }
}

// module.exports = counter
// ES6 export default counter
