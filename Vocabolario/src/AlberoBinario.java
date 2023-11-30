import java.io.IOException;
import java.util.ArrayList;

public class AlberoBinario {
    public Node root;

    private ArrayList<String> vocabIng = new ArrayList<>();
    private ArrayList<String> vocabIta = new ArrayList<>();
    private int conta;

    public AlberoBinario() {root = null;}
    public Node getRoot() {return root;}
    public void add(String value) {
        root = addRecursive(root, value);
    }

    private Node addRecursive(Node current, String value) {
        if (current == null) {
            return new Node(value);
        }
//compare to
        if (value.compareTo(current.ing) < 0) {
            current.left = addRecursive(current.left, value);
        } else if (value.compareTo(current.ing) > 0) {
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
            System.out.print(" " + node.ing);
            traverseInOrder(node.right);
        }
    }


    static class Node {
        String ing;
        String ita;
        Node left;
        Node right;

        Node(String value) {
            TextFile tx = new TextFile("IngleseItaliano.csv");
            String[] a = new String[0];
            try {
                a = tx.readln().split(";");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            ing = a[0];
            ita = a[1];
            this.ing = value;
            right = null;
            left = null;
        }
    }
}
