// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const container = document.querySelector ('.container');

const cont_result = document.querySelector ('.cont_result');
cont_result.className = "container";
cont_result.style.color = "red";

let rand_player = Math.floor(Math.random() * 7);
container.innerHTML += (`<h1>Il tuo numero: ${rand_player}<\h1>`);

let rand_pc = Math.floor(Math.random() * 7);
container.innerHTML += (`<h1>Il numero del pc: ${rand_pc}<\h1>`);

if (rand_player < rand_pc) {
     cont_result.innerHTML = `<h1>Hai perso<\h1>`;
    
} else if (rand_player > rand_pc){
    cont_result.innerHTML = `<h1>Hai vinto<\h1>`;
} else {
    cont_result.innerHTML = `<h1>Parità<\h1>`;
}