import java.io.*;
import java.lang.reflect.Field;

public class TextFile {
    static File createFile(String nameFile) {
        File file = new File(nameFile);
        try {
            file.createNewFile();
        } catch (Exception e) {
            //  TODO: handle exception
        }
        return file;
    }
    static void write(File file, String line) {
        try{
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(line);
            bw.close();
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
        return;
    }
    static String read(File file) {
        String line = null, testo = "";
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(file));

            while ((line = reader.readLine()) != null) {
                testo = testo + line;
            }
        } catch (FileNotFoundException FNFE) {
            throw new RuntimeException(FNFE);
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
        return testo;
    }
    static void writeRandom (File file) {
        int numR = (int) (Math.random() * (10-1));
        try{
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            for (int i = 0; i <= numR; i++) {
                bw.write(i);
            }
            bw.close();
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
    }

}
