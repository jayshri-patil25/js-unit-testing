// Arithmatic operations
function add(a, b) {
  var a = 5;
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function Calculator() {
  // Arithmatic operations
  this.addNum = function add(a, b) {
    return a + b;
  };

  this.subNum = function sub(a, b) {
    return a - b;
  };

  this.mulNum = function mul(a, b) {
    return a * b;
  };

  this.divNum = function div(a, b) {
    return a / b;
  };

  this.input = function inputTwoNumber(x, y) {
    this.addNum(x, y);
  };
}
