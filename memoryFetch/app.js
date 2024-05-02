let card1 = 0;
let card2 = 0;
const FACILE = 6;
const MEDIO = 8;
const DIFFICILE = 15;

let memory = [];
const buttonsContainer = document.getElementById('tabella');
let buttons = [];
let cats = [];

function populateButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = memory[i];
        buttons[i].style.color = 'black';
        const catIndex = memory[i] - 1; 
        buttons[i].style.backgroundImage = `url(${cats[catIndex]})`;
    }
    setTimeout(() => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.color = 'white';
        }
    }, 2000);
}

function shuffleButtons() {
    for (let i = 0; i < buttons.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [memory[i], memory[j]] = [memory[j], memory[i]];
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
            }, 1000);
        }
    }
}

function compara() {
    if (card1 == card2) {
        return true;
    } else {
        return false;
    }
}

function level() {
    let difficulty = document.getElementById('level').value;
    console.log(difficulty);
    memory = []; // Clear the memory array
    if (difficulty == 'facile') {
        for (let i = 1; i <= FACILE; i++) {
            memory.push(i);
            memory.push(i);
        }
    } else if (difficulty == 'medio') {
        for (let i = 0; i < MEDIO; i++) {
            memory.push(i);
            memory.push(i);
        }
    } else if (difficulty == 'difficile') {
        for (let i = 0; i < DIFFICILE; i++) {
            memory.push(i);
            memory.push(i);
        }
    }
}

async function loadImages() {
    const uniqueNumbers = [...new Set(memory)];
    const promises = uniqueNumbers.map(() =>
        fetch('https://api.thecatapi.com/v1/images/search?limit=1')
            .then(response => response.json())
            .then(data => {
                const imageUrl = data[0].url;
                cats.push(imageUrl);
            })
    );
    await Promise.all(promises);
}


async function print() {
    level();
    await loadImages();
    for (let i = 0; i < memory.length; i++) {
        const button = document.createElement('button');
        buttons[i] = button;
        button.classList.add('button');
        button.addEventListener('click', flipCard);
        buttonsContainer.appendChild(button);
    }
    shuffleButtons();
}

function hideMenu() {
    document.getElementById('menu').style.display = 'none';
}

async function start() {
     print();
    hideMenu();
    populateButtons();
}