public class VocabIng {
    public Node root;

    public void add(String value) {
        root = addRecursive(root, value);
    }

    private Node addRecursive(Node current, String value) {
        if (current == null) {
            return new Node(value);
        }
//compare to
        if (value.compareTo(current.value) < 0) {
            current.left = addRecursive(current.left, value);
        } else if (value.compareTo(current.value) > 0) {
            current.right = addRecursive(current.right, value);
        } else {
            //value already exists
            return current;
        }

        return current;
    }

    public void traverseInOrder(Node node) {
        if (node != null) {
            traverseInOrder(node.left);
            System.out.print(" " + node.value);
            traverseInOrder(node.right);
        }
    }
    private void loadDictionary() {
        
    }

    static class Node {
        String value;
        Node left;
        Node right;

        Node(String value) {
            this.value = value;
            right = null;
            left = null;
        }
    }
}
