import java.io.*;

public class FileTesto {
    public static String leggiFile(File file) {
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
    public static void scriviFile(File file, String line) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(file));
            writer.write(line);
            writer.close();
        } catch (FileNotFoundException FNFE) {
            throw new RuntimeException(FNFE);
        } catch (IOException IOE) {
            throw new RuntimeException(IOE);
        }
        return;
    }
}
