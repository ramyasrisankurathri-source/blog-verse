let person={
    name:"srii",
    age:18
}

console.log(person.name)
console.log(person["age"])

const{name,age}=person;//destructing assignment
console.log(name)
console.log(age)

let fruits=["apple","banana","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num);//transform each
console.log(squares)

let evens=numbers.filter((num)=>num%2==0) //filter values
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num,0) //reduce values
console.log(sum)

let persons=[{
    name:"srii",
    marks:60

},{
    name:"ben",
    marks:55
}
]
for(person of persons){
    console.log(persons)
}


let maxmarks=0;
let topper="";
for(let person of persons){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person,name;
    }
}