console.log("welcome to tutorial 15");
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[5].nodeName;
let nodeType = cont.childNodes[3].nodeType;

let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastchild);
console.log(container.children);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);