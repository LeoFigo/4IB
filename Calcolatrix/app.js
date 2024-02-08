function writeD(char) {
    document.getElementById('display').value += char;
}

function resultD() {
    let n = document.getElementById('display').value;
    let res = eval(n);
    document.getElementById('display').value = res;
}

