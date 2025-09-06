function greet(){
    console.log("welcome to dev astra")
}
greet()

function add(x,y){
    return x+y;
}
let result=add(2,6)
console.log(result)

const pi=3.14
console.log(pi)

//arrow function
const square=(x)=>x*x;
console.log(square(5))
const subtract=(x,y)=>{
    console.log(x,y);
    return x-y;

}
console.log(subtract(20,15))
