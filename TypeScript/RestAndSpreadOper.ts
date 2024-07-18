// let num1 = [1, 2, 3, 4]
// let num2 = [7, 8]
// let num3 = [num1, num2, 9, 10, 11]
// let num4 = [...num1, ...num2, 7, 8, 9, 10, 11]

// console.log("Element of num3:", num3)
// console.log("Element of num4:", num4)

// //Get Objects from one varibale or object into another one - Spread Operator

// let address = {
//     state: "Maharashtra",
//     Dist: "Pune"
// }

// let employee = {
//     id: 1,
//     name: "Atharva",
//     designation: "SD",
//     salary: 100000,
//     ...address

// }


// console.log(employee)



// function add(a: number, b: number, c: string) {
//     console.log("Addition is: " + (a + b + c));
// }

// let numbers = [12, 10, 78];
// add(2, 4, 5);
// add(numbers[0], numbers[1], numbers[2]);
// //tuple
// let num: [number, number, string] = [10, 20, "PRASAD"];
// add(...num);


//REST AND SPREAD
let num1 = [1,2,3,4]
let num2 = [7,8]
 
let num3= [num1, num2, 10,9,11]
let num4 = [...num1, ...num2, 7,8,9,10,11]
console.log("Elements of num3: ", num3);
console.log("Elements of num4: ", num4);
 
let address = {
    dist: "Pune",
    state:"Maharashtra"
}
 
let employee = {
    id : 1,
    name: "Sumat",
    designation:"SDE",
    salary : 2345,
    ...address
}
 
console.log(employee);
 
 
function add(a: number, b: number, c: string) {
    console.log("Addition is: ", (a + b + c));
}
 
let numbers = [2, 3, 4];
 
// Correct usage of the add function with three arguments
add(4, 5, "Sumat");
 
// This call is incorrect because it provides only one argument
// Instead, split the calculation and pass three arguments
let sum = numbers[0] + numbers[1] + numbers[2];
add(sum, 0, ""); // Adjust the arguments to fit the function signature
 
// ---------TUPLE-------
let num: [number, number, string] = [10, 20, "Sumat"];
add(...num); // Using the spread operator correctly
 
 
//-------------REST PARAMETER---------(...)
// REST parameter is part of function definition/signature
function show(msg:string, ...inputs:number[])
{
    console.log(msg);
    for(let data of inputs)
        console.log(data);
       
   
}
show("Welcome to Cybage!!")
show("Welcome to ES6", 100, 102, 1012)
show("Sumat Jain",24,7485,7857)