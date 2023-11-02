import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        BTree bTree = new BTree();
        bTree.add(7, 0);
        bTree.add(8, 1);
        bTree.add(10, 2);
        //bTree.add(null);
        //bTree.add(null);
        bTree.add(66, 5);
        bTree.add(9, 6);


        System.out.println(bTree);
        System.out.println();
        System.out.println(bTree.search(9));
        System.out.println(bTree.search(333));
        System.out.println(bTree.leftChild(10));
        System.out.println(bTree.rightChild(10));
        System.out.println(bTree.rightChild(8));
        System.out.println(bTree.leftChild(8));
        System.out.println(bTree.leftChild(333));

    }
}