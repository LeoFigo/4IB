import java.io.File;

public class Main {
    public static void main(String[] args) {
        File file = new File("./fileTesto.txt");
        FileTesto.scriviFile(file, "ciao simpatico ragazzo");
        System.out.println(FileTesto.leggiFile(file));

    }
}