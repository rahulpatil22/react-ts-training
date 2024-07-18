import React from "react";

// type prop_type={
    
//     employeeDetails:{

// employeeName:string,
// employeeID:number,
// salary:number

//     }
// }

type prop_type={
    emps:{
        name:string,
        email:string,
        address:string
    }[]
}

function Employee(props:prop_type )

{
    return <><h1>Employee Details</h1>
      {/* Employee Name:{props.employeeDetails.employeeName}
      Employee Id:{props.employeeDetails.employeeID}
      salery:{props.employeeDetails.salary} */}

<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.emps.map((emp)=>{
                            return <tr>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.address}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>

    <></></>
}



export default Employee