const user={
    username:"notch",
    price:99,

    welcomeMessage:function(object){
        console.log(`welcome ${this.username} you just logged in.`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="donald"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let name="notch"
//     console.log(this.username); // output will be undefuned because we cant use this inside a function.
// }
// chai();

// const chai =function (){
//     let name="notch"
//     console.log(this.username); // output will be undefuned because we cant use this inside a function.
// }
// chai();

// let soda=() => {
//         let name="notch"
//         console.log(this.name)
// }
// soda()

// const addtwonum=(num1,num2)=>{
//     return num1+num2;
// }
const addtwonum=(num1,num2)=> (num1+num2)
console.log(addtwonum(4,5));

const object=()=>({usrname:"notch"})
console.log(object());