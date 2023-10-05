import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        int numeroFile = 10;
        for (int i = 0; i < numeroFile; i++) {
            TextFile.createFile("file_" + i + ".txt");
        }
        int numR = (int) (Math.random() * (10-1));
        for (int i = 0; i < args.length; i++) {
            TextFile.writeR(TextFile.createFile("file_" + i + ".txt"));
        }
        /* for (int i = 0; i < numFile; i++) {
                int rnd = (int) (Math.random() * (10-1));
           try {
                BufferedWriter writer = new BufferedWriter(new FileWriter("file" + i + ".txt"));
            
            for (int j = 0; j <= rnd; j++) {
                writer.write("linea numero " +j + "\n");
            }
            writer.close();
        } catch (FileNotFoundException FNFE) {
            throw new RuntimeException(FNFE);
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        } 
        } */
    }
}