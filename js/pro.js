function Calc(){
    var a=parseFloat(document.getElementById('firstNumber').value);
    var b=parseFloat(document.getElementById('secondNumber').value);
    var c=document.getElementById('options').value;
    document.getElementById('num1').value=a;
    document.getElementById('op').value=c;
    document.getElementById('num2').value=b;
 
    if(c === '+')
    {
        document.getElementById('result').value=(a+b).toFixed(3);
        document.getElementById('res').value=(a+b).toFixed(3);
    }
    if(c === '-')
    {
        document.getElementById('result').value=(a-b).toFixed(3);
        document.getElementById('res').value=(a-b).toFixed(3);
    }
    if(c === '*')
    {
        document.getElementById('result').value=(a*b).toFixed(3);
        document.getElementById('res').value=(a*b).toFixed(3);
    }
    if(c === '/')
    {
        document.getElementById('result').value=(a/b).toFixed(3);
        document.getElementById('res').value=(a/b).toFixed(3);
    }
    if(c === '%')
    {
        document.getElementById('result').value=parseInt(a)%parseInt(b);
        document.getElementById('res').value=parseInt(a)%parseInt(b);
    }
    
}
document.getElementById("reset").onclick = function() {
    document.getElementById("number").value = "";
};
 

