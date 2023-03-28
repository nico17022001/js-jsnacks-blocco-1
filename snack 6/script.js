/*
Passaggi
- Creare un promt dove chiedo un numero all'utente 
- Creare una condizione per verificare che il dato inserito sia un numero 
- Creo un ciclo dove incremento i numeri da 1 al numero scelto dall'utente 
- Vado a stampare in un messaggio il cubo di tutti i numeri generati 

*/

const numeroInserito = prompt("Inserisci numero");

const numeriStampati = document.querySelector("#numeriStampati")

if (isNaN(numeroInserito)){
  console.log("Insersci un numero che non contenga lettere")
}

for (let index = 1; index <= numeroInserito; index++) {
  numeriStampati.innerHTML += index + "-->" + index **3 + `<br>` 
}


