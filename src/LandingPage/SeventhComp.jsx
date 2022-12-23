import React from "react";

const SeventhComp = () => {
  const bgOne = {
    backgroundImage: `url(https://static.wixstatic.com/media/c837a6_564931f091d34dd28dda690375e97842~mv2.jpg/v1/fill/w_495,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_564931f091d34dd28dda690375e97842~mv2.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const bgTwo = {
    backgroundImage: `url(https://static.wixstatic.com/media/c837a6_dcb97d2296b34b98858649b8cb74b683~mv2.jpg/v1/fill/w_496,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_dcb97d2296b34b98858649b8cb74b683~mv2.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="flex mt-4 justify-center mb-4">
      <div
        className="left w-[40vw] h-[75vh] text-start pt-[6rem] pl-8 mr-6 rounded-sm pb-2"
        style={bgOne}
      >
        <div className="text-xl font-semibold mb-2">Taste of Italy</div>
        <div className="text-4xl font-bold mb-2">Great Deals on Your</div>
        <div className="text-7xl font-bold mb-3">
          <p>Favourite</p>
          <p>Pastas</p>
        </div>

        <div className="btn ">
          <button className="text-white bg-[#EB1414] rounded-full font-semibold px-4 py-2 hover:bg-white hover:text-[#EB1414] hover:border-[#EB1414] hover:border-2  transition-colors duration-500 ">
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="right w-[35vw] text-start ml-6 rounded-sm pt-[6rem] pl-8 pb-2"
        style={bgTwo}
      >
        <div className="ls rounded-full bg-[#EB1414] text-white h-24 w-24 flex items-center absolute right-[12rem]  rotate-12">
          <div className="relative left-4 text-xl ">Super Deal</div>
        </div>
        <div className="text-xl font-semibold mb-2">Deal of the Week</div>
        <div className="flex mb-2">
          <p className="text-9xl font-bold">30%</p>
          <p className="text-2xl font-bold">off</p>
        </div>
        <div className="text-3xl font-semibold mb-3">Cereal Brands</div>
        <div className="btn">
          <button className="text-white bg-[#EB1414] rounded-full font-semibold px-4 py-2 hover:bg-white hover:text-[#EB1414] hover:border-[#EB1414] hover:border-2  transition-colors duration-500 ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default SeventhComp;
