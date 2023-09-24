import React, { useState } from "react";
import { Menu } from "./menu";
import { Link } from "react-router-dom";
export function Menupage() {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    const [count3,setCount3]=useState(0)
    const [count4,setCount4]=useState(0)

    const [count5,setCount5]=useState(0)
    const [count6,setCount6]=useState(0)
    const [count7,setCount7]=useState(0)
    const [count8,setCount8]=useState(0)

    const [count9,setCount9]=useState(0)
    const [count10,setCount10]=useState(0)
    const [count11,setCount11]=useState(0)
    const [count12,setCount12]=useState(0)

    const [count13,setCount13]=useState(0)
    const [count14,setCount14]=useState(0)
    const [count15,setCount15]=useState(0)
    const [count16,setCount16]=useState(0)

    






  
    return (
        <>
            <Menu />
            <h1 className="text-center">Tiffen</h1>
            <div class="row row-cols-1 row-cols-lg-4 row-cols-md-4 text-center g-4">

                <div class="col">
                    <div class="card h-75">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPIIMtkeB7ZaWoajMe1SMOK5Exv5RR6JGSvGXCo4JehxKNhV1EczMcS0Je3mpYtPhqFo&usqp=CAU" class="card-img-top img-fluid h-100" alt="..." />

                        <div class="card-body">
                            <h3>Idly</h3>
                        <button onClick={()=>{setCount(count+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count}/>
                        <button onClick={()=>{setCount(count-1)}}> sub </button>

                        <Link to="/Orderpage/1"><button className="text-center border-danger btn btn-dark text-light  ms-5">ORDER</button></Link>

                        </div>                        
                       
                    </div>
                </div>
                <div class="col">
                    <div class="card h-75">
                        <img src="https://www.secondrecipe.com/wp-content/uploads/2019/12/dosa.jpg" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                            <h3>Dosa</h3>
                        <button onClick={()=>{setCount1(count1+1)}}>Add </button>
                       <input type="text"  className="text-center" size="1" value={count1}/>
                        <button onClick={()=>{setCount1(count1-1)}}>sub </button>
                        <Link to="/Orderpage/2"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-75">
                        <img src="https://www.spicingyourlife.com/wp-content/uploads/2014/04/Madya-Pradesh-Atta-Dal-Kachori-Bhidai-Dhaniya-Chutney-Aloo-ki-Jhol.jpg" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">
                            <h3>Poori</h3>
                        <button onClick={()=>{setCount3(count3+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count3}/>
                        <button onClick={()=>{setCount3(count3-1)}}> sub </button>
                        <Link to="/Orderpage/3"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-75">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPJdlCrrzKbjduoBvvv43MKWi4R-qKpIO2g&usqp=CAU" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                            <h3>Idiyappam</h3>
                        <button onClick={()=>{setCount4(count4+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count4}/>
                        <button onClick={()=>{setCount4(count4-1)}}> sub </button>
                        <Link to="/Orderpage/4"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
            </div>



            <div class="row row-cols-1 row-cols-lg-4 row-cols-md-4  text-center g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2011/09/IMG_0503.jpg" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">
                            <h3>Pongal</h3>
                        <button onClick={()=>{setCount5(count5+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count5}/>
                        <button onClick={()=>{setCount5(count5-1)}}> sub </button>

                        <Link to="/Orderpage/5"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://cookingfromheart.com/wp-content/uploads/2021/08/5-Taste-Uthappam-2.jpg" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">
                            <h3>Uthappam</h3>
                        <button onClick={()=>{setCount6(count6+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count6}/>
                        <button onClick={()=>{setCount6(count6-1)}}> sub </button>
                        <Link to="/Orderpage/6"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://thumbs.dreamstime.com/b/indian-street-foods-whole-wheat-chapati-chapathi-generative-ai-indian-street-foods-whole-wheat-chapati-chapathi-281271697.jpg" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                            <h3>Chappathi</h3>
                        <button onClick={()=>{setCount7(count7+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count7}/>
                        <button onClick={()=>{setCount7(count7-1)}}> sub </button>
                        <Link to="/Orderpage/7"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVrl8REyIOfBHQaekU3PpGC8HTZu5F1Rhjxe9HyZGlmxkAP5ovQOixopuXwdxwfgZAX0&usqp=CAU" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">
                            <h3>Paniyaram</h3>
                        <button onClick={()=>{setCount8(count8+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count8}/>
                        <button onClick={()=>{setCount8(count8-1)}}> sub </button>
                        <Link to="/Orderpage/8"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <h1 className="text-center">Lunch</h1>


            <div class="row row-cols-1 row-cols-lg-4 mt-5 row-cols-md-4 text-center g-4">

                <div class="col">
                    <div class="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsj7z_FE3ea_560HajguQFQY4-7B1VZkJ5u7auOazkbVsimypNcf3jnVAKKfv-FaW-sYk&usqp=CAU" class="card-img-top img-fluid h-100" alt="..." />

                        <div class="card-body">
                            <h3>Veg Meals</h3>
                        <button onClick={()=>{setCount9(count9+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count9}/>
                        <button onClick={()=>{setCount9(count9-1)}}> sub </button>

                        <Link to="/Orderpage/9"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>

                        </div>                        
                       
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://thumbs.dreamstime.com/b/proud-bengali-vegetarian-dish-192121624.jpg" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                            <h3>Elai Sapadu</h3>
                        <button onClick={()=>{setCount10(count10+1)}}>Add </button>
                       <input type="text"  className="text-center" size="1" value={count10}/>
                        <button onClick={()=>{setCount10(count10-1)}}>sub </button>
                        <Link to="/Orderpage/10"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2018/11/2/original/BHUUVA13.JPG" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">
                            <h3>Non-Veg Meals</h3>
                        <button onClick={()=>{setCount11(count11+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count11}/>
                        <button onClick={()=>{setCount11(count11-1)}}> sub </button>
                        <Link to="/Orderpage/11"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://im.hunt.in/local/Gallery/3074831/l/3074831_a8a38.jpg" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                            <h3>Malabar Non-veg Meals</h3>
                        <button onClick={()=>{setCount12(count12+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count12}/>
                        <button onClick={()=>{setCount12(count12-1)}}> sub </button>
                        <Link to="/Orderpage/12"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
            </div>



            <div class="row row-cols-1 row-cols-lg-4 row-cols-md-4 mt-5 text-center g-4">
                <div class="col">
                    <div class="card h-75">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7cB8A0JM52y-ekmtVrwmkzZUTzE4ntihxQ&usqp=CAU" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                        <h3>Mutton Biriyani</h3>
                        <button onClick={()=>{setCount13(count13+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count13}/>
                        <button onClick={()=>{setCount13(count13-1)}}> sub </button>

                        <Link to="/Orderpage/13"><button className="text-center border-danger btn btn-dark text-light ms-5 ">ORDER</button></Link>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-75">
                        <img src="https://images.picxy.com/cache/2020/10/28/fad6e1f26b8229d00cbfcc2732a467a2.jpg" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">

                            <h3>Biriyani Offer</h3>
                        <button onClick={()=>{setCount14(count14+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count14}/>
                        <button onClick={()=>{setCount14(count14-1)}}> sub </button>
                        <Link to="/Orderpage/14"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-75">
                        <img src="https://m.media-amazon.com/images/I/81bz+pmpaSL._AC_UF1000,1000_QL80_.jpg" class="card-img-top img-fluid h-75" alt="..." />
                        <div class="card-body">
                            <h3>Special Chicken Biriyani</h3>
                        <button onClick={()=>{setCount15(count15+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count15}/>
                        <button onClick={()=>{setCount15(count15-1)}}> sub </button>
                        <Link to="/Orderpage/15"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-75">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RGjcSkyTVcTcWtl0KXyDW6It1ndMo2vUQw&usqp=CAU" class="card-img-top img-fluid h-100" alt="..." />
                        <div class="card-body">
                            <h3>Kerala Biriyani</h3>
                        <button onClick={()=>{setCount16(count16+1)}}> Add </button>
                        <input type="text" className="text-center" size="1" value={count16}/>
                        <button onClick={()=>{setCount16(count16-1)}}> sub </button>
                        <Link to="/Orderpage/16"><button className="text-center border-danger btn btn-dark text-light ms-5">ORDER</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}