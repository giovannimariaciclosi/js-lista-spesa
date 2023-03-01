/*

Consegna:
Data una lista della spesa (memorizzata in un array), stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, 
all'interno ciclo while

*/

/*
- creo array lista della spesa
- 
*/


const listaSpesa = ["latte", "cereali", "carne", "birra", "sigarette", "mele"];

console.log(listaSpesa);

const containerElement = document.getElementById("container");


// provo a farlo con un ciclo for
// for(let i = 0; i < listaSpesa.length; i++) {

//   // genero un elemento html di tag <li>
//   let newListElement = document.createElement('li');
//   newListElement.innerText = listaSpesa[i];

//   // lo imposto come figlio di containerElement
//   containerElement.append(newListElement);
// }

// provo a farlo con un ciclo while
let contatore = 0;
console.log(contatore);

// while (listaSpesa.length) {

//   contatore++;

//   let newListElement = document.createElement('li');
//   newListElement.innerText = listaSpesa[contatore];
//   containerElement.append(newListElement);
  
// }


// provo con il ciclo do-while
do {
  let newListElement = document.createElement('li');
  newListElement.innerText = listaSpesa[contatore];
  containerElement.append(newListElement);
} while (listaSpesa.length);