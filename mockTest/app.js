let cognomi = [];
let indirizzo = "http://localhost:3002/personeIntere/";
fetch("http://localhost:3002/personeCognomi/")
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
document.getElementById("prova").value = "ciao";


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
    let put = "<input type='text'></input>";
    fetch(indirizzo + index)
    .then(response => response.json())
    .then(data=>{
        console.log(data); 
        dati.innerHTML = "Nome : " + "<input type='text' id = 'nome' value =  "+ data.nome + "></input>"  + "<br>" 
        + "Cognome : " + "<input type='text' id = 'cognome' value =  "+ data.cognome + "></input>" + "<br>" 
        + "Sesso : " + "<input type='text' id = 'sesso' value =  "+ data.sesso + "></input>" + "<br>" 
        + "Nascita : " + "<input type='text' id = 'data_nascita' value =  "+ data.data_nascita + "></input>";
});



}
function apri() {
    document.getElementById('mauro').style.display =  'block';
    document.getElementById('mauro').style.visibility =  'visible';
}
function post() {
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const sesso = document.getElementById("sesso").value;
    const data_nascita = document.getElementById("data_nascita").value;

    console.log(nome);
    fetch(indirizzo + document.getElementById("menu").value, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,     
          cognome: cognome,
          sesso: sesso,
          data_nascita: data_nascita,
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
}