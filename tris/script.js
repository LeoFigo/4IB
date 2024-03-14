let matrix = [[null, null, null], [null, null, null], [null, null, null]];
let cond = false;

// x = 1 = true
function add(r, c) {
    if (matrix[r][c] == null) {
        if (cond) {
            matrix[r][c] = 2;
            let s = r + "" + c;
            document.getElementById(s).style.backgroundColor = 'green';
        } else {
            matrix[r][c] = 1;
            let s = r + "" + c;
            document.getElementById(s).style.backgroundColor = 'red';
        }
        if (checkWin()) {
            close();
        } else {
            cond = !cond;
        }
    }

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
            if (temp == 3 || temp == 6) {
                return true;
            }
        }
    }
    
    for (let i = 0; i < matrix[i].length; i++) {
        temp = 0;
        for (let j = 0; j < matrix.length; j++) {
            temp = temp + matrix[j][i];
            if (temp == 3 || temp == 6) {
                return true;
            }
        }
    }
    /*
    if ((matrix[0, 0] + matrix[1, 1] + matrix[2, 2]) == 3 || (matrix[2, 0] + matrix[1, 1] + matrix[0, 2]) == 3) {
        return true;
    } else if ((matrix[2, 0] + matrix[1, 1] + matrix[0, 2]) == 3 || (matrix[2, 0] + matrix[1, 1] + matrix[0, 2]) == 6) {
        return true;
    }
    return false;
    */  
}