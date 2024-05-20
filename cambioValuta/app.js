let valuta1 = document.getElementById("valuta1");
let valuta2 = document.getElementById("valuta2");
let importo1 = document.getElementById("importo1");
let importo2 = document.getElementById("importo2");
let bandiera1 = document.getElementById("bandiera1");
let bandiera2 = document.getElementById("bandiera2");
let valute = [];
fetch("http://localhost:3002/valute")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        valute = data;
        console.log(valute);
        for (let i = 0; i < valute.length; i++) {
            console.log(valute[i].name);
        
            let option1 = document.createElement("option");
            option1.text = valute[i].name;
            option1.value = valute[i].id; 
            valuta1.appendChild(option1);
            bandiera1.innerHTML = "<img src='Bandiere/" + valute[valuta1.value].fileName + "' alt='bandiera' style='max-width: 100px;'>";
        
            let option2 = document.createElement("option");
            option2.text = valute[i].name;
            option2.value = valute[i].id; 
            valuta2.appendChild(option2);
            bandiera2.innerHTML = "<img src='Bandiere/" + valute[valuta2.value].fileName + "' alt='bandiera' style='max-width: 100px;'>";
        }
    });

function converti() {
    /*console.log(importo1.value); 
    console.log(valute[valuta2.value].tasso);*/
    bandiera1.innerHTML = "<img src='Bandiere/" + valute[valuta1.value].fileName + "' alt='bandiera' style='max-width: 100px;'>";
    bandiera2.innerHTML = "<img src='Bandiere/" + valute[valuta2.value].fileName + "' alt='bandiera' style='max-width: 100px;'>";
    let val1 = eval(importo1.value / valute[valuta1.value].tasso);

    let res = eval(val1 * valute[valuta2.value].tasso);
    
    importo2.value = res;
}