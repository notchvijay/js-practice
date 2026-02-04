// for of 

const arr=[1,2,3,4,5,6,]

// arr.forEach(function(val){
//     console.log(val)
// })

for (const num of arr) {
    // console.log(num)
}

const greeting="hello world!"
for(const num of greeting){
    // console.log(num);
}

// maps
const map=new Map()
map.set("in","india")
map.set("nh","nighthunter")
map.set("n","notch")
map.set("in","india")
// console.log(map)

for(const [key, value] of map){
//    console.log(key,":-",value)
}

const games={
    "game1":"battelfield",
    "game2":"cs2",
    "game3":"elden ring"
}
// for(const [key,values] of games){
//     console.log(key,":-",values)
// }

