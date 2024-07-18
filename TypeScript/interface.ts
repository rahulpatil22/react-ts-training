// class A{
//     show()
//     {
//         console.log("A Class");        
//     }
// }
// class B{
//     show()
//     {
//         console.log("B Class");        
//     }
// }
 
interface A{
    // An interface property cannot have an initializer.
    // data:string="A"
    data:string
    //only signature can't have implementation
    show(a:number,b:string):void
}
interface B{
    data:string
    show(name:string):void
    print():void
}
interface D{
 
}
class Xyz
{
 
}
// Classes can only extend a single class.
class C extends Xyz implements B,A,D
{
    data:string="Cybage Software PVT LTD"
    //Method overloading is not supported
    show(): void {
        console.log(this.data);        
    }
    // show(name:string)
    // {
    //         console.log(name);
           
    // }
    print(): void {
        console.log("Interface Example");        
    }
}
 
let obj=new C()
obj.print()
obj.show()