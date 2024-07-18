
import React from 'react'


type prop_type={

  status ?:"success" | "error" | "failure"  //status will only accept this value not other than that // optional props
//string literals
// children:string   // Children Props as string

children:React.ReactNode // children as a another component
    
}
function Login(props:prop_type) {
  return (
    <div>
      {props.children} <br></br>
    Login:{props.status}
    </div>
  )
}

export default Login
//rfce