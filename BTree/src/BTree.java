import java.util.ArrayList;

public class BTree {
    ArrayList<Integer> list = new ArrayList<Integer>();

    public void add(Integer e, int index) {

        if (index >= list.size()) {
            for (int i = list.size(); i <= index; i++) {
                list.add(null);
            }
        }
        if (list.get((index - 1) / 2) == null && index != 0) {
            System.out.println("Il padre non esiste");
            return;
        } else {
            list.set(index, e);
        }
    }

    int search(Integer val) {
        for (int i = 0; i < list.size(); i++) {
            if (val == list.get(i)) {
                return i;
            }
        }
        return -1;
    }
    public int leftChild(int val) {
        int n = search(val);
        if (n == -1) {
            return -2;
        }
        if (list.get(2 * n + 1) == null) {
            return -1;
        } else {
            return 2 * n + 1;
        }
    }

    public int rightChild(int val) {
        int n = search(val);
        if (n == -1) {
            return -2;
        }
        if (list.get(2 * n + 2) == null) {
            return -1;
        } else {
            return 2 * n + 2;
        }
    }

    public int[] preOrder() {
        LinkedPila stack = new LinkedPila();
        ArrayList<Integer> order = new ArrayList<>();
        //caso vuoto
        if (list.isEmpty()) {
            return new int[0];
        }
        //inizio algoritmo
        stack.push(0);
        //(si potrebbe anche usare un do-while)
        while (!stack.isEmpty()) {
            //salvo il valore della variabile poppata (la prima volta pusho 0 apposta)
            int index = stack.pop();
        //aggiunge al risultato (array order)
            if (list.get(index) != null) {
                order.add(list.get(index));

        //aggiungono allo stack
            //caso destro
                //verifica che il nodo sia dentro la lista e che non sia null
                if (index * 2 + 2 < list.size() && list.get(index * 2 + 2) != null) {
                    stack.push(index * 2 + 2);
                }
            //caso sinistro
                //verifica che il nodo sia dentro la lista e che non sia null
                if (index * 2 + 1 < list.size() && list.get(index * 2 + 1) != null) {
                    stack.push(index * 2 + 1);
                }
            }
        }

        return castToIntArray(order);
    }

    @Override
    public String toString() {
        return "BTree {" +
                "list = " + list +
                '}';
    }
    //la consegna chiede di creare un metodo che ritorni un array int, questo metodo trasforma la lista integer in array di int
    int[] castToIntArray(ArrayList result){
        int[] resultArray = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            resultArray[i] = (int) result.get(i);
        }
        return resultArray;
    }
    //toString del metodo preOrder
    String toPreOrder(){
        String s = "";
        int[] array = preOrder();
        for (int i = 0; i < preOrder().length; i++) {
            s += array[i]+" | ";
        }
        return s;
    }
}
