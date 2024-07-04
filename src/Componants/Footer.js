import React from "react";

export default function Footer() {
    return(
        <footer className="w-screen h-50vh bg-gradient-to-t from-black to-zinc-900 text-white flex flex-col justify-around items-center font-poppins">
            <div className="w-70% h-50vh flex flex-col justify-around items-center">
                <h1>Contact:- +91 1234 2344 78</h1>
                <h1>Email:- anwatches@gmail.com</h1>
                <h1><i className="bi bi-geo-alt-fill"></i>Pune, Maharashtra.</h1>
            </div>
            <div className=" w-40% h-30vh flex justify-around items-center border-t-2">
                <h1>Follow Ethos: </h1>
                <i className="bi bi-linkedin cursor-pointer"></i>
                <i className="bi bi-facebook cursor-pointer"></i>
                <i className="bi bi-twitter-x cursor-pointer"></i>
                <i className="bi bi-instagram cursor-pointer"></i>
                <i className="bi bi-youtube cursor-pointer"></i>
            </div>
        </footer>
    )
}