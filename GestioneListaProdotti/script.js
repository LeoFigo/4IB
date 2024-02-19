let prodotti = [];

function showProducts() {
    let output = "";
    for (let i = 0; i < prodotti.length; i++) {
        output += "<li>" + prodotti[i].nome + " " + prodotti[i].codice + " " + prodotti[i].descrizione + " " + prodotti[i].prezzo + "€" + "</li>";
    }
    document.getElementById("product-list").innerHTML = output;
}

function addProduct() {
    let prodotto = {
        nome: prompt("enter nome"),
        codice: prompt("enter codice"),
        descrizione: prompt("enter descrizione"),
        prezzo: prompt("enter prezzo"),
    };
    if(prodotto.nome != null && prodotto.codice != null && prodotto.descrizione != null && prodotto.prezzo != null) {
        prodotti.push(prodotto);
        showProducts();
    }
}

function deleteProduct() {
    let codiceD = prompt("inserisci codice prodotto da eliminare");
    for (let i = 0; i < prodotti.length; i++) {
        if(prodotti[i].codice === codiceD) {
            prodotti.splice(i, 1);
        }
    }
    showProducts();
}

function sortProducts() {
    prodotti.sort(function(a,b) {
        return a.codice.localeCompare(b.codice);
    });
    showProducts();
}  