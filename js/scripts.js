var add = function(num1, num2) {
  return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

var multiply = function(num1, num2) {
  return num1 * num2;
};

var divide = function(num1, num2) {
  return num1 / num2;
};


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = add(num1, num2);
    
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#subtract1").val());
    var num2 = parseInt($("#subtract2").val());
    var result = subtract(num1, num2);
    $("#output").text(result);
  });
});
