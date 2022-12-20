import React from "react";

const CategoryComp = () => {
  const array = [
    {    id:1,
      title: "Vegetables",
      url: "https://static.wixstatic.com/media/c837a6_54f3e8f5b6ed4a6a92a3e7e72c45c6c0~mv2.png/v1/fill/w_225,h_199,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_99478112_2.png",
    },
    {id:2,
      title: "Bakery",
      url: "https://static.wixstatic.com/media/c837a6_27969dc29ca74784bdcda6dfb7f8e8f5~mv2.png/v1/fill/w_257,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1485281813.png",
    },
    {id:3,
      title: "Wine",
      url: "https://static.wixstatic.com/media/c837a6_24bc47c82c4e44c496b517fad1b91a80~mv2.png/v1/fill/w_189,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/B_009_3.png",
    },
    {id:4,
      title: "Dairy & Eggs",
      url: "	https://static.wixstatic.com/media/c837a6_f5efa954aaab4579816a29703d8ab59f~mv2.png/v1/fill/w_236,h_199,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_136358678.png",
    },
    {id:5,
      title: "Meat & Poultry",
      url: "https://static.wixstatic.com/media/c837a6_c91b032b1ce6483ca30e14bea694fac9~mv2.png/v1/fill/w_235,h_171,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1383180032_2.png",
    },
    {id:6,
      title: "Soft Drinks",
      url: "https://static.wixstatic.com/media/c837a6_78211f5f45854b4dbbb99c5779e8fc6e~mv2.png/v1/fill/w_186,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1434271904_4.png",
    },
    {id:7,
      title: "Cleaning Supplies",
      url: "https://static.wixstatic.com/media/c837a6_9ea4c59481ae46049411e798469725b8~mv2.png/v1/fill/w_198,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_123544366.png",
    },
    {id:8,
      title: "Cereals & Snacks",
      url: "https://static.wixstatic.com/media/c837a6_467f29f6d4ef4fdf8897910dec40537a~mv2.png/v1/fill/w_200,h_227,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Korn_Flakes_2.png",
    },
  ];

  return (
    <div className="outer mt-12 mx-[8rem] mb-[2rem]">
      <div className="heading mb-6 text-4xl font-bold text-start">
        Most Popular Categories
      </div>
      <div className="outer  border border-black rounded grid grid-cols-4 ">
        {array.map((val) => (
          <div className=" " key={val.id}>
            <div className="border-r border-black border-b px-2 pb-2 pt-6">
            <img src={val.url} className="mx-6 h-[16rem] w-[14rem] bg-[#ffffcc] rounded-full" alt="" />
           <div className="text-lg font-bold p-4"> {val.title}</div>
          </div></div>
        ))}
      </div>
      {/* <div style={{png}}>{array.title}</div> */}
    </div>
  );
};

export default CategoryComp;
