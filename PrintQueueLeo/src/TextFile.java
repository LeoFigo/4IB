import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
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
    static void writeR(File file) {
        try{
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw
        }
    }

}
