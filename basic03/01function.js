
function sayMyName(){
    console.log("n");
    console.log("o");
    console.log("t");
    console.log("c");
    console.log("h");
}
// sayMyName()

// function addTwoNumber(n1,n2){
//         console.log(n1+n2)
//         }

function addTwoNumber(n1,n2){
    //    let result=n1+n2;
    //     return result
    return n1+n2;
}
const result=addTwoNumber(4,4);
// console.log("result:", result);

function UserLogin(username="user"){
    if(!username){
        console.log("Please enter the usrname first")
        return;
    }
    return `hey ${username} , you just logged in`
}

// const message=UserLogin("notch")
// console.log(UserLogin("notch"));
// console.log(UserLogin())

function totalCostOfCart(price1,price2,...price){
    return price;
}
console.log(totalCostOfCart(2,4,5,1,188,99,944,))

const appuser={
    name:"sam",
    cartprice:399
}
function handelObject(anyObject){
    console.log(`user ${anyObject.name} has cart price of ${anyObject.cartprice}`);
}
// handelObject(appuser);
handelObject({
    name:"rex",
    cartprice:500
})

const usersname=["sam","rex","jhon","hennry"]

function accesUserArray(anyarray){
    return anyarray[0]
}
console.log(accesUserArray(usersname));
console.log(accesUserArray([400,5,5,3,3,2,]));