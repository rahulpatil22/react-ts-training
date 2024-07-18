// import React, { useState } from 'react'

// function Demo() {

//     const[count,setCount]=useState(0);


// let change=()=>{
//     console.log("In Change Method");
//     setCount(count+2)

// }


//   return (
//     <div>
//       {count}<br></br>
//       <button onClick={change}>Increment</button>
//     </div>
//   )
// }

// export default Demo


import React, { useEffect, useState } from 'react'
 
function Demo() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
/*
useEffect()--
dependeciesList not provided --ComponentDidMount(Initial Render)-2/  
                              ComponentDidUpdate()
 
dependeciesList[] Empty --ComponentDidMount(Initial Render)-2
 
dependeciesList[count] Empty --ComponentDidMount(Initial Render)-2/
                          ComponentDidUpdate() for count/componentWillUnmount()-2
*/
   
    /*
    useEffect()--function---react module
    Note:-- In React 17 and ferther varsion --useEffect() get invoked 2 time
    useEffect(function,[dependecies]):-
    -always call on each render of component if we are not passing dependency array
    */
//    useEffect(()=>{
//     console.log("In useEffect Hook!!!");
//    })
    //DependenciesList--empty---invoked useEffect() hook on initial render of component
//     useEffect(()=>{
//     console.log("In useEffect Hook!!!");
//    },[])
 
 
/*
    Class--Life Cycle Method
    Function:--Hook--useEffect() Hook--ComponentDidMount(Initial Render)-2/ComponentDidUpdate()/componentWillUnmount()-2
*/
    useEffect(()=>{
    console.log("In useEffect Hook!!!--for ever change in count variable");
    //Fetch code /HitAPI--
   },[count])
 
 
   let change=()=>{
    console.log("In Change method");        
    setCount(count+2)
    }
    let changeName=()=>{
        console.log("In Change Name");
        setName("Sonali")        
    }
  return (
    <div>
      {count}<br></br>
      <button onClick={change}>Increment</button><br></br>
      {name}<br></br>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}
 
export default Demo