let prodotti = [];
function createObj() {
    // Retrieve form inputs
    let category = document.getElementById('category').value;
    let codice = document.getElementById('fcod').value;
    let nome = document.getElementById('fname').value;
    let descrizione = document.getElementById('fdesc').value;
    let prezzo = document.getElementById('fprezzo').value;
    let sconto = document.querySelector('input[name="p"]:checked').value;
    let inMagazzino = document.getElementById('magazz').checked;

    // Create a new object to store product details
    let product = {
        category: category,
        codice: codice,
        nome: nome,
        descrizione: descrizione,
        prezzo: prezzo,
        sconto: sconto,
        inMagazzino: inMagazzino
    };
    prodotti.push(product);
    //showProducts();
    // You can do further processing with the 'product' object, like sending it to a server, storing it locally, or displaying it on the page.
    console.log(product); // For demonstration, logging the product object to the console
}

function showProducts() {
    let output = "";
    for (let i = 0; i < prodotti.length; i++) {
        output += "<li>" + prodotti[i].nome + " " + prodotti[i].codice + " " + prodotti[i].descrizione + " " + prodotti[i].prezzo + "€" + "</li>";
    }
    document.getElementById("product-list").innerHTML = output;
}