import React from "react";
import videobg from "./videoplayback.mp4";

export default class Section_4 extends React.Component {
  constructor(){
    super();
    this.state={
        ad:"Big Sale....! On every branded watch Get 30% Off"
    }
  }
  componentDidMount(){
  

        this.myTimer=setInterval(()=>{
            this.setState((prev)=>({
                ad:"Experience timeless elegance and precision with our luxury watches – where every moment matters.",
            })) 
            
        },2000)
        this.myTimer=setInterval(()=>{
            this.setState((prev)=>({
                ad:"Big Sale....! On every branded watch Get 30% Off"
            }))
        },4000)
        this.myTimer=setInterval(()=>{
            this.setState((prev)=>({
                ad:"Elevate your style with our exquisite watches – where craftsmanship meets innovation, making every second unforgettable."
            }))
        },6000)
    
  }
  render() {
    return (
      <section className="text-white flex justify-center items-center  w-screen h-60vh ">
        <video
          src={videobg}
          autoPlay
          loop
          muted
          className="flex justify-center items-center w-screen h-60vh "
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        ></video>
        <div
          className="w-90% h-30vh flex justify-center items-center "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="w-70% h-30vh flex justify-center items-center ">
            <h1 className='text-4xl font-poppins transition-opacity ease-in-out opacity-100 duration-300' data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
              {this.state.ad}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
