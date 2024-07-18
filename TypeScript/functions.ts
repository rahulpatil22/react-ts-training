// 


//  function circleArea(radius:number):number
//  {

//     return 3.14*radius*radius
//  }

//  let ans = circleArea(2.3);
//  console.log(" Circle area is:" + ans);

 //arrow function

//  let func=(radius:number):number=>
//      3.14*radius*radius
 
//      let ans = func(2.3);
//  console.log(" Circle area is:" + ans);

//Object
//static object

// let emp1 ={

//     id :1,
//     name :"rahul",
//     designation:"devloper"
// }

// let emp2 ={

//     id :2,
//     name :"jayant",
//     designation:" sr devloper",
//     salery:30000
// }
// interface emp_type {

//     id:number,
//     name:string,
//     designation:string,
//     salery?:number //optional property

// }
// function employeeDetails (emp:emp_type)
// {
//     console.log(emp)
// }
// // employeeDetails("Cybage");
// employeeDetails(emp1) // as salery prop missing
// console.log()
// employeeDetails(emp2) //id is expected a type number
// console.log()





interface book_type{
    id:number,
    bookname:string,
    author:string,
    price:number
}
let book1 = {
    id: 1,
    bookname: "Let us C",
    author: "Yeshwant",
    price: 1000,
}
 
function BookDetails(book: book_type)
{
    console.log(book)
}
BookDetails(book1)





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
let emp1={
    id:1,
    name:"Kirti",
    designation:"Manager"
}
 
let emp2={
    // id:"Two",
    id:2,
    name:"Sonali",
    designation:"Sr. Technical Trainer",
    salary:176000
}
interface emp_type{
    id:number,
    name:string,
    designation:string,
    salary?:number//optional property  
    // email:string
}
 
let employee:Array<emp_type>=[emp1,emp2] //aray of object
 
function employeeDetails(emp:emp_type[])
{
    console.log(emp);    
}
// employeeDetails("Cybage")
// console.log("-----------------------------------------");
// employeeDetails(emp1)// as salary property is missing
// console.log("------------------------------------------");
// employeeDetails(emp2)// as id is of the type string and expection in type number
// console.log("----------------------------------");
employeeDetails(employee)