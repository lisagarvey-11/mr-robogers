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
  var newUserInputs = [];
  for (let i = 0; i <= number; i++) {
    newUserInputs.push(i);
  } 
  console.log(newUserInputs);
  return newUserInputs;
}

if (userInputs.includes('3')) {
  return "Won't you be my neighbor?"
}
