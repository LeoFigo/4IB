import java.io.File;

public class PrintQueue {
    Node head;
    public void queueFile (String content) {
        Node newN = new Node(content);
        if (head == null) {
            head = newN;
        } else {
            Node last = head;
            while (last.next != null) {
                last = last.next;
            }
            last.next = newN;
        }
    }
    String printQueue() {
        Node current = head;
        String s = "";
        while (current != null) {
            s = current.string;
            current = current.next;
        }
        return s;
    }
    static class Node {
        Node next;
        String string;
        Node(String string) {
            this.string = string;
            next = null;
        }
    }
}
