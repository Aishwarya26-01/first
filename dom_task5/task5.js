var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';

for(var i=0; i<li.length; i++)
{
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = '#f4f4f4';
}
li[2].style.backgroundColor = 'green';