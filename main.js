
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

  num1 = parseFloat (num1);
  num2 = parseFloat (num2);

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

  alert("Welcome to the Advanced Calculator");

  var userOption = prompt("Type 1 for to find power of numbers or 2 to find the root of a number");
  // num 1

    if (userOption == 1 ){
      var num1 = prompt("num 1");
      // num 2
      var num2 = prompt("num 2");
      num1 = parseInt (num1);
      num2 = parseInt (num2);
      var result = Math.pow(num1,num2);
      alert(result);

    } else if(userOption == 2){

        var sqrtNum = prompt("Which number do you want to square?");
          sqrtNum = parseInt (sqrtNum);
          var result = Math.sqrt(sqrtNum);
          alert(result);

    }



}
