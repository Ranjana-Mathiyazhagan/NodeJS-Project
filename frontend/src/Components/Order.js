import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Menu } from "./menu";
import axios from "axios";
export function Orderpage() {

    var { fid } = useParams()
    const [fname, setFname] = useState('')
    const [fprice, setFprice] = useState('')
    useEffect(() => {
        fetch("http://localhost:3002/singledata/" + fid)
            .then(food => food.json())
            .then((fetch) => {
                setFname(fetch[0].fname)
                setFprice(fetch[0].fprice)
            })
    })


    function handleorder(event) {
        event.preventDefault()
        var fname = document.getElementById("fname").value 
        alert(fname)      
        var fprice= document.getElementById("fprice").value
        alert(fprice)
        
        

        var key = {
            fname:fname,
            fprice:fprice,
            
        }

        if ( fname == '') {
            alert("Enter the fname")
        }

        else if ( fprice == '') {
            alert("Enter the fprice")
        }
       
                   
        else {
            axios.post("http://localhost:3002/orderpage", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not inserted")
                       
                    }
                    else if (res.data.status === "success") {
                        alert("data are inserted")
                        alert("Order More")
                        window.location.href="/Menupage"
                       
                    }
                })
        }
    }
    // console.log(fooditem)

    return (
        <>
            <Menu />
            <div className="order-image">
                <h1 className="  text-center text-dark p-5">Order Now</h1>
                

                   

                        <form className="  p-3  d-flex flex-column justify-content-center align-items-center " >
                            <table>
                               
                                <tr>
                                    <td> <label className="fw-bold fs-4 text-light">Food Name:</label></td>
                                    <td> <input type="text" className="border-dark" placeholder="Enter your E-mail" id="fname" value={fname}/><br/></td>
                                </tr>
                                <tr>
                                    <td> <label className="fw-bold fs-4 text-light">Price:</label></td>
                                    <td> <input type="text" className="border-dark" placeholder="Enter your Mobile Number" id="fprice" value={fprice}/><br /></td>
                                </tr>

                            </table>
                            <button onClick={ handleorder} className="text-center border-danger btn btn-dark text-light mt-5">Order</button>
                            <Link to="/Menupage/"><button className="text-center border-danger btn btn-dark text-light ">Delete</button></Link>

                        </form>
                
                  

            </div>
        </>
    );
}