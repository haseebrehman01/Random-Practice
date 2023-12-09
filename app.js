"use strict";
// ex 1
// var a = haseeb
// ex 2
// myFunction();
// function myFunction() {
//   y = 3.14;   // This will cause an error (y is not defined)
// }
// ex 3

// x = 3.14;    // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;  // This will cause an error (y is not defined).
// }

// ex 4
// x = {p1:10, p2:20}; 



// array of object
// var info = [
//  [
//         students = [
//             { name: "haseeb" ,
//                grade : "A+",
//                perc : "90%"          
//         },
//             {name: "Rameez" ,
//             grade : "b+",
//             perc : "50%"  },
//             {name: "ali" ,
//             grade : "c",
//             perc : "40%"  }
//         ]
//  ],
//  [
//     students2 = [
//         { name: "haseeb" ,
//            grade : "A+",
//            perc : "90%"          
//     },
//         {name: "Rameez" ,
//         grade : "b+",
//         perc : "50%"  },
//         {name: "ali" ,
//         grade : "c",
//         perc : "40%"  }
//     ]
// ]
// ];
// var con = info[1][0][0]["name"]
// alert(con)
//  random num between 1 and 100
// var b = Math.floor(Math.random()*100)+1
// console.log(b)
// var b = Math.floor(Math.random()*5)+1
// console.log(b)
// we need 21 t0 25
// var b = Math.floor(Math.random()*5 + 21)
// console.log(b)


// unary operator 
// var a = 1
// var b = a++
// console.log(b)
// console.log(a)

// //
// var l = 1
// var s = ++l
// console.log(l)
// console.log(l)





// else if if
// yahan yeh rule ka hisaab sa kaam karra
// let a = prompt()
// if (a === "red"){
//     console.log("wait if")
// }
// else if (a === "red"){
//     console.log("Start your vehicle")
// }
// else if (a === "green"){
//     console.log("go")
// }


// yahan yeh bhand marra 2 console dikharaha qka if laga hua dono jaga jab dno true horahi toh dono dekharah
// let a = prompt()
// if (a === "red"){
//     console.log("wait if first ")
// }
//  if (a === "red"){
//     console.log("Start your vehicle  if second")
// }
//  if (a === "green"){
//     console.log("go")
// }


// second example
// var a = 1
// if (a == 1){
//     console.log("yes")
// }
// // yeh chalega hi jo ka rule ka mutabiq hai
// else if (a >= 1){
//     console.log("no")
// }


    // var a = 1
    // if (a == 1){
    //     console.log("yes")
    // }
    // // yeh yeh bhand marra
    //  if (a >= 1){
    //     console.log("no")
    // }





// if , else if , else
// let a = prompt()
// if (a === "red"){
//     console.log("wait 'if'")
// }
// else if (a === "red"){
//     console.log("Start your vehicle 'else if'")
// }
// else if (a === "green"){
//     console.log("go")
// }
// else {
//     console.log("write color name small and correct 'else' ")
// }


//nested
// let paisa = +prompt() 
// if (paisa >= 50){
//     console.log("you can afford popcorn")

//     //yahan else yah if else nahi likhsakta if sa pehla
//     if (paisa >= 90){
//         console.log("you can also afford masala  and cheese popcorn")
//     }
// else if (paisa >= 70){
//     console.log("you can also afford masala popcorn but you cannot afford cheese popcorn")
// }

//     else{
//         console.log("but you cannot afford masala popcorn and cheese popcorn")
//     }
// }

// else{
//     console.log("you can not afford popcorn")
// }


// var a = "haseeb"
// var b = false
// for (var i = 0 ; i < a.length ; i++ ){
//     if(a[i] == "s"){
//   b = true
// break
//     }
// console.log(i)
// }  
// console.log(i)
// if (b == true){
//     alert("found")
// }
// var a = "haseeb";


// for (var i = 0; i < a.length; i++) {
//     if (a[i] == "s") {
//   console.log(i + " index "  + a[i])
//         break;  // This will exit the loop
        
