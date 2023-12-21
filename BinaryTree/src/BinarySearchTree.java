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
        if (!search(val, root)) {
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
    public void inserisciIterattivo(Integer valore) {
        if (root == null) {
            root = new Node<Integer>(valore);
        } else {
            Node<Integer> current = root;
            while (current != null) {
                if (valore < current.getValue()) {
                    if (current.getLeft() == null) {
                        current.setLeft(new Node<Integer>(valore));
                        return;
                    } else {
                        current = current.getLeft();
                    }
                } else if (valore > current.getValue()) {
                    if (current.getRight() == null) {
                        current.setRight(new Node<Integer>(valore));
                        return;
                    } else {
                        current = current.getRight();
                    }
                } else {
                    System.out.println("valore già presente");
                    return;
                }
            }
        }
    }

    public void deleteInterattivo(Integer valore) {
        if (!search(valore, root)) {
            System.out.println("valore " + valore + " non presente");
        } else {
            Node<Integer> current = root;
            Node<Integer> parent = null;
            while (current != null) {
                if (valore < current.getValue()) {
                    parent = current;
                    current = current.getLeft();
                } else if (valore > current.getValue()) {
                    parent = current;
                    current = current.getRight();
                } else {
                    if (current.getLeft() == null) {
                        if (parent == null) {
                            root = current.getRight();
                        } else {
                            if (current.getValue() < parent.getValue()) {
                                parent.setLeft(current.getRight());
                            } else {
                                parent.setRight(current.getRight());
                            }
                        }
                    } else if (current.getRight() == null) {
                        if (parent == null) {
                            root = current.getLeft();
                        } else {
                            if (current.getValue() < parent.getValue()) {
                                parent.setLeft(current.getLeft());
                            } else {
                                parent.setRight(current.getLeft());
                            }
                        }
                    } else {
                        Node<Integer> min = findMin(null,current.getRight());
                        current.setValue(min.getValue());
                        current.setRight(deleteRecursive(min.getValue(), current.getRight()));
                    }
                    return;
                }
            }
        }
    }
}
