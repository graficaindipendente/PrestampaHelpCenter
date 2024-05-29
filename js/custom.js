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
caricaMarkdown('https://gist.githubusercontent.com/graficaindipendente/4096496146dcd01eb1be3e472a91dffb/raw/6c30d5cfade142b606497750359173b1076edb9c/ALERTs_olalla.md', 'ultimora');
caricaMarkdown('https://gist.githubusercontent.com/graficaindipendente/4096496146dcd01eb1be3e472a91dffb/raw/835857a95f7b103f82362861d26fa850d8897709/NEW.md', 'new');
caricaMarkdown('vers.md', 'vers');