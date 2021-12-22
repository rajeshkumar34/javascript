console.log("this is tut16");
let element = document.createElement('li');
element.id = 'createdLi';
element.setAttribute('title','mytitle');
element.innerText = 'Hello this is created by rajesh';
let ul = document.querySelector('ul.this');
ul.appendChild(element);  
// console.log(ul)
// console.log(element);

let elem2 =document.createElement('h3')
elem2.ld = 'elem2';
elem2.className = 'elem2';
let thode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(thode);

element.replaceWith(elem2);
let myul = document.getElementByld('myul');
myul.replaceChild(element,document.getElementById('ful'));