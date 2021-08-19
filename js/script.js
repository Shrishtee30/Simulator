var step = document.getElementsByClassName("step");
var i = 0;
var n1, n2;
var c;

function calculate() {
  step[i].style.color = "red";
  if (i != 0) {
    precolor();
  }

  switch (i) {
    case 4:
     c=document.getElementById('options').value;
    //alert(c);
      getOperator(c);
      break;

    case 6:
      document.getElementById('result').value=(n1+n2).toFixed(3);
      document.getElementById('res').value=(n1+n2).toFixed(3);
      //alert(n1 + n2);
      break;
    case 7:
      i = 23;
      break;

    case 9:
      document.getElementById('result').value=(n1-n2).toFixed(3);
      document.getElementById('res').value=(n1-n2).toFixed(3);
      //alert(n1 - n2);
      break;
    case 10:
      i = 23;
      break;

    case 12:
      document.getElementById('result').value=(n1*n2).toFixed(3);
      document.getElementById('res').value=(n1*n2).toFixed(3);
      //alert(n1 * n2);
      break;
    case 13:
      i = 23;
      break;

    case 15:
      document.getElementById('result').value=(n1/n2).toFixed(3);
      document.getElementById('res').value=(n1/n2).toFixed(3);
      //alert(n1 / n2);
      break;
    case 16:
      i = 23;
      break;

    case 19:
      document.getElementById('result').value=parseInt(n1)%parseInt(n2);
      document.getElementById('res').value=parseInt(n1)%parseInt(n2);
      //alert(n1 % n2);
      break;
    case 20:
      i = 23;
      break;
  }
  if (i === 24) {
    step[4].style.color = "#000000";
    step[7].style.color = "#000000";
    step[10].style.color = "#000000";
    step[13].style.color = "#000000";
    step[16].style.color = "#000000";
    step[20].style.color = "#000000";
  }
  i++;
}

function precolor() {
  step[i - 1].style.color = "#000000";
}

function getOperator(op) {
  switch (op) {
    case '+':
      getValue();
      //alert(n1+n2);
      i = 4;
      break;

    case "-":
      getValue();
      //alert(n1 - n2);
      i = 7;
      break;

    case "*":
      getValue();
      // alert(n1 * n2);
      i = 10;
      break;

    case "/":
      getValue();
      //alert(n1 / n2);
      i = 13;
      break;

    case "%":
      getValue();
      //alert(n1 % n2);
      i = 16;
      break;
  }
}

function getValue() {
  n1 = parseFloat(document.getElementById('firstNumber').value);
  n2 = parseFloat(document.getElementById('secondNumber').value);

  document.getElementById('num1').value=n1;
    document.getElementById('op').value=c;
    document.getElementById('num2').value=n2;
}
