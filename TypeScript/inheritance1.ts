/*Inheritance:--Getting properties(Variables and Methods) of one object/class into another Object/class
*/
class Employee//Parent
{
    //Instance Variables--this keyword
  id:number
  name:string
  designation:string
  protected salary:number//access in same class and derived class
 
  constructor (id:number,name:string,designation:string)//local
  {
      this.id=id;
      this.name=name;
      this.designation=designation;
  }
  display()
  {
    console.log(this.id + "\t"+ this.name + "\t" + this.designation+"\t"+this.salary)
  }
}
//child class/subclass/derived class
class PartTimeEmployee extends Employee
{
    no_of_hrs:number
    hrs_sal:number
    constructor(id:number,name:string,designation:string,no_of_hrs:number,hrs_sal:number){
        // super()//call parent Constructor--default constructor
        super(id,name,designation)
        this.no_of_hrs=no_of_hrs
        this.hrs_sal=hrs_sal
    }
    calsal()
    {
       this.salary= this.no_of_hrs*this.hrs_sal
    }
}
let objemp= new PartTimeEmployee(1,"Sam","SE",30,5000);
objemp.calsal()
objemp.display();//Inhritance--on child object we have invoked parent property(method)
// console.log(objemp.salary);