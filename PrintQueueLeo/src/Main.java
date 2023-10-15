import java.io.*;

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




        //TO_FIX
        //metto in coda prioritaria i file
        for (int i = 0; i < numeroFile; i++) {
            File file = new File("file_" + i + ".txt");
            prioQueue.add(TextFile.numRighe(file),"INIZIO" + "\n" + TextFile.read(file) + "FINE" + "\n");
        }

        //scrivo sul file outputPrio il contenuto della coda
        File outputPrio = new File("outputPrio.txt");
        TextFile.write(outputPrio, prioQueue.printQueuePrio());


    }
}