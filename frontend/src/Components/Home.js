import React from "react";
import { Menu } from "./menu";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Menu />

      <h1 className="text-center">Welcome Inn HOTEL</h1>
      <div className="row">
        <div className="col-lg-6">
          <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=826&t=st=1695270955~exp=1695271555~hmac=cced8e09cb8a228e424a36e11f7ddc8adbf1fc697c5caa776011ddd0f388766e" className="img-fluid " />

        </div>
        <div className="col-lg-6 d-flex flex-column  justify-content-center align-items-center ">
          <h3 className="">Get in ,Taste Food</h3><br />
          <h5 className="fw-bold text-center"><Typewriter
            options={{
              strings: ['Come here 🏃 Taste now 😋 Repeat often ✌️'],
              autoStart: true,
              loop: true,

            }} /></h5>
            

        </div>

      </div>

      <div className="home-img  d-flex justify-content-center align-items-center mt-3">
        <h3 className="text-dark ">Place where food, design, and ambiance come together to create a memorable experience.</h3>
      </div>

      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center ">
          <h3 className=" text-center">Inspired by the seasons, our tasting menus offer fresh, local ingredients in unique flavor combinations.</h3>

        </div>
        <div className="col-lg-6">
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="img-fluid mt-3 ms-5" />
          <br/>

        </div>

      </div>

      {/* footer */}

      <div className="d-flex justify-content-between align-items-center pe-5 mt-4 bg-dark ">
        <p className=" text-light ps-5">copyright</p>
        <h4 class= "socialIcon">
        <Link to="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} beatFade size="lg" className="p-3" style={{color: "#898c90",}} /></Link>
        <Link to="https://instagram.com/mad_at_her_man?igshid=ZDc4ODBmNjlmNQ=="><FontAwesomeIcon icon={faInstagram} beatFade size="lg" className="p-3" style={{color: "#898c90",}} /></Link>
        <Link to="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} beatFade size="lg" className="p-3" style={{color: "#898c90",}} /></Link>
        <Link to="https://www.google.com/maps/place/Salem+-+Namakkal+Rd,+R.P+Pudur,+Namakkal,+Tamil+Nadu/@11.2303051,78.1622605,17z/data=!3m1!4b1!4m6!3m5!1s0x3babce8d5a3861b3:0xeef17a71cdf5c9e3!8m2!3d11.2302998!4d78.1648354!16s%2Fg%2F11c55rr6dd?entry=ttu"><FontAwesomeIcon icon={faLocationDot} beatFade size="lg" className="p-3" style={{color: "#b1b6be",}} /></Link>

        </h4>
      </div>


    </>
  );
}