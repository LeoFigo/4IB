import java.io.*;
import java.lang.reflect.Field;

public class TextFile {

    static void write(File file, String line) {
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(line);
            bw.close();
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
    }

    static String read(File file) {
        String line = null, testo = "";
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(file));

            while ((line = reader.readLine()) != null) {
                testo = testo + line + "\n";
            }
            reader.close();
        } catch (FileNotFoundException FNFE) {
            throw new RuntimeException(FNFE);
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
        return testo;
    }

    static void writeRandom(File file) {
        int max = 10;
        int min = 1;
        int range = max - min + 1;
        int rand = (int)(Math.random() * range) + min;
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            for (int i = 0; i <= rand; i++) {
                bw.write("riga" + i + "\n");
            }
            bw.close();
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
    }

    static int numRighe(File file) {
        int i = 0;
        try {
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String line = "";
            while((line = reader.readLine()) != null) {
            i++;
            }
            reader.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return i;

    }

        /* OUTDATED
    static File createFile(String nameFile) {
        File file = new File(nameFile);
        try {
            file.createNewFile();
        } catch (Exception e) {

        }
        return file;
    }
*/
}
