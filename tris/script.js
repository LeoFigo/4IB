let matrix = [[null, null, null], [null, null, null], [null, null, null]];
let cond = true;
let mosse = 0;

let rand = false;
// x = 1 = true

let randomi;
let randomj;


checkFirst();
function add(r, c) {
    if (matrix[r][c] == null) {
        if (cond) {
            matrix[r][c] = 4;
            let s = r + "" + c;
            document.getElementById(s).innerHTML = "X";
            document.getElementById("player").innerText = "O";
        } else {
            matrix[r][c] = 1;
            let s = r + "" + c;
            document.getElementById(s).innerHTML = "O";
            document.getElementById("player").innerText = "X";
        }
        mosse++;
        document.getElementById("mosse").innerText = `Mosse: ${mosse}`;
        if (checkWin()) {
            close();
            return;
        } else {
            cond = !cond;
        }

    }
    if (rand) {
        randomi = Math.floor(Math.random() * 3);
        randomj = Math.floor(Math.random() * 3);
        while (matrix[randomi][randomj] != null) {
            randomi = Math.floor(Math.random() * 3);
            randomj = Math.floor(Math.random() * 3);
        }
        if (cond) {
            matrix[randomi][randomj] = 4;
            let s = randomi + "" + randomj;
            document.getElementById(s).innerHTML = "X";
            document.getElementById("player").innerText = "O";
        } else {
            matrix[randomi][randomj] = 1;
            let s = randomi + "" + randomj;
            document.getElementById(s).innerHTML = "O";
            document.getElementById("player").innerText = "X";
        }
        if (checkWin()) {
            close();
            return;
        } else {
            cond = !cond;
        }


    }
}


function casual() {
    reset();
    rand = true;    
}

function checkFirst() {
    if (cond) {
        document.getElementById("player").innerText = "X";
    } else {
        document.getElementById("player").innerText = "O";
    }
    document.getElementById("mosse").innerText = `Mosse: ${mosse}`;

}

function scorri() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j] + " ");
        }
    }
}

function close() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0;
            document.getElementById(i + "" + j).style.backgroundColor = 'rgb(255, 228, 196)';
        }
    }
}

function checkWin() {
    let temp;
    for (let i = 0; i < matrix.length; i++) {
        temp = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            temp = temp + matrix[i][j];
            if (temp == 3 || temp == 12) {
                return true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        temp = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            temp = temp + matrix[j][i];
            if (temp == 3 || temp == 12) {
                return true;
            }
        }
    }

    if ((matrix[0][0] + matrix[1][1] + matrix[2][2]) == 3 || (matrix[2][0] + matrix[1][1] + matrix[0][2]) == 12) {
        return true;
    } else if ((matrix[2][0] + matrix[1][1] + matrix[0][2]) == 3 || (matrix[2][0] + matrix[1][1] + matrix[0][2]) == 12) {
        return true;
    }

    return false;

}
function reset() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = null;
            document.getElementById(i+ "" + j).innerHTML = "";
            document.getElementById(i+ "" + j).style.backgroundColor = "rgb(188, 143, 143)";
        }
    }
    cond = true;
    mosse = 0;
    rand = false;
    checkFirst();
}