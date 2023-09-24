import React from 'react';
import { Link } from 'react-router-dom';


export function Menu() {
    return (
        <>
            {/* <div class="container-fluid ">
                <nav class="navbar navbar-expand-lg  bg-dark navbar-light bg-light">
                    <div class="container-fluid d-flex flex-row-reverse ">
                        </div>
                </nav>
            </div> */}





            <nav class="navbar navbar-expand-lg sticky-top ">
                <div class="container-fluid">
                    <a class="navbar-brand text-light " href="#">SARA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/Menupage">Menu</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link text-light" to="/Orderpage">Order</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/Contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active text-light" aria-current="page" to="/Registerpage">Register</Link>

                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active text-light" aria-current="page" to="/Loginpage">Login</Link>

                            </li>


                            
                   
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}