// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let rand_player = Math.floor(Math.random() * 7);
console.log (rand_player);

let rand_pc = Math.floor(Math.random() * 7);
console.log(rand_pc);

if (rand_player < rand_pc) {
    console.log ("Ha vinto il computer");
} else if (rand_player > rand_pc){
    console.log ("ha vinto il player");
} else {
    console.log ("Parità");
}