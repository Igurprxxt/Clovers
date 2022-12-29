import React from "react";
// import image from "../../src/cup4.jpg";
import imageSlide from "./data";
import { AiOutlineMobile } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import ThirdComp from "./ThirdComp";
import CategoryComp from "./CategoryComp";
import SeventhComp from "./SeventhComp";
import DealsComp from "./DealsComp";
import OfferPage from "./OfferPage";
const LandingPage = () => {
  const truck = (
    <svg
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
    </svg>
  );
  const basket = (
    <svg
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </svg>
  );
  const care = (
    <svg
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
    </svg>
  );
  const mobile = (
    <svg
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>
  );

  const [bgState, setBgState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[bgState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
   
  };
  useEffect(()=>{
    const timer=setTimeout(() => {
      bgState===2?setBgState(0):setBgState(bgState+1)
    }, 5000)
    return ()=>clearTimeout(timer)
  },[bgState])

  return (
    <div className="outer ">
      {" "}
      <div
        className="   opacity-90  text-start py-8 px-12 "
        style={bgImageStyle}
      >
        <div className="p-8 mt-8 mx-12">
          <div className="first text-2xl font-semibold mb-2">
            Easy, Fresh & Convenient
          </div>
          <div className="second text-7xl font-bold mb-6">
            <p>Stock Up on</p>
            <p> Daily Essentials</p>{" "}
          </div>
          <div className="third text-4xl font-bold mb-4">
            <p className="mb-2">Save Big on Your</p>
            <p>Favourite Brands</p>
          </div>
          <div className="btn ">
            <button className="text-white bg-[#EB1414] rounded-full font-semibold px-4 py-2 hover:bg-white hover:text-[#EB1414] hover:border-[#EB1414] hover:border-2  transition-colors duration-500 ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="row flex justify-center mt-4 p-4">
        {/* {<AiOutlineMobile className="text-xl" value={{ style: {color:'blue' } }}/>} */}
        <div className="one flex pr-8 text-start border-r border-black">
          <div className="svg fill-[#EB1414] mr-2">{truck}</div>
          <div className="cnt">
            <p className="text-xl font-semibold">Free Delivery</p>
            <p>To Your Door</p>
          </div>
        </div>
        <div className="two flex px-8 text-start border-r border-black">
          <div className="svg fill-[#EB1414] mr-2">{basket}</div>
          <div className="cnt">
            <p className="text-xl font-semibold">Local Pickup</p>
            <p>
              Check out{" "}
              <a href="" className="underline">
                Locations
              </a>
            </p>
          </div>
        </div>
        <div className="three flex px-8 text-start border-r border-black">
          {" "}
          <div className="svg fill-[#EB1414] mr-2">{care}</div>
          <div className="cnt">
            <p className="text-xl font-semibold">Available for You</p>
            <p>
              <a href="" className="underline">
                {" "}
                Online Support
              </a>
              24/7
            </p>
          </div>
        </div>
        <div className="four flex pl-8 text-start ">
          {" "}
          <div className="svg fill-[#EB1414] mr-2">{mobile}</div>
          <div className="cnt">
            <p className="text-xl font-semibold">Order on the go</p>
            <p>
              <a href="" className="underline">
                Download
              </a>
              Our App
            </p>
          </div>
        </div>
      </div>
      <DealsComp/>
      <ThirdComp/>
      <CategoryComp/>
      <SeventhComp/>
      <OfferPage/>
    </div>
  );
};

export default LandingPage;
