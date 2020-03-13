//user logic
$(document).ready(function() {
  $("form#input_return").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = userInput(number);
    $("#results").text(result); 
  });
}); 

//business logic
var userInput = function(number) {
  var newUserInput = [];
  for (let i = 0; i <= number; i++) {
    newUserInput.push(' ' + i)
  } 
}