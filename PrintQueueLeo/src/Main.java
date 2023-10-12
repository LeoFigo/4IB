import java.io.*;

public class Main {
    public static void main(String[] args) {

        //creafile
        PrintQueue queue = new PrintQueue();
        int numeroFile = 10;
        File output = new File("output.txt");

        for (int i = 0; i < numeroFile; i++) {
            File file = TextFile.createFile("file_" + i + ".txt");
            TextFile.writeRandom(file);

            //queue.queueFile(TextFile.read(file));
        }

        for (int i = 0; i < numeroFile; i++) {
            File file = new File("file_" + i + ".txt");
            queue.queueFile("INIZIO" + "\n" + TextFile.read(file)  + "FINE");

        }
        System.out.println(queue.printQueue());

        /*TextFile.write(output, "******INIZIO******" + "\n");
        TextFile.write(output, TextFile.read(file));
        TextFile.write(output, ("******FINE*******" + "\n"));*/
    }
}