// function show(name:string,age:number)
// {
//     console.log(arguments);    
// }
/*
The 'arguments' object cannot be referenced in an arrow function in ES5
*/
// let func=(name:string,age:number)=>
// {
//     console.log(arguments);    
// }
// func("Sonali",34)
 
//static object
// let emp={
//     emp_name:"Sonali",
//     show()
//     {
//         console.log(this.emp_name);        
//     }
// }
// emp.show()
//Arrow function does not have its own this
let emp={
    emp_name:"Sonali",
    display()
    {
       let show=()=>
            {
                console.log("In Arrow function");        
                console.log(this.emp_name);        
            }
        show();
    }
 
}
emp.display()
 
function show() {
    throw new Error("Function not implemented.");
}
/*
normal function are constructable / callable arrow function are not
*/
// function Display(name:string)
// {
//     this.name=name //declare and initialized Instance variable
// }
let Display=(name:string)=>
{
    this.name=name //declare and initialized Instance variable
}
let obj=new Display("Ashish")
console.log(obj);