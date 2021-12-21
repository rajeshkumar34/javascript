

// function greet (name,thanks){
//   console.log(`Happy Birthday ${name} How i wish i could fly to you fight now and ne with you on this special day od your.But remembermy good wishes are always there with you.${thanks}!`)
// }

// greet('rajesh','thanks a lot')


//  scope

var i =234;
console.log(i);
function ui (name)
{
  let i =9;
  console.log(i);
  return`This is a ${name} ui`;
}
console.log(ui("rajesh"),i);