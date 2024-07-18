
import React, { ChangeEvent, FormEvent, useState } from 'react'
 
interface CustomerType {
    name: string;
    email: string;
    address: string;
    gender: string;
    language: string;
}
 
function AddCustomer() {
    const [customer, setCustomer] = useState({} as CustomerType);
 
    let inputChangeHandler = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        console.log("Change");
        setCustomer({
            ...customer, // spread-operator
            [event.target.name]: event.target.value,
        });
    };
 
    let formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(customer);
    };
 
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Customer Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={customer.name}
                                    onChange={inputChangeHandler}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Customer Email</label>
                            </td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={customer.email}
                                    onChange={inputChangeHandler}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Address</label>
                            </td>
                            <td>
                                <textarea
                                    cols={23}
                                    rows={5}
                                    name="address"
                                    value={customer.address}
                                    onChange={inputChangeHandler}
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Gender</label>
                            </td>
                            <td>
                                <select name="gender" value={customer.gender} onChange={inputChangeHandler}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Language</label>
                            </td>
                            <td>
                                <select name="language" value={customer.language} onChange={inputChangeHandler}>
                                    <option value="">Select Language</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Marathi">Marathi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value={"Add Customer"}></input>
                            </td>
                            <td>
                                <input type="reset" value={"Cancel"}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
 
export default AddCustomer
 
 