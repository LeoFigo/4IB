let cognomi = [];
let indirizzo = "http://localhost:3002/persone/";
fetch(indirizzo)
.then(response => response.json())
.then(data=>{
    for (let i = 0; i < data.length; i++) {
        cognomi.push(data[i].cognome);
    }
    carica();
    console.log(cognomi);
    scrivi();
});
document.getElementById("menu").addEventListener("click", scrivi);



function carica() {
    let menu = document.getElementById("menu");
    for (let i = 0; i < cognomi.length; i++) {
        let option = document.createElement("option");
        option.text = cognomi[i];
        option.value = i;
        menu.appendChild(option);
    }
}

function scrivi() {
    let dati = document.getElementById("dati");
    let index = document.getElementById("menu").value;

    fetch(indirizzo + index)
    .then(response => response.json())
    .then(data=>{
        console.log(data); 
        dati.innerHTML = "Nome : " + data.nome+ "<br>" + "Cognome : " + data.cognome + "<br>" + "Sesso : " + data.sesso + "<br>" + "Data di nascita : " + data.data_nascita + "<br>" + "Dimensione pisello : " + data.dimensione_pisello;
});

}