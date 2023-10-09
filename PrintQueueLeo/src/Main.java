import java.io.*;

public class Main {
    public static void main(String[] args) {
        //creafile
        int numeroFile = 10;
        for (int i = 0; i < numeroFile; i++) {
            File file = TextFile.createFile("file_" + i + ".txt");

        }



        PrintQueue queue = new PrintQueue();




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