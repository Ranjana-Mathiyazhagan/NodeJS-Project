import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "./menu";
export function Registerpage() {

    function handlelogin(event) {
        event.preventDefault()
        var name = document.getElementById("name").value
        
        var password = document.getElementById("password").value
       
        var confirm = document.getElementById("confirm").value
        
        var email = document.getElementById("email").value
        
        var mobile = document.getElementById("mobile").value
        
        var roll = document.getElementById("roll").value
        


        var key = {
            name: name,
            password: password,
            confirm: confirm,
            email: email,
            mobile: mobile,
            roll : roll
        }

        if (name == '') {
            alert("Enter the name")
        }

        else if (password == '') {
            alert("Enter the password")
        }
        else if (confirm == '') {
            alert("Enter the confirm")
        }
        else if (email == '') {
            alert("Enter the email")
        }
        else if (mobile == '') {
            alert("Enter the mobile")
        }
        else if (roll == '') {
            alert("Enter the roll")
        }

        else {
            axios.post("http://localhost:3002/register", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not inserted")

                    }
                    else if (res.data.status === "success") {
                        alert("Successfully Register")
                        window.location.href = "/Loginpage"

                    }
                })
        }
    }
    return (
        <>
            <Menu />
            <div className="contain-div" >
                <h1 className="text-center text-light">Registration Form</h1>
                <form onSubmit={handlelogin} className="  p-5  mt-5 d-flex flex-column justify-content-center align-items-center " >
                    <table>
                        <tr>
                            <td> <label className="fw-bold text-light">Name:</label></td>
                            <td> <input type="text" className="border-dark " placeholder="Enter your Name" id="name" ></input><br /></td>
                        </tr>

                        <tr>
                            <td> <label className="fw-bold text-light">Password:</label></td>
                            <td> <input type="password" className="border-dark" placeholder="Enter your password" id="password"></input><br /></td>
                        </tr>
                        <tr>
                            <td> <label className="fw-bold text-light">Confirm Password:  </label></td>
                            <td> <input type="password" className="border-dark" placeholder="Re-Enter Password" id="confirm"></input><br /></td>
                        </tr>
                        <tr>
                            <td> <label className="fw-bold text-light">EmailId:</label></td>
                            <td> <input type="email" className="border-dark" placeholder="Enter your E-mail" id="email" ></input><br /></td>
                        </tr>
                        <tr>
                            <td> <label className="fw-bold text-light">Mobile:</label></td>
                            <td> <input type="tele" className="border-dark" placeholder="Enter your Mobile Number" id="mobile" ></input><br /></td>
                        </tr>
                        <tr>
                            <td><label className="fw-bold text-light">Roll:</label></td>
                            <td><select id="roll">
                                <option value="roll">Select Login</option>
                                <option value="owner">Owner</option>
                                <option value="user">User</option>
                            </select>
                            </td>
                        </tr>


                    </table>
                   <button className="text-center border-danger btn btn-dark text-light mt-5">Submit</button>
                    <Link className="text-light fs-4 fw-bold " to={'/loginpage'}>Already Logedin</Link>
                </form>
            </div>
        </>
    );
}