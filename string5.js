const name ="Rajesh";
const greeting ="good morning ";
console.log(name + greeting);

let html;
html = "<h1> this is heading</h1>"
       "<p> this is my para</p>";

html = html. concat('this','str2');
console.log(html); 
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());




console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.charAt((3)));
console.log(html.endsWith('str2'));
console.log(html.includes('is'));
console.log(html.substring(1,5));
console.log(html.slice(0,4));
console.log(html.split('>'));