//     }
//     console.log(i);
// }

// console.log(i);


// var a = "haseeb";
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === "s") {
//         console.log("Index value when 's' was found: " + i);  // This is where you logged i when 's' was found
//         break;  // This will exit the loop
//     }
//     console.log("Index value in each iteration: " + i);  // This is where you logged i in each iteration
// }

// console.log("Final index value after the loop: " + i);  // This is where you logged i after the loop


// var a = "haseeb";
// var b = false;

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === "s") {
//         // console.log("Index value when 's' was found: " + i);  // This is where you logged i when 's' was found
//         b = true;
//         break;  // This will exit the loop
//     }
//     // console.log("Index value in each iteration: " + i);  // This is where you logged i in each iteration
// }

// // console.log("Final index value after the loop: " + i);  // This is where you logged i after the loop

// if (b) {
//     console.log("found");
// }
     
// let myVariable;
// console.log(myVariable); // logs undefined
// let myObject = {};
// console.log(myObject.missingProperty); // logs undefined
// console.log(myObject.missingProperty[0]); // logs error beacuse we are printing something inside undefied
// if (typeof myVariable !== 'undefined') {
//   console.log(myVariable.missingProperty); // this line will not execute
// }

// var a = [1]
// var b = a




// // var a = 1
// // var b = a
// // console.log(b) //1

// b.push(1,2,3)
// console.log(b)
// console.log(a)



// array  advance methods


// var arr = [1,2,3,4,5,6]
// var check = arr.forEach((value,index,arr) =>{
// return va
// })
// // console.log("----------------------------------------------------------------")
// for (var i = 0 ;i <arr.length; i++ ){
//     console.log(arr[i],i,arr)
// }



//map 
// var check = arr.map(function(value,index){
//     return value * 4
// })
// console.log(check)


//reduce
// var arr = [
//     {num:1},
//     {num:2},
//     {num:3},
//     {num:4}

 
// ]

// var total = arr.reduce(function(arrfirstvalue,arrsecondvalue){ //ik baar chalna ka baad iski pehli value undefined hojayegi
//    return {num : arrfirstvalue.num * arrsecondvalue.num}

// // return arrfirstvalue.num+arrsecondvalue.num
// //ik bar chalka  iski arrfirstvalue ki value hojayegi phr yhe aga chalega
// })
// console.log(total.num)


// var ages = [{
//  ali :{
//     age: 67
//  },
//  muhammd : {
//     age : 2
//  },
//  nabeel :{
//     age : 3
//  },
//  usma : {
//     age : 12
//  }
// }]
// var check = ages.filter(function(v,i){
//   return v.ali.age >= 18 || v.muhammd.age >= 18 ||v.nabeel.age >= 18||v.usma.age >= 18
// })
// console.log(check)

// var a = [1,2,3,4,1]
// var l = a.find(function(v,i){
// return v > 1
// })
// console.log(l)

// var a = [1,2,3,4,1]
// var l = a.findIndex(function(v,i){
// return v === 4
// })
// console.log(l)



// var a = [1,2,3,4,1]
// var l = a.some(function(v,i){
//     return v > 3
// })
// if (l){
// alert(`hello` + a)
// }

// var a = [2,2,2,2,2]
// var l = a.every(function(v,i){
//     return v === 2
// })
// console.log(l)
// if (l){
// alert(`hello`)
// }



// function abc(){
//     let  a = "haseeb"
//     console.log(b)
//     function xyz(){
//         console.log(a)
        
//     }
//     xyz()
// }
// abc()
// console.log(a.ali)

// var a = "ali"




//var 
// var hoisting
// console.log(a)//undefined
// var a = "haseeb"
// In var, you can create variables with the same name, but only the last variable with that name will be accessible 
// var a = "haseeb"
// var a = "ali"
// console.log(a) // ali
// in var we can access block variables  outside the  block 
// ex (1)
// {
//     var a = "haseeb"
// }
// console.log(a)//haseeb
// // ex(2)
// var a ="haseeb"
// {
//     var a = "ali"
// }
// console.log(a)//ali

//let
// let a = "ali" 
// if (true){
//     let a = "helo"  //let follow the rule of block scope
// }
// console.log(a) // ali
//let hoisting
// console.log(a) // connot access a before initialization
// let a = "ali"
// declaring same name of variable
// let  a = "haseeb"
// let a = "ali"
// console.log(a) // error a has already declared

// const (constant)
// const a = "haseeb"
// console.log(a)
// a = "ali"
// console.log(a)//type error "assignment to const variable"
// Const object keys can be modified, which might be a bit confusing for beginners. Although we can change the properties of the object, the object name itself cannot be altered
// const name = {
//     alert : "hello",
//     time : 2
// }

// name.alert = "hi"
// console.log(name)// alert : hi



//visit freecode camp
//function declaration ()
// function name(){} //function declaration
// let name = function (){}//function expression

// this keyword
// this is window object
//this keyword with regular function or (Implicit Binding: When we call a function as a method of the object this keyword refers to the calling object)
// let demo = {
//     name : "haseeb",
//     class : "firstyear",
//     nameClass : function(){
//         console.log(this) //whole object
//         return `your name is ${this.name} and class is ${this.class}`
//     }
// }
// console.log(demo.nameClass())

// explicit binding
// function ageVerify(){
//     if(this.age> 18){
//         console.log("Yes you can drive");
//     } else {
//         console.log("No you cannot drive");
//     }
// }
 
// const per1 = {age: 21}; 
// const per2 = {age: 16};
// ageVerify.call(per1);
// ageVerify.call(per2);




//arrow function (basic code)
// let learn = ()=>{
// return "hello"
// }
// learn()

// In JavaScript, when you have a single parameter for an arrow function and the function body consists of only one statement, you can omit the parentheses around the parameter and the curly braces 
// around the function body. However, it's important to note that this syntax is most suitable for concise, one-line functions.
// we can also remove return in one line arrow function
// let learn = name    => console.log(name)  ; console.log("ali") ; //etc
//     learn("haseeb")
    // but if we are passing 2 arguments so  writing paranthesis is mandotory around the parameter and curly bracket(optional but for mutiple work from parameter so you should write cutly bracket) also 
    // let learn = (name ,ali)   => {console.log(name,ali)  ; console.log(ali)} //etc      
    // learn("haseeb","ali")

    //  regular func vs arrow

// regular
    // function print() {
//     console.log(arguments) //yaha show karega arguments
//   }
//   print(1,2,3)

// arrow
//   arraow function cannot be use as constructors
//in arrow function hoiating is not applied


// Now we have a reference error: arguments is not defined. That's because the arguments variable does not exist in arrow functions.

//   let a = (a,b,c)=> {
//     console.log(arguments) //is not defined
//   }
//   a(1,2,3)
//regular expression (yaha tak sahi chalega)
// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       console.log(this.name)
//     }
//   }
  
//   obj.print()

// yaha bhand marga
//   const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//   function name (){
//     console.log(this)
//   }
//   name()
//     }
    
//   }
  
//   obj.print() //window


//   const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       const print2 = () => {
//         console.log(this)
//       }
      
//       print2()
//     }
//   }
  
//   obj.print()
  // {
  //   name: 'deeecode',
  //   age: 200,
  //   print: [Function: print]
  // }

//   Wrap up
// Although arrow functions allow you to write functions more concisely, they also have limitations. As we have seen in this article, some of the behaviors that occur in normal functions do not happen in arrow functions.

// If you want to create constructors, retain the normal behavior of this or have your functions hoisted, then arrow functions are not the right approach.



// console.log(this)




// let a = "ali"
// let result = prompt("hello", [a]);//  [a] optional 


// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!


// confirm
// let isBoss = confirm("Are you the boss?");

// alert( isBoss ); // true if OK is pressed while false 

// let start = Date.now(); // remember start time

// let timer = setInterval(function() {
//   // how much time passed from the start?
//   let timePassed = Date.now() - start;

//   if (timePassed >= 2000) {
//     clearInterval(timer); // finish the animation after 2 seconds
//     return;
//   }

//   // draw the animation at the moment timePassed
//   draw(timePassed);

// }, 20);

// // as timePassed goes from 0 to 2000
// // left gets values from 0px to 400px
// function draw(timePassed) {
//   train.style.left = timePassed / 5 + 'px';
// }



// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // "23", the binary plus concatenates strings



// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5  bcz +""  =m 9 

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


// assignment = 
// let a = 1;
// let b = 2;

// let c = 3 - (a += b + 1);

// alert( a );//?
// alert( c ); //?



// let n = 2;
// n = n + 5;
// n = n * 2;
// console.log(n)



// let n = 2;

// n *= 3 + 5; // right part evaluated first, same as n *= 8

// alert( n ); // 16

// let a = 2
// ++a
// let b = 2
// let counter = b++;   //2
// console.log(counter)//2
// console.log(b)//3
// console.log( counter + a + b);//8



// let counter = 1;
// let a = counter++; // 1

// alert(a); // 1

// let counter = 0;
// alert( counter++ ); //
// console.log(counter)  // 1 qka yeh ik dafa print hona ka baad dusri bar print hona pa + karega that why 2 hua    


        // let variable = 1
        // let x= variable++
        // console.log(x)
        // console.log(x)
        // console.log(x)
        // console.log(x)
        // console.log(x)
        // console.log(variable)


//         let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (! value)
//      break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer; // (*)
//   console.log(input)
//       // do something with the value...
//     }
//   }
  
//   alert('Done!');


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         document.write( i);
//       }
//       else{
//         console.log(i)
//       }

//   }

//   if (i % 2 !== 0){
//     document.write( i );    
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num); 




