`use strict`

const shoppingList = [
    'pane',
    'latte',
    'cereali',
    'verdure',
    'affettati',
];
console.log(shoppingList);

let i = -1;
while( i < shoppingList.length ) {
console.log(shoppingList[i]);
i++;

const listItem = document.createElement("li");
listItem.innerHTML = shoppingList[i];

/* inserisco l'elemento appena creato nella lista */
const listContainer = document.getElementById("list");
listContainer.append(listItem);
}
  
