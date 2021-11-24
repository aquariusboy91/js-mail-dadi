// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const user_mail = prompt("inserisci la tua email");

const lista_utenti = ["baltazar@yahoo.it" , "gianfilippo@yahoo.it", "romualdo@yahoo.it" , "gerry@yahoo.it"];


for(i = 0; i < lista_utenti.length; i++) {
    if (user_mail == lista_utenti[i]) {
        console.log("sei nella lista");   

}   else if (user_mail != lista_utenti[i]) {
        console.log("non sei nella lista");
    }
}





