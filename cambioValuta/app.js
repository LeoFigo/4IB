let valuta1 = document.getElementById("valuta1").value;
let valuta2 = document.getElementById("valuta2").value;
let value = [];
fetch("http://localhost:3002/valute")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        valute = data;
        console.log(valute);
        for (let i = 0; i < valute.length; i++) {
            console.log(valute[i].name);
            let option = document.createElement("option");
            option.text = valute[i].name;
            option.id = valute[i].id; 
            valuta1.appendChild(o);
            valuta2.appendChild(o);
        }
    });

function converti() {


}