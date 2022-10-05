const inserisci = "inserisci il tuo"
const inserisci_nome = (prompt(inserisci + " " + "nome"));
const inserisci_cognome = (prompt(inserisci + " " + "cognome"));
const inserisci_colore = (prompt(inserisci + " " + "colore preferito"));
const currentYear_last = 22
// Chiedi all’utente il suo nome
// console.log("inserisci il tuo nome")


// poi chiedi il suo cognome
// console.log("inserisci il tuo cognome")


// poi chiedi il suo colore preferito
// console.log("inserisci il tuo colore preferito")


// Infine scrivi sulla pagina nomecognomecolorepreferito22

document.getElementById('input_name').innerHTML = inserisci_nome + inserisci_cognome + inserisci_colore + currentYear_last;