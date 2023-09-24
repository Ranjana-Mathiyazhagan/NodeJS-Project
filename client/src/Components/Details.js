
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./menu";
export function Details() {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch("http://localhost:3002/getdata")
            .then(hotel => hotel.json())
            .then(fetch => setBooking(fetch))
    })

    const delt=(fid)=>{
        var key={fid:fid}
        axios.post('http://localhost:3002/delete',key)
        .then((res)=>{
          if(res.data.status==="error"){
            alert("data are not delete")
          }
          else if(res.data.status==="success"){
         alert("data are deleted")
          }
        })
     }



       return (
        <>
        <Menu/>
        <div className="table-img text-light d-flex justify-content-start align-items-center flex-column" >
            <h1 className="text-center">Show details</h1>
            

         
            <table className="table food-table w-75 ms-4 mt-5">
                <tr>
                    <th>F.Id</th>
                    <th>Food Items</th>
                    <th>Food Price</th>
                    <th>Update the items</th>
                    <th>Delete the items</th>

                </tr>
                {/* update code */}
                {
                    booking.map((value, index) => (
                        <>

                            <tr>
                                <td>{value.fid}</td> 
                                <td>{value.fname}</td>
                                <td>{value.fprice}</td>
                                {/* <td><Link to={`/update/${value.fid}`}><button className="btn btn-danger mb-4 ">Delete</button></Link></td>  */}


                                <td> <Link to={`/update/${value.fid}`}><button className="btn-content mb-2">Update</button></Link> </td>
                              
                               
                                <td><button onClick={()=>{delt(value.fid)}} className="btn btn-danger mb-2 ">Delete</button></td> 
                               
                            </tr>
                        </>
                    ))
                }

                


            </table>
            </div>
        </>
    );

}