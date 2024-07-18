class Book
{
    //data members--Instance variable--access using this keyword--'this' represent current class
    private bookName:string
    authorName:string
    price:number
    //Initialization --constructor
    //Multiple constructor implementations are not allowed.
    // constructor()
    // {
    //     console.log("Default Constructor");        
    // }
    constructor(bn:string,an:string,p:number)//local scope variables
    {
        console.log("Para Constructor");
        //copy data from local to instance variable
        this.bookName=bn
        this.authorName=an
        this.price=p
    }
 
    bookDetails(){
        console.log(this.bookName,"\t",this.authorName,"\t",this.price);        
    }
}
//Object of the class
let obj=new Book("C Programming","Ajay Mittal",500)//call goes to constructor
obj.bookDetails()//access method on object
//access variable(data members)on object
console.log(obj.bookName);//private-can access with in that call only
console.log(obj.authorName);//public :-- can access from any where
/*
create class Employee
id
name
designation
salary
 
constructor(id,name,designation)--initialized them
display--print all details
*/


// class employee{
//     id:number
//     name:string
//     designation :string
//     private salary?:number
 
//     constructor(id:number,name:string,desig:string,salary:number)
//     {
//         this.id=id
//         this.name=name
//         this.designation=desig
//         this.salary=salary
//     }
//     printEmpDetails(){
//         console.log("emp id:"+this.id+"\n"+"emp name:"+this.name+"\n"+"emp designation "+this.designation+"\n")
//     }
// }
 
// let emp=new employee(1,"rahul","software engineer",10)
// emp.printEmpDetails()



class Employee{
    id: number
    name: string
    designation: string
    salary: number
 
    constructor(id:number, name:string, desgn:string)
    {
        this.id = id
        this.name = name
        this.designation = desgn
    }
    employeeDetails()
    {
        console.log("Employee Id : "+this.id)
        console.log("Employee Name : "+this.name)
        console.log("Employee Designation : "+this.designation)
    }
}
let emp = new Employee(26,"rahul","Software Engg")
emp.employeeDetails()