import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  const cardArray = [
    {
      id: 1,
      url: "https://static.wixstatic.com/media/c837a6_3b6a5038143c403d8f6c6d0e94fa7aed~mv2.png/v1/fill/w_54,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png",
    },
    {
      id: 2,
      url: "https://static.wixstatic.com/media/84770f_f90f75b6d7dc4ca8a9b32f77aad266ff~mv2.png/v1/fill/w_60,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/American%20Express.png",
    },
    {
      id: 3,
      url: "https://static.wixstatic.com/media/c837a6_d5a04a334f5c41cf91789e9235a503df~mv2.png/v1/fill/w_60,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay%403x.png",
    },
    {
      id: 4,
      url: "https://static.wixstatic.com/media/84770f_e094441e93774a07891bf17d628f55f9~mv2.png/v1/fill/w_51,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/JCB.png",
    },
    {
      id: 5,
      url: "https://static.wixstatic.com/media/84770f_26d6956d2d394c7294bca178775b936e~mv2.png/v1/fill/w_60,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png",
    },
    {
      id: 6,
      url: "https://static.wixstatic.com/media/84770f_0a59acc55b39490e8a6e588e1a8501c3~mv2.png/v1/fill/w_60,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png",
    },
    {
      id: 7,
      url: "https://static.wixstatic.com/media/84770f_02d1ee6b05114f6dbabbe6be5798e7c6~mv2.png/v1/fill/w_60,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png",
    },
    {
      id: 8,
      url: "https://static.wixstatic.com/media/84770f_35602a220c414f0687b7869ceebb0921~mv2.png/v1/fill/w_52,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png",
    },
  ];
  return (
    <div>
      {" "}
      <div className="outer px-8 py-12 mt-8 bg-[#EB1414] text-white flex justify-around">
        <div className="first flex flex-col items-start  w-fit  ">
          <span className="text-4xl font-bold mb-4">Clovers.</span>
          <span className="text-lg font-semibold mb-2">Need Help?</span>
          <div className="text-sm font-thin">
            Visit our{" "}
            <a href="" className="underline">
              Customer Support
            </a>
          </div>
          <div className="text-sm font-thin mb-4">
            for assistance or call us at
          </div>
          <span className="text-2xl font-semibold mb-4">123-456-7890</span>
          <div className="logos flex mt-8 text-3xl">
            <CiFacebook className="mx-1" />
            <AiOutlineInstagram className="mx-1" />
            <AiOutlineTwitter className="mx-1" />
            <AiFillYoutube className="mx-1" />
          </div>
        </div>
        <div className="second ">
          <div className="mb-4 text-start text-xl font-semibold">Menu</div>
          <div className="list list-none text-start  font-thin">
            <li className="mb-4">Deals</li>
            <li className="mb-4">Food</li>
            <li className="mb-4">Beverages</li>
            <li className="mb-4">Household</li>
            <li className="mb-4">Personal Care</li>
            <li className="mb-4">Most Popular</li>
            <li className="mb-4">My Orders</li>
          </div>
        </div>
        <div className="third ">
          <div className="mb-4 text-start text-xl font-semibold">
            Categories
          </div>
          <div className="list list-none text-start  font-thin">
            <li className="mb-4">Vegetables</li>
            <li className="mb-4">Bakery</li>
            <li className="mb-4">Wine</li>
            <li className="mb-4">Dairy & Eggs</li>
            <li className="mb-4">Meat & Poultry</li>
            <li className="mb-4">Soft Drinks</li>
            <li className="mb-4">Cleaning supplies</li>
            <li className="mb-4">Cereal & Snacks</li>
          </div>
        </div>
        <div className="fourth ">
          <div className="mb-4 text-start text-xl font-semibold">Info</div>
          <div className="list list-none text-start  font-thin">
            <li className="mb-4">FAQ</li>
            <li className="mb-4">About Us</li>
            <li className="mb-4">Customer Support</li>
            <li className="mb-4">Locations</li>
          </div>
        </div>
        <div className="fifth ">
          <div className="mb-4 text-start text-xl font-semibold">My Choice</div>
          <div className="list list-none text-start  font-thin">
            <li className="mb-4">Favourites</li>
            <li className="mb-4">My Orders</li>
          </div>
        </div>
      </div>
      <div className="line"><hr/></div>
      <div className="lower p-8 bg-[#EB1414] text-white">
        <div className="links flex justify-around p-8 underline mx-12">
          <a href="">Shipping & Returns</a>
          <a href="">Terms & Conditions</a>
          <a href="">Payment Methods</a>
        </div>
        <div className="font-semibold text-xl mb-8">We accept the following payment methods</div>
        <div className="cards flex justify-center py-4 ">
        {cardArray.map((e)=>(<div className="mx-4">
          <img src={e.url} alt="" />
        </div>))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
