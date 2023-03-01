const listaSpesa = ["latte", "cereali", "carne", "birra", "sigarette"];

console.log(listaSpesa);

const containerElement = document.getElementById("container");


// provo a farlo con un ciclo for
for(let i = 0; i < listaSpesa.length; i++) {

  // genero un elemento html di tag <li>
  let newListElement = document.createElement('li');
  newListElement.innerText = listaSpesa[i];

  // lo imposto come figlio di containerElement
  containerElement.append(newListElement);
}