var Book = /** @class */ (function () {
    //Initialization --constructor
    //Multiple constructor implementations are not allowed.
    // constructor()
    // {
    //     console.log("Default Constructor");        
    // }
    function Book(bn, an, p) {
        console.log("Para Constructor");
        //copy data from local to instance variable
        this.bookName = bn;
        this.authorName = an;
        this.price = p;
    }
    Book.prototype.bookDetails = function () {
        console.log(this.bookName, "\t", this.authorName, "\t", this.price);
    };
    return Book;
}());
//Object of the class
var obj = new Book("C Programming", "Ajay Mittal", 500); //call goes to constructor
obj.bookDetails(); //access method on object
//access variable(data members)on object
console.log(obj.bookName); //private-can access with in that call only
console.log(obj.authorName); //public :-- can access from any where
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
var Employee = /** @class */ (function () {
    function Employee(id, name, desgn) {
        this.id = id;
        this.name = name;
        this.designation = desgn;
    }
    Employee.prototype.employeeDetails = function () {
        console.log("Employee Id : " + this.id);
        console.log("Employee Name : " + this.name);
        console.log("Employee Designation : " + this.designation);
    };
    return Employee;
}());
var emp = new Employee(26, "rahul", "Software Engg");
emp.employeeDetails();
