// IMMEDIATELY INVOKED FUNCTION [IIFE]

(function iife(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

// const add=function soda(n1,n2){
//     return n1+n2;
// }
// console.log(add(3,3))

// the semicolon is necessary because the IIFE function don't know when to end because of that the other IIFE function did't work

( (name) =>{
    // named IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )("notch");

