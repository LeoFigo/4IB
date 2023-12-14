public class BinaryTree<E> {
    private Node<E> root;
    public BinaryTree(){
        root = null;
    }
    public BinaryTree(Node<E> root) {
        this.root = root;
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
