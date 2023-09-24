import React from "react";
import { Menu } from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export function Contact() {
    return (
        <>
            <Menu />

            
            <div className="contact">
               <div className="contact-body row gap-5 p-5">
                <div className="contact-title col-lg-4 col-12 p-3">
                <h2>Contact Us 👇</h2>
                <h4>SARA Restaurant</h4>
                <h5>Address: 30/A, P.K puthur,Salem Road,Namakkal-637019</h5><br/>
                <h5>Phone No:6380400095, 9344063619</h5>
                </div>

                <div className="contact-title col-lg-4 col-12 p-3">
                <h2>Service</h2>
                <h4>SARA Restaurant</h4>
                <h6>👉We can provide you a HOME DELIVERY, at the foot Door at  what time your prefere  </h6>
                <h6>👉We provide too a catering service for a functions like  Marriage function, and Earing function and More </h6>
                <h5>Phone No: 6380400095</h5>
                </div>
                

               </div>
            </div>
            <h3 className="text-center bg-dark text-light p-3">FeedBack</h3>
            <div class="Contact-img" id="Contact">

                <div class="contact-body text-center row gap-5 p-5 ">
                   
                    <div class="contact-title col-sm-3 col-6 p-3">
                        <h5 class="card-title">Altimated taste 😋</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Very nice</h6>
                        <p class="card-text">The SARA restaurant service was really good and taste too. The service quality was truly exceptional , I can't wait to come back.</p>

                    </div>

                    <div class="contact-title col-sm-3 col-6 p-3">
                        <h5 class="card-title">Amazing Food 👌</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Especiallly the Biriyani..</h6>
                        <p class="card-text">The taste of the chicken Biriyani is delicious. Here after I prefer everyone to taste SARA restaurant..Keep going SARA.</p>

                    </div>
                    <div class="contact-title col-sm-3 col-6 p-3">
                        <h5 class="card-title">Delicious Food 🤤</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Atmosphere Friendly</h6>
                        <p class="card-text">I recently dined at SARA Restaurant. The reservation was easy to make, and the staff was extremely helpful in accommodating our special requests. </p>


                    </div>
                    <div class="contact-title text-center  col-sm-4 col-6 p-3">
                        <h5 class="card-title "> Must INN 🚶‍♀️</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Fine And Good</h6>
                        <p class="card-text">Absolutely amazing meal this past Saturday! The meat was cooked perefectly, the atmosphere was cozy, Check this spot out!..</p>


                    </div>

                    <div class="contact-title col-sm-4 col-6 ">
                        <h5 class="card-title"> Must see 🤩</h5>
                        <iframe width="360" height="250" src="https://www.youtube.com/embed/6WTwNk6wKqs?si=yA1X-zGKp3Eh93wL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="mt-3 "></iframe>


                    </div>

                </div>

            </div>

            {/* footer */}
            <div className="d-flex justify-content-between align-items-center pe-5 bg-dark ">
                <p className=" text-light ps-5">copyright</p>
                <h4 class="socialIcon">
                    <FontAwesomeIcon icon={faTwitter} beatFade size="lg" className="p-3" style={{ color: "#898c90", }} />
                    <FontAwesomeIcon icon={faInstagram} beatFade size="lg" className="p-3" style={{ color: "#898c90", }} />
                    <FontAwesomeIcon icon={faYoutube} beatFade size="lg" className="p-3" style={{ color: "#898c90", }} />
                    <FontAwesomeIcon icon={faLocationDot} beatFade size="lg" className="p-3" style={{ color: "#b1b6be", }} />
                </h4>
            </div>

        </>
    );
}