// let a = "haseeb"

// let demo = ()=>{
//     a = "ali"
// }
// console.log(a)
// demo()
// console.log(a)
// c




// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }

// // the function will create and use its own userName
// showMessage();

// alert( userName ); // John, unchanged, the function did not access the outer variable




	
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);









// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);


// function calc(a, op, b) {
//     // Convert input strings to numbers
//     var num1 = parseFloat(a());
//     var num2 = parseFloat(b());
    
//     // Check if the conversion is successful
//     if (isNaN(num1) || isNaN(num2)) {
//         document.write("Invalid input. Please enter valid numbers.");
//         return;
//     }

//     // Perform the operation based on the operator
//     let result;
//     switch (op()) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             document.write("Invalid operator. Please enter +, -, *, or /.");
//             return;
//     }

//     document.write(result);
// }

// function p1() {
//     let p1 = prompt("Enter the first number");
//     return p1;
// }

// function p2() {
//     let p2 = prompt("Enter the second number");
//     return p2;
// }

// function op() {
//     let ope = prompt("Enter the operator (+, -, *, /)");
//     return ope;
// }

// calc(p1, op, p2);




// function greeting() {
//     // [1] Some code here
//     var    b =     sayHi; // iska andar hai haseeb
// b()
// // console.log(b)

//     // [2] Some code here
//   }
//   function sayHi() {
// return alert("hello")

//   }
  
//   // Invoke the `greeting` function
//   greeting();
  
//   // [3] Some code here


// callstck && visulaizing call stack 
// function one(){
// return 1
// }
// function two(){
// return one() + one()
// }
// function three(){
//     var result = two() + one()
//     return result
// }
// var done = three()
// console.log(done)


// function sayName(name){
//     return name;
//   }
//   function greeting(){
//     var myName = sayName('haseeb')
//     console.log(`Hello ${myName}`)
//   }
//   greeting()    


// Callback function, passed as a parameter in the higher order function
// function callbackFunction(){
//   console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//   console.log('I am higher order function')
//   func()
// }

// higherOrderFunction(callbackFunction);