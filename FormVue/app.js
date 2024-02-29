const app = Vue.createApp({
    data() {
        return {
            products: [],
            categoria: '',
            codice: '',
            nome: '',
            descrizione: '',
            prezzo: '',
            sconto: '',
            magazzino: false
        };
    },
    methods: {
        sortProducts() {
            //(ordine alfabetico)      
            this.products.sort((a, b) => a.codice.localeCompare(b.codice));
        },
        salva() {
            if (this.nome != "" && this.prezzo != "" && this.codice != "" && this.descrizione != "" && this.prezzo != "" && this.nome != null && this.prezzo != null && this.codice != null && this.descrizione != null) {
                if (isNaN(this.prezzo) || this.prezzo < 0) {
                    alert("Inserisci un prezzo valido");
                } else {
                    let Prodotto = {
                        categoria: this.categoria,
                        codice: this.codice,
                        nome: this.nome,
                        descrizione: this.descrizione,
                        prezzo: this.prezzo,
                        sconto: this.sconto,
                        magazzino: this.magazzino
                    };
                    this.products.push(Prodotto);
                    this.annulla();
                }

            } else {
                alert("Inserisci tutti i dati");
            }
        },
        annulla() {
            this.categoria = '';
            this.codice = '';
            this.nome = '';
            this.descrizione = '';
            this.prezzo = '';
            this.sconto = '';
            this.magazzino = false;
        }
    }
});
app.mount('#app');