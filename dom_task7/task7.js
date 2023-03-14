var itemList = document.querySelector('#items');
// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);

//lastChild
console.log(itemList.lastChild)
//lastElementChild
console.log(itemList.lastElementChild);

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);

//createElement
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//setAttribute
newDiv.setAttribute('title', 'Hello Div');
//createtextnode
var newDivText = document.createTextNode('Hello');
//appendChild
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 =document.querySelector('header h1');
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

var parentNode = document.getElementById('items');
var newNode = document.createElement('li');
var textNode = document.createTextNode('Hello');
parentNode.insertBefore(textNode, parentNode.children[0]);