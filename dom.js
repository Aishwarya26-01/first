console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);

var headerTitle=document.getElementById('main-header');
headerTitle.style.border='solid 3px #000';
var title1=document.getElementsByClassName('title');
title1[0].style.color='green';
title1[0].style.fontWeight='bold';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor = '#f4f4f4';
}
items[2].style.backgroundColor = 'green';