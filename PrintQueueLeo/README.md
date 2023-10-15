## TextFile
La classe `TextFile` viene utilizzata per interagire con un file, tutti i suoi metodi
sono statici, e richiedono una classe File come parametro:
```java
    static void write(File file, String line)
```
Questo metodo scrive la stringa desiderata sul file desiderato
```java
    static String read(File file)
```
Questo metodo legge il contenuto di un file desiderato e lo ritorna come `String`
```java
    static void writeRandom(File file)
```
Questo metodo gestisce la scrittura di un numero casuale di parole in un file desiderato
```java
    static int numRighe(File file)
```
Questo metodo ritorna il numero di parole presenti in un file

## PrintQueue
La classe `PrintQueue` gestisce una coda di Stringhe fatta di `Node`
che compongono una lista:
```java
    public void queueFile (String content)
```
Questo metodo mette in coda il contenuto di una stringa passata come parametro
```java
    public String printQueue()
```
Questo metodo ripercorre la lista e ritorna una stringa contente
il contenuto di tutti i Nodi percorsi.

### Inoltre questa classe contiene una nested class `Node`
```java
    static class Node {
    Node next;
    String string;
    Node(String string) {
        this.string = string;
        next = null;
    }
}
```
## Main
la classe main contiene il metodo main che viene eseguito all'avvio del programma,
```java
public class Main {
    public static void main(String[] args) {
        //decido il numero di file da creare
        int numeroFile = 10;

        //Creo una lista non prioritaria
        PrintQueue queue = new PrintQueue();

        //Creo una lista prioritaria
        PrioPrintQueue prioQueue = new PrioPrintQueue();

        //creo dei file con dentro numero casuale di righe
        for (int i = 0; i < numeroFile; i++) {
            File file = TextFile.createFile("file_" + i + ".txt");
            TextFile.writeRandom(file);
        }

        //metto in coda non prioritaria i file
        for (int i = 0; i < numeroFile; i++) {
            File file = new File("file_" + i + ".txt");
            queue.queueFile("INIZIO" + "\n" + TextFile.read(file) + "FINE" + "\n");
        }

        //scrivo sul file output il contenuto della coda
        File output = new File("output.txt");
        TextFile.write(output, queue.printQueue());
```

### PrioPrintQueue
TO_FIX
```java
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
```