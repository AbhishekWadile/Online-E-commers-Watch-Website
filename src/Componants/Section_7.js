import React from "react";

export default function Section_7() {
    return(
        <section className=" flex justify-center items-center w-screen h-screen relative top-3 -left-12 text-white font-poppins ">
            <div className="w-90% h-60vh flex justify-around items-center">
                <div className=" flex justify-center items-center w-60% h-50vh border-r-2" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <form action="" className="flex flex-col justify-around items-center  w-70% h-50vh">
                        <h1 className="text-2xl">Contact Us</h1>
                        <input className="w-70% h-8 rounded-xl flex justify-center text-black pl-3" type="text" placeholder="Your Name" />
                        <input className="w-70% h-8 rounded-xl flex justify-center text-black pl-3" type="text" placeholder="Email address" />
                        <input className="w-70% h-8 rounded-xl flex justify-center text-black pl-3" type="text" placeholder="Phone no." />
                        <input className="w-70% h-14 rounded-xl flex justify-center text-black pl-3" type="text" placeholder="How can we help you?" />
                        <button className="w-30% h-8 border-2 rounded-xl">Submit</button>
                    </form>
                </div>
                <div className=" w-40% h-30vh flex flex-col justify-around items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                    <h1 className="text-2xl">Feedback</h1>
                    <div className="flex justify-around items-center w-30% text-2xl">
                       <i class="bi bi-star bi-2x cursor-pointer"></i>
                       <i class="bi bi-star bi-2x cursor-pointer"></i>
                       <i class="bi bi-star bi-2x cursor-pointer"></i>
                       <i class="bi bi-star bi-2x cursor-pointer"></i>
                       <i class="bi bi-star bi-2x cursor-pointer"></i>
                    </div>
                    <input className="w-70% h-14 rounded-xl flex justify-center text-black pl-3"  type="text" placeholder="write feedback" />
                    <button className="w-30% h-8 border-2 rounded-xl">Submit</button>
                </div>
            </div>
        </section>
    )
}