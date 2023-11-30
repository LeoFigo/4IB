import java.io.*;
public class TextFile {
    private String nomeFile;
    private FileWriter writer;
    private PrintWriter bfw;
    private FileReader reader;
    private BufferedReader bfr;

    public TextFile(String nomeFile) {
        this.nomeFile = nomeFile;
    }
    public void createFile() throws IOException {
        writer = new FileWriter(nomeFile);
        bfw = new PrintWriter(writer);
    }
    public void println(String riga) {
        bfw.println(riga);
    }
    public void openFile() throws IOException{
        reader = new FileReader(nomeFile);
        bfr = new BufferedReader(reader);
    }
    public String readln() throws IOException {
        String riga = bfr.readLine();
        return riga;
    }
    public void flush() {bfw.flush();}
    public void closeW() throws IOException {
        bfw.close();
        writer.close();
    }
    public void closeR() throws IOException {
        bfr.close();
        reader.close();
    }
}
