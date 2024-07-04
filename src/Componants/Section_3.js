import React from "react";
import card1 from "./image1.png";
import card2 from "./image2.png";
import card3 from "./image3.jpg";
import card4 from "./image4.png";
import card5 from "./image5.jpg";
import card6 from "./image6.jpg";
import card7 from "./image7.jpg";
import card8 from "./image8.jpg";
export default function Section_3(){
    return(
        <section className="flex justify-center items-center w-screen h-130vh relative -top-28 text-white font-poppins ">
            <div className=" w-90% h-130vh   flex flex-col justify-around items-center ">
                <div className="flex justify-around items-center w-90% h-96  border-blue">
                    <div className=" w-56 h-60vh  bg-gradient-to-b from-black to-zinc-900 rounded-xl"data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                        <img src={card1} className=" h-56 flex justify-center items-center pl-12 pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 1</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900 "data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                        <img src={card2} className=" h-56 flex justify-center items-center pl-4 pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 2</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900 "data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <img src={card3} className=" h-56 flex justify-center items-center pl-8 pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 3</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900 "data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <img src={card4} className=" h-56 flex justify-center items-center pl-7 pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 4</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="flex justify-around items-center w-90% h-96 border-blue">
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900 "data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                        <img src={card5} className=" h-56 flex justify-center items-center pl-8 pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 5</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900"data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                        <img src={card6} className=" h-56 flex justify-center items-center mt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 6</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900 "data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <img src={card7} className=" h-56 flex justify-center items-center w-96 pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 7</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    <div className=" w-56 h-60vh bg-zinc-900 rounded-xl bg-gradient-to-b from-black to-zinc-900 "data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <img src={card8} className=" h-56 flex justify-center items-center pt-3 " alt="" />
                        <h1 className="text-3xl pl-2 pt-5">Card 8</h1>
                        <div className="flex justify-around items-center p-1 pt-4">
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <h2>230/-</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}