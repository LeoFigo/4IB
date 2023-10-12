import java.io.*;

public class Main {
    public static void main(String[] args) {

        PrintQueue queue = new PrintQueue();
        int numeroFile = 10;


        for (int i = 0; i < numeroFile; i++) {
            File file = TextFile.createFile("file_" + i + ".txt");
            TextFile.writeRandom(file);
        }

        for (int i = 0; i < numeroFile; i++) {
            File file = new File("file_" + i + ".txt");
            queue.queueFile("INIZIO" + "\n" + TextFile.read(file) + "FINE" + "\n");
        }

        File output = new File("output.txt");
        TextFile.write(output, queue.printQueue());
    }
}