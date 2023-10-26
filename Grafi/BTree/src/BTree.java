import java.util.ArrayList;

public class BTree {
    ArrayList<Integer> list = new ArrayList<Integer>();
    public void add(Integer e) {
      list.add(e);
    }

    int search(Integer val) {
        for (int i = 0; i < list.size(); i++) {
            if(val == list.get(i)) {
                return i;
            }
        }
        return -1;
    }
    public int leftChild(int val) {
        int n = search(val);
        if(n == -1) {
            return -2;
        }
        if(list.get(2 * n + 1) == null) {
            return -1;
        } else {
            return 2 * n + 1;
        }
    }
    public int rightChild(int val) {
        int n = search(val);
        if(n == -1) {
            return -2;
        }
        if(list.get(2 * n + 2) == null) {
            return -1;
        } else {
            return 2 * n + 2;
        }
    }


}
