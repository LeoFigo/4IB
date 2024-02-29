let prodotti = [];
function createObj() {
    // Retrieve form inputs
    let category = document.getElementById('category').value;
    let codice = document.getElementById('fcod').value;
    let nome = document.getElementById('fname').value;
    let descrizione = document.getElementById('fdesc').value;
    let prezzo = document.getElementById('fprezzo').value;
    //let sconto = document.querySelector('input[name="p"]:checked').value;
    //let inMagazzino = document.getElementById('magazz').checked;
    
    // Crea un nuovo oggetto
    let product = {
        category: category,
        codice: codice,
        nome: nome,
        descrizione: descrizione,
        prezzo: prezzo,
        //sconto: sconto,
        //inMagazzino: inMagazzino
    };

    
    prodotti.push(product);
    console.log("ciao")
    showProducts();
    
    console.log(product);
    
}

function showProducts() {
    let output = "";
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    for (let i = 0; i < prodotti.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = prodotti[i].nome + " " + prodotti[i].codice + " " + prodotti[i].descrizione + " " + prodotti[i].prezzo + "€";
        list.appendChild(li);

    }

}

function clearForm() {
    document.getElementById('category').value = "";
    document.getElementById('fcod').value = "";
    document.getElementById('fname').value = "";
    document.getElementById('fdesc').value = "";
    document.getElementById('fprezzo').value = "";
}