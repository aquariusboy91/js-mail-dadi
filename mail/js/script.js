// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const user_mail = prompt("Inserisci la tua email");

const lista_utenti = ["baltazar@yahoo.it" , "gianfilippo@yahoo.it", "romualdo@yahoo.it" , "gerry@yahoo.it"];

const container = document.querySelector (".container");

convalida = false; 

for(i = 0; i < lista_utenti.length; i++) { 

    if (user_mail == lista_utenti[i]) {
       convalida = true;
    }
}

    if (convalida == false) {
        container.innerHTML = (`<h1>Accesso negato<\h1>`);
        container.style.color = "red";
    } else if (convalida == true) {
        container.innerHTML = (`<h1>Accesso consentito<\h1>`);
        container.style.color = "lightblue"
    }






