//TO_FIX
public class PrioPrintQueue {
    Node tail;
    Node head;

    public PrioPrintQueue() {
        tail = head = null;
    }

    //add an element
    public void add(int priority, String value) {
        Node newN = new Node(value, priority);
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
                    i++;
                } else {
                    current = current.next;
                    i++;
                }

            }
            if (current.priority > priority) {
                //inserisco a sx
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
        Node current = tail;
        String s = "";
        while (current != null) {
            s = s + "*****" + current.priority + "*****" + "\n" + current.value + "******FINE******" + "\n";
            current = current.next;
        }
        return s;
    }



    static class Node {
        String value;
        int priority;
        Node next;

        public Node(String value, int priority) {
            this.priority = priority;
            this.value = value;
            next = null;
        }
    }
}
