import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "./menu";
export function Update() {
    var { fid } = useParams()
    const [fname, setFname] = useState('')
    const [fprice, setFprice] = useState('')


    useEffect(() => {
        fetch("http://localhost:3002/singledata/" + fid)
            .then(res => res.json())
            .then((output) => {
                setFname(output[0].fname)
                setFprice(output[0].fprice)

            })
    }, [])

    // update function
    function handleupdate(event) {
        event.preventDefault()
        var fname = document.getElementById("fname").value
        var fprice = document.getElementById("fprice").value


        var key = {
            fname: fname,
            fprice: fprice,

        }

        if (fname == '') {
            alert("Enter the food name")
        }

        else if (fprice == '') {
            alert("Enter the price")
        }

        else {
            axios.put("http://localhost:3002/update/" + fid, key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not updated")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data are updated")
                        window.location.href = '/Ownerpage/:id'
                    }
                })
        }
    }
   


    return (
        <>
        <Menu/>
            
            <div className="update-img " >
                <h1 className="text-center text-light p-5">Update Food Items</h1>
                <form onSubmit={handleupdate} className=" mt-5 vh-90 p-4  d-flex flex-column justify-content-center align-items-center " >
                    <table>
                        <tr>
                            <td className="fw-bold p-3"> <label>Food Item :</label></td>
                            <td> <input type="text" id="fname" onChange={(a) => setFname(a.target.value)} value={fname} ></input><br /></td>
                        </tr>

                        <tr>
                            <td className="fw-bold p-3"> <label>Food Price:</label></td>
                            <td> <input type="text" id="fprice" onChange={(a) => setFprice(a.target.value)} value={fprice}></input><br /></td>
                        </tr>

                    </table>
                    <button className="text-center  btn btn-primary  mt-4">Update</button>

                </form>
            </div>
        </>
    );
}