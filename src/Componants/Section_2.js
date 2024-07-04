import React from "react";

export default function Section_2() {
    return(
        <section className="w-full flex justify-center bg-black h-52 text-white font-poppins" data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true">
        <div className="w-70% relative -top-20">
          <div className="flex justify-center items-center border-2 border-white rounded-full h-14 w-full">
            <input className="w-95% rounded-full bg-transparent p-2 rounded-r-none hover:border-none" type="text" name="" placeholder="Type to search"/>
            <a className="rounded-full border-2 h-12 mr-1 border-white flex justify-center items-center w-5% duration-300 hover:border hover:bg-white hover:text-black hover:border-white" href="colorfullRGBbutton.html">
                <i className="fas fa-search"></i>
            </a>
          </div>  
          <div className="flex justify-center items-center"> 
            <ul type="none" className="flex justify-around items-center mt-10 w-95%">
              <li className="flex justify-center items-center h-10 w-32 cursor-pointer border-2 border-transparent rounded-full duration-300 hover:border-2 hover:border-white hover:rounded-full">Gender</li>
              <li className="flex justify-center items-center h-10 w-32 cursor-pointer border-2 border-transparent rounded-full duration-300 hover:border-2 hover:border-white hover:rounded-full">Price</li>
              <li className="flex justify-center items-center h-10 w-32 cursor-pointer border-2 border-transparent rounded-full duration-300 hover:border-2 hover:border-white hover:rounded-full">Dial Color</li>
              <li className="flex justify-center items-center h-10 w-32 cursor-pointer border-2 border-transparent rounded-full duration-300 hover:border-2 hover:border-white hover:rounded-full">Strap Color</li>
              <li className="flex justify-center items-center h-10 w-32 cursor-pointer border-2 border-transparent rounded-full duration-300 hover:border-2 hover:border-white hover:rounded-full">Discounts</li>
            </ul>
          </div>        
        </div>
      </section>
    );
    
}