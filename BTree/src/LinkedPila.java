
public class LinkedPila {
    Node head;
    int numItem = 0;

    public void push(Integer c) {
        Node node = new Node(c);
        node.next = head;
        head = node;
        numItem++;
    }

    public Integer pop() {
        Integer item = null;
        if (numItem > 0) {
            item = head.data;
            head = head.next;
            numItem--;
        }
        return item;

    }

    static class Node {
        Node next;
        Integer data;

        Node(Integer data) {
            this.data = data;
        }
    }

    public Integer top() {
        if (numItem == 0) {
            return head.data;
        } else {
            return null;
        }
    }

    public boolean isEmpty() {
        if (numItem == 0) {
            return true;
        } else {
            return false;
        }
    }
}

