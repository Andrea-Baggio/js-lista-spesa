const arrGroceryList = [];

const eleGroceryList = document.querySelector('.grocery-list');
const inputGroceryItem = document.querySelector('#input-grocery');
const eleGroceryForm = document.querySelector('form');

eleGroceryForm.addEventListener('submit', function(event) {
	event.preventDefault();
	arrGroceryList.push(inputGroceryItem.value);
	eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;
	inputGroceryItem.value = '';
});

let i = 0; 
while (i < arrGroceryList.length) {
	eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
}
