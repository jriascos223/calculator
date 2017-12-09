var ginput = "";
var afterEquals = false;

function displayInput(a) {
    var div = document.getElementById("display-content");
    if (a == "seven"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "7";
        div.innerHTML += ginput.slice(-1);   
    }else if (a == "one") {
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "1";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "two") {
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "2";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "three"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "3";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "four"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "4";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "five"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "5";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "six"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "6";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "eight"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "8";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "nine"){
        if (afterEquals == true){
            div.innerHTML = "";
            ginput = "";
            afterEquals = false;
        }
        ginput += "9";
        div.innerHTML += ginput.slice(-1);
    }else if (a == "zero"){
        ginput += "0";
        div.innerHTML += ginput.slice(-1);
        if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "plus") {
        ginput += "+";
        div.innerHTML += ginput.slice(-1);
        if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "divide"){
        ginput += "/";
        div.innerHTML += ginput.slice(-1);
        if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "multiply"){
        ginput += "*";
        div.innerHTML += ginput.slice(-1);
        if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "point"){
        ginput += ".";
        div.innerHTML += ginput.slice(-1);
        if (afterEquals == true) {
            afterEquals = false;
        }
    }else if (a == "minus"){
         if (afterEquals == true) {
            afterEquals = false;
        }
        ginput += "-";
        div.innerHTML += ginput.slice(-1);
       
    }
    
}

function displayInputnone() {
    var ine = document.getElementById("display-content");
    ine.innerHTML = "";
    ginput = "";
}

function displaySolve() {
    var div = document.getElementById("display-content");
    var solve = eval(ginput).toString();
    div.style.cssText= 'text-align:right; font-size:35px;';
    div.innerHTML = solve;
    ginput = solve;
    afterEquals = true;
    
    
}

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




