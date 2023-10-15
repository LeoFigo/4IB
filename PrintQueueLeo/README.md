# Consegna
## facile:
Simulare una coda di stampa per una collezione finita di file di testo 
(creati in precedenza anche con un'utility in modo random):
- i file vengono accodati inserendoli in un qualche ordine in una coda,
classe "PrintQueue", ogni file è il contenuto di un nodo di tale coda, 
classe nested "Node",
- terminato l'inserimento in coda dei file viene prodotto un unico file di testo 
"Print.txt" (che simula la stampa), il contenuto dei vari file viene contenuto 
tra una riga iniziale '***** INIZIO ***** ' e una riga finale  ' ***** FINE *****', 
l'ordine in cui viene presentato il contenuto dei vari file dentro "Print.txt" 
rispetta quello della coda.

## media:
Simulare una coda di stampa con priorità per una collezione finita di file di testo
(creati in precedenza anche con un'utility in modo random):
- ad ogni file di testo viene assegnato un valore, denominato peso del file,
che corrisponde al numero di parole in esso contenute,
- i file vengono accodati inserendoli in una coda con priorità in ordine di
peso non crescente, classe
  "PriorityPrintQueue", ogni file ed il suo peso costituiscono il contenuto
di un nodo di tale coda, classe
  nested "Node",
- terminato l'inserimento in coda dei file viene prodotto un unico
file di testo "PriorityPrint.txt" (che simula la stampa), il contenuto dei
vari file viene contenuto tra una riga iniziale '***** [peso file] *****' e una riga
finale ' ***** FINE *****'. L'ordine in cui viene presentato il contenuto dei vari file
dentro "PriorityPrint.txt" rispetta quello della coda.

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
Questo metodo ritorna il numero di parole presenti in un file desiderato

## PrintQueue
La classe `PrintQueue` gestisce una coda di `Node` contenenti una Stringa
che compongono una lista:
```java
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
}
```
Questo metodo mette in coda il contenuto di una stringa passata come parametro
```java
String printQueue() {
    Node current = head;
    String s = "";
    while (current != null) {
        s = s + "\n" + "inizio" + "\n" + current.string + "fine";
        current = current.next;
    }
    return s;
}
```
Questo metodo ripercorre la lista e ritorna una stringa contente
il contenuto di tutti i Nodi percorsi inseriti tra la parola
*** inizio *** e la parola *** fine ***.

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
e si occupa di creare le istanze degli oggetti `PrintQueue` e `PrioPrintQueue`,
di chiamare i medoti statici della classe `TextFile` per creare e riempire casualmente
i file, mettere i file nelle rispettive code e chiamare il metodo di scrittura sul file
output
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
            File file = new File("file_" + i + ".txt");
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
I file creati si chiamano `file_'numero'.txt` e i file di output di chiamano `Print.txt`
e `PriorityPrint.txt`


### PrioPrintQueue
#### Inserisco questa parte anche se non funziona come dovrebbe >:(
(non capisco perché)

```java
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
```

