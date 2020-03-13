//user logic
$(document).ready(function() {
  $("form#input_return").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var results = userInput(number);
    $("#results").show(); 
  });
}); 

//business logic
var userInput = function(number) {
  var newUserInputs = [];
  for (let i = 0; i <= number; i++) {
    newUserInputs.push(i);
  } 
  console.log(newUserInputs);
 
//reads the piece of the array and converts to a string and locates a certain number within. if no matches, print the number.
  newUserInputs.forEach(function(newUserInput) {
    if (newUserInputs[newUserInput].toString().includes('3')) {
      newUserInputs[newUserInput] = "Won't You Be My Neighbor?";
    } else if (newUserInputs[newUserInput].toString().includes('2')) {
        newUserInputs[newUserInput] = "Boop";
    } else if (newUserInputs[newUserInput].toString().includes('1')) {
      newUserInputs[newUserInput] = "Beep!";
    }
  })
  return (newUserInputs);
};
