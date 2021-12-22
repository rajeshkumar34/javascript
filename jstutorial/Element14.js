console.log('this is tut.14')
/*
element selector:
1. singlr element selector
2. multi element selector

*/
//1. single element selector
let element = document.getElementById('myfirst');
//element = element.className
//element = element.childNodes;
//element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'Rajesh is a good boy';
// element.innerHTML ='<b>Rajesh is a good boy';
// console.log(element);  

let sel = document.querySelector('#my first')
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color ='green';
// console.log(sel)

// 2.Muiti element Selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);