import React, { ChangeEvent, FormEvent, useState } from 'react'
interface employee_type
{
    name:string,
    email:string,
    address:string,
    gender:string
}
function AddEmployee() {
    //state--object
    const [employee,setEmployee]=useState({} as employee_type)
 
    let inputChangeHandler=(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        console.log("Change");

        setEmployee({
            ...employee,//spread existing properties and relvent value from employees object
            [event.target.name]:event.target.value //it will override target element value with new one
        })
       
    }

    let formSubmitHandler=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(employee)
    }
  return (
    <div>
      <form  onSubmit={formSubmitHandler}>
            <table>
                <tbody>
                    <tr>
                        <td><label>Employee Name</label></td>
                        <td><input type='text'
                            name='name'
                            value={employee.name}
                            onChange={inputChangeHandler}
                            ></input></td>
                    </tr>
                    <tr>
                    <td><label>Employee Email</label></td>
                    <td><input type='email'
                            name='email'
                            value={employee.email}
                            onChange={inputChangeHandler}
                            ></input>
                    </td>
                </tr>
                <tr>
                    <td><label>Employee Address</label></td>
                    <td>
                        <textarea cols={23} rows={5} name='address'
                        value={employee.address}
                        onChange={inputChangeHandler}
                        ></textarea>
                    </td>
                </tr>
                <tr>
                    <td><label>Gender</label></td>
                    <td>Male <input type='radio'
                            name='gender'
                            value={"Male"}
                            onChange={inputChangeHandler}
                           ></input>
 
                        Female <input type='radio'
                            name='gender'
                            value={"Female"}
                            onChange={inputChangeHandler}
                           ></input>
                    </td>
                </tr>
                <tr>
                <td><input type='submit' value={"Add Employee"}></input></td>
                <td><input type='reset' value={"Cancel"}></input></td>
            </tr>
                </tbody>
            </table>
        </form>
    </div>
  )
}
 
export default AddEmployee