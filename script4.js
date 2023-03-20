/* Capture 10 items para compor uma lista de supermercado
apos capturar os 10 items, imprima-os, separados por virgula
*/

let items = [];

for (let item = 0; item < 10; item++) {
   let itemName = prompt("Digite o item" + (item + 1))
   items[item] = itemName
}
alert(items)
