
// Which claculator, basic or advanced?
var calcChoice = prompt("Which calculator? Type 1 for basic or 2 for advanced");

if (calcChoice == 1) {

  // basic calc

// alert whats your first number?

  var num1 = prompt("num 1");

  // alert whats your second number?

  var num2 = prompt("num 2");

  // Operation

  var operation = prompt("+", "-", "/", "*");

  num1 = parseInt (num1);
  num2 = parseInt (num2);

  // return reseult to user
    if (operation == "+"){
      var result = num1 + num2;
      alert(result);
    } else if (operation == "-"){
      var result = num1 - num2;
      alert(result);
    } else if (operation == "/"){
      var result = num1 / num2;
      alert(result);
    }else if (operation == "*"){
      var result = num1 * num2;
      alert(result);
    }


} else if (calcChoice == 2){

  // advanced calc

  alert("Welcome to the advanced calculator")

  // num 1

  // num 2

  // opearation

  // power

  // square root

  // present result to user

}
