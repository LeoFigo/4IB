card1 = 0;
card2 = 0;

let memory = [];
const buttonsContainer = document.getElementById('tabella');
let buttons = [];

function start() {
    print();
    hideMenu();
    populateButtons();
}

function compara() {
    if (card1 == card2) {
        return true;
    } else {
        return false;
    }
}function compara() {
    if (card1 == card2) {
        return true;
    } else {
        return false;
    }
}
function hideMenu() {
    document.getElementById('menu').style.display = 'none';
}
function populateButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = memory[i];
        buttons[i].style.color = 'black';
    }
    setTimeout(() => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.color = 'white';
        }
    },1);
}

function shuffleButtons() {

    for (let i = 0; i < buttons.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [memory[i], memory[j]] = [memory[j], memory[i]];
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = memory[i];
        buttons[i].style.color = 'white';
    }
}

function flipCard() {
    if (card1 == 0) {
        card1 = this.innerText;
        this.style.color = 'black';
    } else {
        card2 = this.innerText;
        this.style.color = 'black';
    }
    if (card1 != 0 && card2 != 0) {
        if (compara()) {
            card1 = 0;
            card2 = 0;
        } else {
            setTimeout(function () {
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons[i].innerText == card1 || buttons[i].innerText == card2) {
                        buttons[i].style.color = 'white';
                    }
                }
                card1 = 0;
                card2 = 0;
            }, 200);
        }
    }
}

function level() {
    let difficulty = document.getElementById('level').value;

    if (difficulty == 'easy') {
        for (let i = 1; i < 7; i++) {
            memory.push(i);
            memory.push(i);
        }
        shuffleButtons();
    } else if (difficulty == 'medium') {
        for (let i = 1; i < 10; i++) {
            memory.push(i);
            memory.push(i);
        }
        shuffleButtons();
    } else if (difficulty == 'hard') {
        for (let i = 1; i < 20; i++) {
            memory.push(i);
            memory.push(i);
        }
        shuffleButtons();
    }

}
function print() {
    level();
    for (let i = 0; i < memory.length; i++) {
        const button = document.createElement('button');
        buttons[i] = button;
        button.classList.add('button'); //ingrandisci le carte
        button.addEventListener('click', flipCard); //aggiungi eventlistener
        buttonsContainer.appendChild(button); //aggiungi al div
    }
    shuffleButtons();
}


