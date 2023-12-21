public class BinaryTree<E> {
    private Node<E> root;
    public BinaryTree(){
        root = null;
    }
    public BinaryTree(Node<E> root) {
        this.root = root;
    }
    public Boolean search(Integer val, Node<E> node) {
        if(node == null) {
            return false;
        } else if (node.getValue().equals(val)) {
            return true;
        } else {
            return search(val, node.getLeft()) || search(val, node.getRight());
        }
    }
    public Integer findMin(Integer i, Node<Integer> node) {
        if(node == null) {
            return null;
        } else if (i.compareTo(node.getValue()) < 0) {
            return i;
        } else {
            return findMin(i, node.getLeft());
        }
    }


    public static class Node<E> {

        private E value;
        private Node<E> left;
        private Node<E> right;

        public Node(E value) {
            this.value = value;
        }

        public void setValue(E value) {
            this.value = value;
        }

        public void setLeft(Node<E> left) {
            this.left = left;
        }

        public void setRight(Node<E> right) {
            this.right = right;
        }

        public E getValue() {
            return value;
        }

        public Node<E> getLeft() {
            return left;
        }

        public Node<E> getRight() {
            return right;
        }

    }
}
