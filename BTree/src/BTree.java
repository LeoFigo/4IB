import java.util.ArrayList;

public class BTree {
    ArrayList<Integer> list = new ArrayList<Integer>();

    public void add(Integer e, int index) {
        if(index >= list.size()) {
            for (int i = list.size(); i < index; i++) {
                list.add(null);
            }
        }
        list.set(index, e);
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
        int[] preOrder = new int[list.size()];
        LinkedPila stack = new LinkedPila();
        int index = 0;
        boolean visited = true;
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i) != null) {
                stack.push(list.get(i));
            }
        }
        return preOrder;
    }

    @Override
    public String toString() {
        return "BTree{" +
                "list=" + list +
                '}';
    }
}
