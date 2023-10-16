public class Grafo {
    char[] alfabeto = {'A', 'B', 'C', 'D'};
    int nodi[][];
    public Grafo(int n) {
        nodi = new int[n][n];
    }
    //carico nodi non orientati
    public void caricaNodo(int n[][]) {
        for (int i = 0; i < n.length; i++) {
            nodi[n[i][0]][n[i][1]] = 1;
        }
        for (int i = 0; i < n.length; i++) {
            nodi[n[i][1]][n[i][0]] = 1;
        }
    }
    public void stampa() {
        System.out.println("  A " + "B " + "C " + "D");
        for (int i = 0; i < nodi.length; i++) {
            System.out.print(alfabeto[i] + " ");
            for (int j = 0; j < nodi[i].length; j++) {
                System.out.print(nodi[i][j] + " ");
            }
            System.out.println();
        }
    }
}
