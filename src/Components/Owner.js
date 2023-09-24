import React from "react";
import { Link } from "react-router-dom";
export function Ownerpage() {
    return (
        <>
            <h1>Hii SARA Restaurant Owner.!!</h1>
            <div>
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Food Items</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/details"><button>view</button></Link> 
                    </div>
                </div>
            </div>


        </>
    );
}