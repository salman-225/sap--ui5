// array concept

let ary=[10,20,30,40,50]

ary.push(60)// to add at the end
for(num of ary){
  console.log("for of"+num);
}
ary.pop() // to remove element from last and return number of elements present

//normal for loop
for(let i=0;i<ary.length;i++){
    console.log("for"+ary[i])
}
ary.unshift(1)// to add element at the first of the array
let n=0;
while(n<ary.length){
    console.log("while"+ary[n])
    n++;
}
ary.shift()
let j=0;
do{
    console.log("do while"+ary[j])
    j++;

}while(j<ary.length)

// for each loop
//syntax arrayobj.forEach(function)
ary.forEach(function(num){console.log("for each  "+num)})
function printElement(element){
    console.log("******")
    console.log(element)
    console.log("******")
}
ary.forEach(printElement)

//accessing of array element
console.log(ary[0]);
//update of array elements
ary[0]=100;
//for in [ it will give index value not value of array]
for(num in ary){
    console.log(num+" for in")
}
//adding new element
ary[5]=60;
console.log(ary.length)

                // ****javascript Objects****

let movie={name:"don",year:2020,hero:"sharuk"}

//to access
console.log(movie.name+" first method")
console.log(movie["name"]+ " second method")

// to create and change value

movie.status="floop"
 console.log(movie.status)
 movie.name= "jawan"
 console.log(movie.name)

 //iterations
 for(inf in movie){
    console.log(inf)//it will print only keys
    console.log(movie[inf])// it will give value
    console.log(inf+":"+movie[inf])
 }

 // ***** for java script object  (for of),(for each)(for) will not work it will work only will for in****
//  for (inf of movie)
//  { console.log(inf[0])}

// for( let k=0; k<movie.length;k++){
//     console.log(movie[k])
// }
 // movie.forEach(function(element){console.log(element)})


 //**************Functions*****************

 function sum(a=20,b=10){//normal functio with return type if we pass value it will take that value otherwise it will take default value
    return a+b;
 }
 console.log(sum())


 //anonymous function

 let s=function(a,b){return a+b}
console.log(s(15,100)+" from anonymous function")

 //higher order function
   setInterval(s,3000)
   

 //arrow function
 let myFunction = (a, b) => a * b;         
 const hello = () => {
       return "Hello World!";
 }	
       // let myfun= te()=>{ return "function with name"}
 console.log(myFunction(20,20))
 console.log(hello())
        //console.log(myfun())   function with name will not work
 

 //function expression