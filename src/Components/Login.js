import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "./menu";
export function Loginpage() {
    function handlelogin(event) {
        event.preventDefault()
        var email = document.getElementById("email").value
        
        var password = document.getElementById("password").value
      

        var key = {
            email: email,
            password: password
        }
        if (email == '') {
            alert("plz enter email")
        }
        else if (password == '') {
            alert("plz enter password")
        }
        else {
            axios.post("http://localhost:3002/login", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        alert("plz enter username or register a new one")
                    }
                    else if (res.data.status === "success") {
                        var id = res.data.id
                        console.log(id)
                        var roll=res.data.roll
                         
                        if (roll === "owner"){
                            alert ("successfully owner logged in")
                            window.location.href =`/Ownerpage/${id}`
                        }
                        else{
                            alert("successfully  user logged in")
                        window.location.href = `/Home/${id}`

                        }

                        
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("plz check your password")
                    }
                    else if (res.data.status === "error") {
                        alert("all the data are invalid")
                    }
                    else {
                        alert("plz register your details first")
                    }
                })
        }

    }
    return (
        <>
            <Menu />
            <div className="login-div">
                <h1 className="text-center ms-4  ">Login Page</h1>
                <div className="d-flex align-items-center flex-column ">
                    <form onSubmit={handlelogin} className=" w-50 py-5 mt-5 me-1 text-center">

                        <label className="fw-bold text-light">EmailId:</label>
                        <input type="email" id="email" placeholder="Enter the email" name="email" /><br /><br />

                        <label className="fw-bold text-light">Password:</label>
                        <input type="password" id="password" placeholder="Enter the password" name="password" /><br/><br/>
                        
                      


                        <input type="submit" />
                        <Link className="text-light  r mt-3" to={'/Registerpage'}>  Register </Link>
                    </form>

                </div>
            </div>

        </>
    );

}
