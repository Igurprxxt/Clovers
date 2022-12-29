import React from "react";

const OfferPage = () => {
  return (
    <div className="outer bg-[url('https://static.wixstatic.com/media/c837a6_56bbc7d1050d428e9c8bed5d2272e0d3~mv2.jpg/v1/fill/w_1728,h_507,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_56bbc7d1050d428e9c8bed5d2272e0d3~mv2.jpg')] ">
      <div className="content h-[60vh] text-white flex flex-col justify-center items-center align-start">
        <div className="text-start">
          <div className="font-semibold text-xl ">Subscribe & Save</div>
          <div className="off flex mb-3">
            <div className="text-8xl font-bold ">20%</div>
            <div className=" text-xl font-bold">off</div>
          </div>
          <div className="text-3xl font-bold mb-2">Your Next Order</div>
          <div className="email text-sm font-semibold mb-1">
            Enter Your Email Here*
          </div>
          <div className="input">
            <input
              type="text"
              className="rounded-full py-2 mr-4 w-96  hover:bg-black px-2 "
            />
            <button className="rounded-full text-white bg-[#EB1414] px-6 py-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
