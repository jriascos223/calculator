var ginput = "";
var afterEquals = false;
var dots = false;

function OnKeyDown(s, e) {
     if (e.htmlEvent.keyCode == 13) {
            displaySolve();
     }
}

//Displays input by identifying each button based on id.
//after equals is so that the result of one equation does not end up being used as the next number
//Let's say 2=2 = 4 is performed
//it wont make 42 if the user inputs 2 again.
//no leading zeroes makes everything so long and annoying but

function displayInput(a) {
    var div = document.getElementById("display-content");
    if (a == "seven"){
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        } div.innerHTML = ginput;
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "7";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "one") {
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "1";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "two") {
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "2";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "three"){
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "3";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "four"){
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "4";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "five"){
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "5";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "six"){

        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "6";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "eight"){
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "8";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "nine"){
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput = "";
            div.innerHTML = "";
        }
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "9";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "zero"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        if (ginput.slice(0,1) == "0" && /^0*$/.test(ginput)){
            ginput += "";
            div.innerHTML += "";
        }else{
            ginput += "0";
            div.innerHTML += ginput.slice(-1);
        }
    }else if (a == "plus") {
      if (dots == true){
        dots = false;
      }
      if (ginput.slice(-1) == "+"){
        div.innerHTML += "";
        ginput += "";
      }else {
        ginput += "+";
        div.innerHTML += ginput.slice(-1);
      }
        if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "divide"){
      if (dots == true){
        dots = false;
      }
      if (ginput.slice(-1) == "/"){
        div.innerHTML += "";
        ginput += "";
      }else {
        ginput += "/";
        div.innerHTML += ginput.slice(-1);
      }
      if (afterEquals == true) {
            afterEquals = false;
        }
if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "multiply"){
      if (dots == true){
        dots = false;
      }
      if (ginput.slice(-1) == "*"){
        div.innerHTML += "";
        ginput += "";
      }else {
        ginput += "*";
        div.innerHTML += ginput.slice(-1);
      }

if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "point"){
      if (ginput.slice(-1) == "." || dots == true){
        div.innerHTML += "";
        ginput += "";
      }else {
        ginput += ".";
        div.innerHTML += ginput.slice(-1);
        dots = true;
      }
      if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "minus"){
      if (dots == true){
        dots = false;
      }
      if (ginput.slice(-2) == "--"){
        div.innerHTML += "";
        ginput += "";
      }else {
        ginput += "-";
        div.innerHTML += ginput.slice(-1);
      }
if (afterEquals == true) {
            afterEquals = false;
        }

    }else if (a == "close)"){
      ginput += ")";
      div.innerHTML += ginput.slice(-1);
      if (afterEquals == true){
        afterEquals = false;
      }
    }else if (a == "open("){
      ginput += "(";
      div.innerHTML += ginput.slice(-1);
      if (afterEquals == true){
        afterEquals = false;
      }
    }else if (a == "squared"){
      if (dots == true){
        dots = false;
      }
      ginput += "**";
      div.innerHTML = ginput;
      if (afterEquals == true){
        afterEquals = false;
      }
    }

}

//Clears display
function displayInputnone() {
    var ine = document.getElementById("display-content");
    ine.innerHTML = "";
    ginput = "";
    dots = false;
}

//solves what's on display. changes afterEquals to true to allow for what was mentioned before.
function displaySolve() {
    var div = document.getElementById("display-content");
    if (ginput.includes("--")){
      ginput = ginput.replace("--", "+");
    }
    var x = canEval(ginput);
    if (x == false){
      div.innerHTML = "Error.";
      ginput = "";
    }else {
    var solve = eval(ginput).toFixed(14);
    var solveNone = parseFloat(solve).toString();
    if (solve == "Infinity"){
        div.innerHTML = "Undefined";
        ginput = "";
    }else {

    div.style.cssText= 'text-align:right; font-size:35px;';
    div.innerHTML = solveNone;
    ginput = solveNone;
    afterEquals = true;
    dots = false;
    }
  }

}
//delete key. Got tired of not having one.
function deleteLast() {
    var div = document.getElementById("display-content");
    ginput = ginput.slice(0, -1);
    if (ginput.length == 0){
        div.innerHTML = "";
        ginput = "";
    }else {
        div.innerHTML = ginput;
    }

}
 //change from positive to negative simply by multiplying by -1
function sign() {
    var div = document.getElementById("display-content");
    ginput = eval(ginput) * -1;
    ginput = ginput.toString();
    if (ginput == "NaN") {
        displayInputnone();
        ginput = "";
    }else {
        div.innerHTML = ginput;
    }
}

//divide by 100
function percent() {
    var div = document.getElementById("display-content");
    ginput = parseFloat(ginput) / 100;
    ginput = ginput.toString();
    if (ginput == "NaN") {
        div.innerHTML = "";
        ginput = "";
    }else {
        div.innerHTML = ginput;
    }
}

function rooteth() {
    var div = document.getElementById("display-content");
    ginput += "Math.sqrt(";
    div.innerHTML += "&#8730;(";
    dots = false;
    afterEquals = false;
}

function power2(){
  var div = document.getElementById("display-content");
  ginput = parseFloat(ginput) * parseFloat(ginput);
  ginput = ginput.toString();
  div.innerHTML = ginput;
}

function canEval(str){
  try { eval(str); } catch (e){ return false; }
  return true;
}
