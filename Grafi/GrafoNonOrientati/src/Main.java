public class Main {
    public static void main(String[] args) {
        int nodi[][] =
                {{0, 1},
                {0, 2},
                {0, 3},
                {1, 0},
                {1, 2},
                {1, 3},
                {2, 0},
                {2, 1},
                {2, 3},
                {3, 0},
                {3, 1},
                {3, 2},};
        Grafo g = new Grafo(4);
        g.caricaArco(nodi);
        g.stampa();
    }
}