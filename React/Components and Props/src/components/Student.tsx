import React from "react";

type prop_type={
    studs:{
        rollNo:number,
        name:string,
        address:string
    }[]
}

function Student(props:prop_type )

{
    return <><h1>Student Details</h1>
      {/* Employee Name:{props.employeeDetails.employeeName}
      Employee Id:{props.employeeDetails.employeeID}
      salery:{props.employeeDetails.salary} */}

<table>
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.studs.map((std)=>{
                            return <tr>
                                <td>{std.rollNo}</td>
                                <td>{std.name}</td>
                                <td>{std.address}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>

    <></></>
}



export default Student