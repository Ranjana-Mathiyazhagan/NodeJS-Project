import React from "react";
import { Menu } from "./menu";
export function About() {
    return (
        <>
            <Menu />
            <div className="text-center p-5">

                <div className="vission-img d-flex justify-content-center align-items-center flex-column text-light ">
                    <h1 className="text-dark-mission" >Vission</h1>
                    <p className="text-dark-mission" >At SARA, we create good memories by serving original-style deep-dish pizza using a recipe that has been passed down over generations. Our restaurant provides an authentic dining experience that is unique to the area.</p>
                </div>
                <div className="mission-img  d-flex justify-content-center align-items-center flex-column text-light mt-5">
                    <h1 className="text-light-mission">Mission</h1>
                    <p className="text-light-mission">At SARA, we create good memories by serving original-style deep-dish pizza using a recipe that has been passed down over generations. Our restaurant provides an authentic dining experience that is unique to the area.</p>

                </div>

              
                <div className="row">
                    <div className="col-lg-6 mt-5 d-flex justify-content-center flex-column align-items-center ">
                        <h4> Catering services</h4>
                        <p text-center>Inspired by the seasons, our tasting menus offer fresh, local ingredients in unique flavor combinations.</p>

                    </div>
                    <div className="col-lg-6">
                        {/* <img src="https://i0.wp.com/www.wekivaculinary.org/wp-content/uploads/2021/07/Culinary-students-3.jpeg?w=730&ssl=1" className="img-fluid mt-3 ms-5" />
                        <br /> */}



                        <div id="carouselExampleFade" class="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://i0.wp.com/www.wekivaculinary.org/wp-content/uploads/2021/07/Culinary-students-3.jpeg?w=730&ssl=1" class="d-block rounded-circle img-fluid w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://eatnorth.com/sites/default/files/styles/twitter_card/public/field/image/dsc_0297.jpg?itok=fAN0iEAT" class="d-block rounded-circle img-fluid w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuzvVVjWBkFzG9dL5t8ABtK5ZpH6fGDzn7RXU6GKsBVxZNqSMUfYDKoFgC_7z-zqc6i8&usqp=CAU" class="d-block rounded-circle img-fluid w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://ychef.files.bbci.co.uk/976x549/p012x9sc.jpg" class="d-block rounded-circle img-fluid w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
            {/* </div> */}
        </>
    );
}