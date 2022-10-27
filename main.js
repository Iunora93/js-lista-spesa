`use strict`

const shoppingList = [
    'pane',
    'latte',
    'cereali',
    'verdure',
    'affettati',
];
console.log(shoppingList);

const listContainer = document.getElementById("list");
let i = 0;
while( i < shoppingList.length ) {
console.log(shoppingList[i]);
i++;
const listItem = document.createElement("li");
listItem.innerHTML = shoppingList[i];
/* inserisco l'elemento appena creato nella lista */
    
listContainer.append(listItem);
}
  
