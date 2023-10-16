public class Main {
    public static void main(String[] args) {
        int nodi[][] =
                {{1, 1},
                {3, 2},
                {3, 3},
                {0, 0}};
        Grafo g = new Grafo(4);
        g.caricaNodo(nodi);
        g.stampa();
    }
}