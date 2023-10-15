//TO_FIX
public class PrioPrintQueue {
    Node tail;
    Node head;

    public PrioPrintQueue() {
        tail = head = null;
    }

    //add an element
    public void add(int priority, String val) {
        Node newN = new Node(val, priority);
        if (head == null) {
            head = newN;
            tail = head;
        } else {
            Node current = tail;
            Node save = tail;

            boolean cond = true;
            int i = 0;
            while (cond) {
                if ((current.priority > priority) || (current.next == null)) {
                    cond = false;
                } else {
                    current = current.next;
                    i++;
                }
            }
            if (current.priority > priority) {
                if (i == 1) {
                    newN.next = current;
                    tail = newN;
                } else {
                    save.next = newN;
                    newN.next = current;
                }
            } else {
                newN.next = current.next;
                current.next = newN;
            }
        }

    }
    public String printQueuePrio() {
        Node current = head;
        String s = "";
        while (current != null) {
            s += current.value;
            current = current.next;
        }
        return s;
    }



    static class Node {
        String value;
        int priority;
        Node next;

        public Node(String riga, int priority) {
            this.priority = priority;
            this.value = value;
            next = null;
        }
    }
}
