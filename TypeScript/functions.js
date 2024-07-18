// 
var book1 = {
    id: 1,
    bookname: "Let us C",
    author: "Yeshwant",
    price: 1000,
};
function BookDetails(book) {
    console.log(book);
}
BookDetails(book1);
// function function_name(para list)
// {
//     //statements
// }
// */
//function definition
// function show(data:string):string
// {
//     return "Sonali";
// }
// //call Function
// let result
// result=show("Cybage")
// console.log(result);
// result=show(23.45)
// console.log(result);
//Arrow function--number--float/int/double
/*
no function keyword/name
after para list introduce '=>'
assigned arrow function to variable
remove {} if we have single statement in function body
remove 'return' keyword if we have single return statement in function body
*/
// let func=(r:number):number=>3.14*r*r
// function circleArea(r:number):number
// {
//     return 3.14*r*r
// }
// let ans=func(2.3)
// console.log("Circle Area is:"+ans);
//Objects
//Static Object
var emp1 = {
    id: 1,
    name: "Kirti",
    designation: "Manager"
};
var emp2 = {
    // id:"Two",
    id: 2,
    name: "Sonali",
    designation: "Sr. Technical Trainer",
    salary: 176000
};
var employee = [emp1, emp2]; //aray of object
function employeeDetails(emp) {
    console.log(emp);
}
// employeeDetails("Cybage")
// console.log("-----------------------------------------");
// employeeDetails(emp1)// as salary property is missing
// console.log("------------------------------------------");
// employeeDetails(emp2)// as id is of the type string and expection in type number
// console.log("----------------------------------");
employeeDetails(employee);
