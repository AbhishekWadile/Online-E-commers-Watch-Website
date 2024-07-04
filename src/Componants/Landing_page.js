import React from "react";
import myImg from "./john-torcasio-TJrkkhdB39E-unsplash__1_-removebg-preview.png";
export default function Landing_page() {
  return (
    <div className="bg-black text-white m-0 font-poppins">
      <div className="flex justify-around h-15 pt-2 pb-4 border-b-2" data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true">
        <h4 className="text-4xl ">AN watches</h4>
        <ul type="" className="flex justify-around space-x-11 pt-1 ">
          <li className="cursor-pointer border-2 border-transparent rounded-2xl pt-1 px-12 duration-300 hover:border-2 hover:border-white hover:rounded-2xl ">HOME</li>
          <li className="cursor-pointer border-2 border-transparent rounded-2xl pt-1 px-12 duration-300 hover:border-2 hover:border-white hover:rounded-2xl">CATEGORY</li>
          <li className="cursor-pointer border-2 border-transparent rounded-2xl pt-1 px-12 duration-300 hover:border-2 hover:border-white hover:rounded-2xl">CONTACT</li>
        </ul>
        <div className="flex justify-around space-x-2">
          <button className="cursor-pointer border-2 border-transparent rounded-2xl  px-9 duration-300 hover:border-2 hover:bg-white hover:text-black hover:border-white hover:rounded-2xl">LOGIN</button>
          <span className="material-symbols-outlined pt-1 cursor-pointer border-2 border-transparent rounded-2xl  px-3 duration-300 hover:border-2 hover:border-white hover:rounded-2xl"> shopping_cart </span>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen py-30 w-full">
        <div className="flex justify-around items-center w-3/4 py-30 h-96">
          <div className="pl-30" data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true">
            <h1 className="text-5xl">WELCOME TO OUR WEBSITE HOPE  U ENJOY SHOPPING</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel quas voluptate!</p>
            <button id="" className="flex justify-around mt-4 h-19 cursor-pointer border border-white px-9 pt-2 duration-300 hover:border hover:bg-white hover:text-black hover:border-white ">EXPLORE NOW <span className="material-symbols-outlined  cursor-pointer border border-transparent rounded-2xl  px-3 pb-2 duration-300"> shopping_cart </span></button>
          </div>
          <img
            src={myImg}
            alt=""
            className="h-21"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          />
        </div>
      </div>
    </div>
  );
}
