 
//Sync Execution => there is no waiting 

// console.log("Start Execution!!!");
 
 
// function show(name)
// {
//     console.log("In show Function");
//     return name;
// }
// result=show("Sonali");
// console.log("Result:"+result);
// console.log("End Execution!!!");


// synchronous function ,one flow
 // output:-
// Start Execution!!!
// In show Function
// Result:Sonali
// End Execution!!!

 



//-------------------------------------------------//


/*Async behavior
we have some logical part here which is take some time complete the execution and then it will 
going to return result, but natural behavior of javascript is it will never wait for a result
so we want it forcefully, a desired output/exact ouput , we can handle this mechanism using 
 then,catch, promise, so i want a result and want to wait for it by async await */

// console.log("Start Execution!!!");
 
// function show(name)
// {
//     console.log("In show Function");
 
/*code which will take 3000 ms-- to complete execution
 natural behavior is someone is going to take a time we will not wait for them, 
will go print the below line- thats why result didnt get a value(it will taking a time) 
and print result:undefined */

//     setTimeout(()=>{
//         console.log("In Callback");
//         return name;
//     },3000)    
// }

// result=show("Sonali");
// console.log("Result:"+result);
// console.log("End Execution!!!");

// // output:-
// // Start Execution!!!
// // In show Function
// // Result:undefined
// // End Execution!!!
// // In Callback-- after 3000ms console.log("In Callback") line get executed that why it print- In Callback






//--------------------------------------------------------//


//Promise--
/*
 Promise constructor --callback function as parameter
 callback function takes --reject and resolve as parameter
 resolve and reject are 2 predefined functions
 on success --resolve--with success msg
 on failure---reject--with error msg
 
 resolve---then
 reject----catch
*/
// let promise=new Promise((resolve,reject)=>{
//     let status=false;
//     if(status)
//     {
//         resolve("Execution Successful")//then
//     }
//     else{
//         reject("Execution Failed")
//     }
// })
 
// promise.then((response)=>{console.log(response);})
// .catch((error)=>{console.log(error);})



 
// Get API
console.log("Start Execution!!!");
function show(name)
{
    console.log("In show Function");
    //Promise
    let promise=new Promise((resolve,reject)=>{
        //code which will take 3000 ms-- to complete execution
        setTimeout(()=>{
            console.log("In SetTimeOut");
           resolve("Name:"+name)
        },3000)  
    })    
    return promise;
}

// Service-using then and catch
// show("Sonali").then((msg)=>{
//     console.log(msg);
//     console.log("End Execution!!!");
// })
 

// output:-
// Start Execution!!!
// In show Function
// In SetTimeOut
// Name:Sonali
// End Execution!!!


//--------------------------------------//


// await is always work in asynchronous behavior means jab ap wait nahi kr rhe ho,and you wanted to wait
// it forcefully, async function hai , pr you have to wait(await)
 
// Consumer--service ---- using  async await
async function getName(name)
{
        let result=await show(name)//API call
        console.log(result);
        console.log("Execution End!!!");
}
 
getName("Sonali Ashish Maind");


// output:-
// Start Execution!!!
// In show Function
// In SetTimeOut
// Name:Sonali Ashish Maind
// Execution End!!!