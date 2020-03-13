//user interface
$(document).ready(function() {
  $("form#input_return").submit(function(event) {
    event.preventDefault();
    
    var userInput = parseInt($("input#number").val());
    var text = "";
    for (var index = 0; index = userInput.length; index +=1); {
      text += userInput[index] + ", ";
    }
    $("#results").text(results); 

  });
}); 