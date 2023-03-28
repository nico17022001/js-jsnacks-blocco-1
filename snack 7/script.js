/*
Passaggi

- Creo la costante con valore 2 
- Creo un ciclo che mi vada ad incrementare l'esponente 
- Creo la costante con il valore dell'esponente 
- stampo in pagina le potenze di 2 fino al massimo valore di 1000

*/

const contenitorePotenze =  document.querySelector("#contenitorePotenze")

const  valoreDaElevare = 2


let esponente = 1 

while (valoreDaElevare ** esponente < 1000){
  
  contenitorePotenze.innerHTML += valoreDaElevare ** esponente + `<br>`
  
  esponente ++;
}




