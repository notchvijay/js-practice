// PRIMITIVE 

// 7 type : string,number,boolean,null,undefiend,symbol,bigint

const score = 100
const scoreValue = 100.4

const userloggedIn = false
const outsideTemp = null
let dateLoggedIn;

const id = Symbol('223')
const id2 = Symbol('223')
console.log(id===id2)

// reference (non-premitive)


// array,object,functions
const heros = ["iron man","thor","bat man"]
let myobj = {
       name:"notch",
        age:17,
}

const MyFunction=function(){
    console.log("hello world")
}
console.log(typeof Bigint)
console.log(typeof outsideTemp)
console.log(typeof MyFunction)