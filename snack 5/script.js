/*
Passaggi

1)Creo un array vuoto
2)Creare un ciclo che si ripete 6 volte 
3)Creare un promt che mi chieda di inserire un numero
4)creare una condizione nella quale se il numero inserito è dispari allora si aggiunge all array iniziale 


*/

let libreriaNumeri = [
]

for (let index = 0; index <  6; index++) {
  const inserisciNumero = prompt("inserisci un numero")

  if(inserisciNumero % 2 == 1){
    console.log("Dispari")
    libreriaNumeri.push(inserisciNumero);
  }
}

console.log(libreriaNumeri);





