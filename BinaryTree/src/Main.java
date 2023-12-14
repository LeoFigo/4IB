public class Main {
    public static void main(String[] args) {
        BinaryTree.Node<Integer> root = new BinaryTree.Node<>(1);
        BinaryTree.Node<Integer> left = new BinaryTree.Node<>(2);
        root.setLeft(left);
        BinaryTree.Node<Integer> right = new BinaryTree.Node<>(2);
        root.setRight(right);

    }
}