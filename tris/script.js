let matrix = [[null, null, null], [null, null, null], [null, null, null]];
let cond = true;
let mosse = 0;
// x = 1 = true
checkFirst();
function add(r, c) {
    if (matrix[r][c] == null) {
        if (cond) {
            matrix[r][c] = 4;
            let s = r + "" + c;
            document.getElementById(s).style.backgroundColor = 'green';
            document.getElementById("player").style.backgroundColor = 'red';
        } else {
            matrix[r][c] = 1;
            let s = r + "" + c;
            document.getElementById(s).style.backgroundColor = 'red';
            document.getElementById("player").style.backgroundColor = 'green';
        }
        mosse++;
        document.getElementById("mosse").innerText = `Mosse: ${mosse}`;
        if (checkWin()) {
            close();
        } else {
            cond = !cond;
        }
    }

}

function checkFirst() {
    if (cond) {
        document.getElementById("player").style.backgroundColor = 'green';
    } else {
        document.getElementById("player").style.backgroundColor = 'red';
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
            document.getElementById(i + "" + j).style.backgroundColor = 'purple';
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
            document.getElementById(i + "" + j).style.backgroundColor = 'white';
        }
    }
    cond = true;
    mosse = 0;
    checkFirst();
}