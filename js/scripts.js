// Business Logic

// Error Handling
var errorEntry = function(number) {
  var output = [];

  if (isNaN(number) || number === "") {  // if non number or empty entry is inputted
    output.push("error message");
  } return output;
};  // errorEntry

// Main Logic
var pingPong = function(number) {
  // variables to change output easier. Boss might want diff numbers, & words other than ping & pong
  var ping = "ping";
  var pong = "pong";
  var number1 = 3;
  var number2 = 5;
  var output = [];

  for (var i = 1; i <= number; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      output.push(ping + pong);
    } else if (i % number1 === 0) {
      output.push(ping);
    } else if (i % number2 === 0) {
      output.push(pong);
    } else {
      output.push(i);
    }
  }
  return output;
};  // pingPong

// Negative Numbers
var negativeNumber = function(number) {
  var ping = "ping";
  var pong = "pong";
  var number1 = 3;
  var number2 = 5;
  var negativeOutput = [];

  if (number < 0) {
    for (var i = -1; i >= number; i--) {
      if (i % number1 === 0 && i % number2 === 0) {
        negativeOutput.push(ping + pong);
      } else if (i % number1 === 0) {
        negativeOutput.push(ping);
      } else if (i % number2 === 0) {
        negativeOutput.push(pong);
      } else {
        negativeOutput.push(i);
      }
    }
  }
console.log(negativeOutput);
  return negativeOutput;
};  // negativeNumber








// User Interface Logic
