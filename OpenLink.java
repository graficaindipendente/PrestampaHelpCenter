import java.awt.Desktop;
import java.net.URI;
import java.util.Scanner;

public class OpenLink {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Inserisci un codice di 6 cifre: ");
        String code = scanner.nextLine();

        // Controlla che il codice sia esattamente di 6 cifre
        while (!code.matches("\\d{6}")) {
            System.out.print("Codice non valido. Inserisci un codice di 6 cifre: ");
            code = scanner.nextLine();
        }

        String url = "https://www.olalla.it/wp-admin/post.php?post=" + code + "&action=edit";
        System.out.println("Apertura del link: " + url);

        try {
            // Apri l'URL nel browser predefinito
            Desktop.getDesktop().browse(new URI(url));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
