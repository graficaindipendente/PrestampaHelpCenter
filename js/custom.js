$(document).ready(function() {
	// Start writing your custom functions here.
	// All the necessary pluigns are already loaded.
});

// Funzione per caricare e convertire il contenuto di un file Markdown
function caricaMarkdown(file, elementoId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore nel caricamento del file: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            // Converti il testo Markdown in HTML usando Marked
            const htmlContent = marked.parse(text);
            document.getElementById(elementoId).innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
}

// Carica i contenuti nei rispettivi elementi
caricaMarkdown('1.md', '1md');
caricaMarkdown('2.md', '2md');
caricaMarkdown('3.md', '3md');