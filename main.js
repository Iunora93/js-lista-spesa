`use strict`

const shoppingList = [
    'pane',
    'latte',
    'cereali',
    'verdure',
    'affettati'
];
console.log(shoppingList);

let i = 0;
while( i < shoppingList.length ) {
console.log(shoppingList[i]);

/* prendo la classe per crearci l'elemento all'interno  */
const listContainer = document.getElementById("list");
const listItem = document.createElement("li");
listItem.innerHTML = shoppingList[i];

/* inserisco l'elemento appena creato nella lista */
listContainer.append(listItem);
i++;
}
  
