public class BSTree {
    BTree tree = new BTree();
    public void insert(Integer val) {
        int i = 0;
        if(tree.getSize() == 0) {
            tree.add(val, 0);
            return;
        }
        if(tree.search(val) == val) {
            return;
        }
        while(i < tree.getSize()) {
            if(val < tree.getVal(i)) {
                i = i * 2  + 1;
            } else {
                i = i * 2 + 2;
            }
            if(tree.getVal(i) == null) {
                tree.add(val, i);
                return;
            }
        }

    }
}
