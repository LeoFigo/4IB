let products = [];

function createObject() {
    let product = {
        nome:document.getElementById("nome").value,
        codice:document.getElementById("codice").value,
        prezzo:document.getElementById("prezzo").value
    };
    if(document.getElementById("nome").value == "Aurora") {
        alert("impossibile, aurora non è simpatica");
        return;
    }
    products.push(product);
    showProducts();
    clearForm();
}

function showProducts() {
    textBox.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = products[i].nome + " " + products[i].codice + " " + products[i].prezzo +'<button id="remove" onclick="deleteProduct(' + i +')">Rimuovi prodotto</button>' ;
        textBox.appendChild(li);
         
    }
    
}

function deleteProduct(indice) {
    products.splice(indice, 1);
    showProducts();
}

function clearForm() {
    document.getElementById("nome").value = "";
}