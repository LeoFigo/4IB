import java.io.File;

public class PrintQueue {
    Node head;
    Node last;
    public void queueFile (String content) {
        Node newN = new Node(content);
        if (head == null) {
            head = newN;
        } else {
            last = head;
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
            s = s + "*****INIZIO*****" + "\n" + current.string + "******FINE******" + "\n";
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
