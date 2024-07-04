import React from "react";
import "./Section_1.css";
import slogan1 from "./1000057571-removebg-preview.png";

export default function Section_1() {
    return (
        <section className="w-full flex justify-center bg-black h-screen text-white font-poppins">
        <div className="w-Superfull flex justify-around bg-gradient-to-t from-black to-zinc-900 h-60vh -skew-y-10 rotate-20">
          <div className="pbm w-70\% h-30vh pl-32 text-pretty " data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <h1 className="rotate-9 skew-x-7.5 text-6xl">Style main raha ne ka Bhai....</h1>
            <p className="rotate-10 skew-x-7.5 mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Reiciendis beatae odio vel deserunt labore?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas autem deleniti modi reiciendis distinctio voluptas, suscipit adipisci quam accusamus voluptatibus, aperiam fugiat, est quisquam facere pariatur sint natus mollitia aliquid iusto minus. Sint!
            </p>
            <button id="Buy-Now" className="flex justify-around mt-1 h-19 cursor-pointer border rotate-10 skew-x-7.5  border-white px-9 pt-2 pb-3 duration-300 hover:border hover:bg-white hover:text-black hover:border-white">
              <div className="rotate-4 skew-x-0 flex justify-around w-28 ">
                Buy Now
                <span className="material-symbols-outlined rotate-4 skew-x-0"> shopping_cart </span>
              </div>
            </button>
          </div>
          <img
            src={slogan1}
            className="rotate-12 w-30\% skew-x-9 relative top-28 rotate-7.5"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
            alt=""
          />
        </div>
      </section>
    );
}