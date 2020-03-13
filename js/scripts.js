$(document).ready(function() {
  $("form#input_return").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    
    if (number.indexOf(3) !== -1) {
      result="Won't you be my neighbor?";
    } else if (number.indexOf(2) !== -1) {
      result="Boop";
    } else if (number.indexOf(1) !== -1) {
      result="Beep!";
    } else {
      result();
    }

    $("#results").show(); 

  });
}); 