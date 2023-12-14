public class BinarySearchTree<E extends Comparable<E>> extends BinaryTree<Integer> {
    private Node<Integer> root;
    void insert(Integer val)  {
        root = insertRic(val, root);
    }

    public Node insertRic(Integer val, Node r) {
        if(r == null) {
            r = new Node<Integer>(val);
            Node rootR = r;
        }
        if(val.compareTo((Integer) r.getValue()) < 0) {
            if(val.compareTo((Integer) r.getLeft().getValue()) >0) {
                r.setLeft(insertRic(val, r.getLeft()));
            } else if(val.compareTo((Integer) r.getValue()) > 0){
                r.setRight(insertRic(val, r.getRight()));
            }
        }
        return r;
    }
    public void delete(Integer val) {
        if (!cerca(val, root)) {
            System.out.println("valore " + val + " non presente");
        } else {
            root = deleteRecursive(val, root);
        }
    }

    public Node<Integer> deleteRecursive(Integer val, Node<Integer> r) {
        if (r == null) {
            return null;
        }
        if (val < r.getValue()) {
            r.setLeft(deleteRecursive(val, r.getLeft()));
        } else if (val > r.getValue()) {
            r.setRight(deleteRecursive(val, r.getRight()));
        } else {
            if (r.getLeft() == null) {
                return r.getRight();
            } else if (r.getRight() == null) {
                return r.getLeft();
            }
            r.setValue(minValue(r.getRight()));
            r.setRight(deleteRecursive(r.getValue(), r.getRight()));
        }
        return r;
    }

    public Integer minValue(Node<Integer> r) {
        Integer min = r.getValue();
        while (r.getLeft() != null) {
            min = r.getLeft().getValue();
            r = r.getLeft();
        }
        return min;
    }
}
