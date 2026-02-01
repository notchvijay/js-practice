// var a=300
let a=300

if(true){
    // var a=30;
    let a=30;
    console.log("inner ",a);
}
// console.log(a);

function one(){
    const username="notch"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username="notch"
    if(username==="notch"){
        const username2="gigganigga"
        console.log(username + username2);
    }
        // console.log(username2)

}
// console.log(username);

//++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++


console.log(addone(6));
function addone(num){
    return num+1;
}

const addtwo=function(num){
    return num+2;
}
console.log(addtwo(5));