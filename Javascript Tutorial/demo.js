/*// variable are four types
// 1.automatic 2.var 3.let 4.constant

x='test';
console.log(x)
console.log(typeof x)
y=10;
console.log(y);

 var a=1;
 console.log(a);
 var a=null;
 console.log(a)    // var is redeclared

 let j=50;
 //let j=60;   let cannot be redeclared
 console.log(j+" it is from block scope") 
 {
    let j=60; //it will create new memory block  because it is in different block
    console.log(j) 
 }
 console.log(j) 

 const result=true
 console.log(result) 
 //const result=false   const value can not change.*/

 // interaction method in javascript
 alert("check even or odd of the given number")

  var number=prompt("Enter your number")
  if(number % 2==0){
    console.log("the given number "+number+" even")
  }
  else{
    console.log("the given number "+number+" odd")
  }




   var webpage=confirm("open the webpage")
   if(webpage){
    alert("it is  opened")
   }
   else{
    alert("it is not opened")
   }
   var i=1;
   while(i<=10){
    console.log(i);
    i++
   }
    

   for(var i=1; i<=10;i++){
    console.log(i)
   }
   for(var i=1; i<=10;i++){
    if(i%3==0){
        console.log(i)
    }
   }

   var h= document.querySelector('h1');
   console.log(h.innerText)
   console.log(document) // it will give entire html doc
   console.dir(document)// it will give the object

   function wish(name="suman"){
    console.log("hello "+name+" " + "Goodmorning")
   }
   let name=prompt("enter the name")
   wish(name)
   wish()


   
// function expression

var mul=20+square(10,10)+30


var sub= function (a,b){return a-b}
console.log(sub(10,5))
//square of the number
function square(number){
    return number*number
}
var square=square(number)
console.log(square)
function factorial(number){
    result=1;
    for(var k =1;k<=number;k++){
        result= result*i;

    }
    console.log("factorial of given numbers "+number+" is "+result)

}


// higer order function.
function song(){
    console.log("jil jil jiga")
}

setInterval(song,3000)



//"use strict"
x = 3.14;       // This will not cause an error.
console.log(x)
//delete x
//console.log(" after deleting x "+ x)
// myFunction();

// function myFunction() {

//   y = 3.14;   // This will cause an error
//   console.log("myfunction "+y)
// }

// function strictTest(a,a){
//     "use strict"
//     var a;
//     var sum=a+a;
//     console.log("sum of values "+sum)
// }
// //strictTest(50+50)


// arrow function
var sum=(a,b)=>{return a+b}
console.log(sum(25,25))

