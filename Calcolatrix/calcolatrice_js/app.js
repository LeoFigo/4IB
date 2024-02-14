let number1 = 0;
let bA, bS, bD, bM;
let res = 0.0;

function writeD(char) {
    document.getElementById('display').value += char
}

function resultD() {
    let n = document.getElementById('display').value;

    if(bA == true) {
        res = parseFloat(number1) + parseFloat(n);
    } else if(bS == true) {
        res = parseFloat(number1) - parseFloat(n);
    } else if(bM == true) {
        res = parseFloat(number1) * parseFloat(n);
    } else {
        res = parseFloat(number1) / parseFloat(n);
    }

    document.getElementById('display').value = res;
}

function re(char) {
    number1 = document.getElementById('display').value;
    document.getElementById('display').value = "";
    if(char == '+') {
        bA = true;
        bS = false;
        bD = false;
        bM = false;
    } else if (char == '-') {
        bA = false;
        bS = true;
        bD = false;
        bM = false;
    } else if (char == '*') {
        bA = false;
        bS = false;
        bD = false;
        bM = true;
    } else {
        bA = false;
        bS = false;
        bD = true;
        bM = false;
    }
}

function clr() { 
    document.getElementById('display').value = "";
    number1 = 0;
    bA = false;
    bS = false;
    bD = false;
    bM = false;
}

function cern() {
    /*
    let n = document.getElementById('display').value;
    n = n.substring(0, n.length -1);
    document.getElementById('display') = n;
    */
}

