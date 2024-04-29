let cognomi = [];
fetch("http://localhost:3000/persone")
.then(response => response.json())
.then(data=>{
    for (let i = 0; i < data.length; i++) {
        cognomi.push(data[i]);
    }
    carica();
    console.log(cognomi);
});


function carica() {
    let menu = document.getElementById("menu");
    for (let i = 0; i < cognomi.length; i++) {
        let option = document.createElement("option");
        option.text = cognomi[i].cognome;
        option.value = i;
        menu.appendChild(option);
    }
}

function scrivi() {
    let 
}