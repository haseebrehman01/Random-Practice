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
     
