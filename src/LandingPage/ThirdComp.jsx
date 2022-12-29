import React from "react";

const ThirdComp = () => {
  const bgOne = {
    backgroundImage: `url(https://static.wixstatic.com/media/c837a6_6128c886f6c04d76b67065dee91cd206~mv2.jpg/v1/fill/w_676,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6128c886f6c04d76b67065dee91cd206~mv2.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const bgTwo = {
    backgroundImage: `url(https://static.wixstatic.com/media/84770f_ffdce1fd609a4073b20b39d85f671fe4~mv2.jpg/v1/fill/w_338,h_517,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_ffdce1fd609a4073b20b39d85f671fe4~mv2.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="flex mt-4 justify-center mb-4">
      <div
        className="left w-[50vw] h-[75vh] text-start pt-[6rem] pl-8 mr-6 rounded-sm pb-2"
        style={bgOne}
      >
        <div className="ls rounded-full bg-[#EB1414] text-white h-24 w-24 flex items-center absolute left-[38rem] lg:absolute lg:right-[] rotate-12" >
          <div className="relative left-4 text-xl"> Limited Supply</div>
        </div>
        <div className="text-xl font-semibold mb-2">It's Wine O' Clock!</div>
        <div className="text-4xl font-bold mb-2">Great Deals on</div>
        <div className="text-7xl font-bold mb-3">Selected Wines</div>
        <div className="para font-light mb-3">
          <p>I'm a paragraph. Click here to add your own text</p>
          <p>and edit me. Let your users get to know you.</p>
        </div>
        <div className="btn ">
          <button className="text-white bg-[#EB1414] rounded-full font-semibold px-4 py-2 hover:bg-white hover:text-[#EB1414] hover:border-[#EB1414] hover:border-2  transition-colors duration-500 ">
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="right w-[25vw] text-start ml-6 rounded-sm pt-[6rem] pl-8 pb-2"
        style={bgTwo}
      >
        <div className="text-xl font-semibold mb-2">Deal of the Week</div>
        <div className="flex mb-2">
          <p className="text-9xl font-bold">40%</p>
          <p className="text-2xl font-bold">off</p>
        </div>
        <div className="text-3xl font-semibold mb-3">Cleaning Supplies</div>
        <div className="btn">
          <button className="text-white bg-[#EB1414] rounded-full font-semibold px-4 py-2 hover:bg-white hover:text-[#EB1414] hover:border-[#EB1414] hover:border-2  transition-colors duration-500 ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default ThirdComp;
