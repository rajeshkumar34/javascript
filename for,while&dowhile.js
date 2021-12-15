//        For loops

for(let i=0; i<20; i++)
{
  console.log(i+1);
}



//       While loops

let j=0;
while(j<10){
  console.log(j);
  j++;
}


//       DO while

let k=0;
do{
  console.log(k)
  k++;
}
while(k<100);

//      break

for (let i=0; i<10;i++){
  if(i===3)
  {break;}
  console.log(i);
}
console.log('done');


//      Continue

for(let i=0;i<8;i++){
  if(i===4)
  {continue;}
  console.log(i);
}
console.log('Done');


//       Array

let arr =[2,5,6,4,2,3];
arr.forEach(function(element){
     console.log(element);
});
console.log('Done');