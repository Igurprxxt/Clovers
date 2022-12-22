import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const profile = (
    <svg
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z" />
    </svg>
  );
  const location = (
    <svg
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
    </svg>
  );
  const heart = (
    <svg
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    </svg>
  );
  const cart = (
    <svg
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  );
  const search = (
    <svg
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
    </svg>
  );
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  return (
    <div className="">
      <nav className="bg-red-800 py-3 flex justify-between text-slate-300 font-light">
        <div className="left flex ml-12">
          <li className="list-none mr-2">About Us</li>
          <li className="list-none ml-2">Customer Support</li>
        </div>
        <div className="center relative right-[3.5rem] ">
          Shop on the go,download our app.
          <a className="ml-1 underline" href="">
            Details
          </a>
        </div>
        <div className="right flex mr-12">
          <div className="ProfSvg fill-slate-200 mr-2">{profile}</div>
          <div>Log In</div>
        </div>
      </nav>
      <nav className="bg-red-600 py-6 flex justify-between text-white">
        <div className="left text-3xl font-semibold font-serif ml-12">
          Clovers
        </div>
        <div className="center flex rounded-full  border-2 border-white  justify-between">
          <input
            type="text"
            placeholder="Search a product e.g. milk"
            className=" px-4 py-1 rounded-full w-80 bg-red-600 text-white placeholder:text-white  font-light mr-2 "
          />
          <div className="search fill-red-600 bg-white rounded-r-full px-1 ">
            {search}
          </div>
        </div>
        <div className="right fill-white flex mr-12">
          <div className="location mr-6">{location}</div>
          <div className="fav mr-6">{heart}</div>
          <div className="cart flex">
            <div className="scg mr-1">{cart}</div>
            <div className="count  ">5</div>
          </div>
        </div>
      </nav>
      <nav className="flex justify-center mt-2 font-light text-xl py-2">
        <NavLink to={"/deals"} className="list-none mx-6 hover:text-[#EB1414]">
          Deals
        </NavLink>
        <div className="food flex-col ">
          <li
            className="list-none  ml-4 mr-8  cursor-pointer"
            onMouseOver={() => {
              setOption1(true);
            }}
            onMouseOut={() => {
              setOption1(false);
            }}
          >
            Food
          </li>
          {option1 === true ? (
            <div
              className="options absolute z-10 bg-white px-2 rounded-lg items-center   text-start  flex-col text-base  pt-2"
              onMouseOver={() => {
                setOption1(true);
              }}
              onMouseOut={() => {
                setOption1(false);
              }}
            >
              {" "}
              <NavLink to={"/vegetables"} className="hover:text-[#EB1414]  cursor-pointer">Vegetables</NavLink>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">Fruits</p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Meat & Poultry
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Fish & Seafood
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Dairy & Eggs
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">Bakery</p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Pasta & Grains
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Cereals & Snacks
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="beverage flex-col  ">
          <li
            className="list-none  cursor-pointer  ml-2 mr-8 "
            onMouseOver={() => {
              setOption2(true);
            }}
            onMouseOut={() => {
              setOption2(false);
            }}
          >
            Beverages
          </li>
          {option2 === true ? (
            <div
              className="options absolute z-10 bg-white px-2 rounded-lg items-center  text-start  flex-col text-base  pt-2 "
              onMouseOver={() => {
                setOption2(true);
              }}
              onMouseOut={() => {
                setOption2(false);
              }}
            >
              {" "}
              <p className="hover:text-[#EB1414] cursor-pointer">Tea</p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">Coffee</p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Soft Drinks
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">Beer</p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">Wine</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="Household flex-col">
          <li
            className="list-none   cursor-pointer ml-2 mr-8"
            onMouseOver={() => {
              setOption3(true);
            }}
            onMouseOut={() => {
              setOption3(false);
            }}
          >
            Household
          </li>
          {option3 === true ? (
            <div
              className="options absolute z-10 bg-white px-2 rounded-lg items-center  text-start  flex-col text-base  pt-2  "
              onMouseOver={() => {
                setOption3(true);
              }}
              onMouseOut={() => {
                setOption3(false);
              }}
            >
              {" "}
              <p className="hover:text-[#EB1414] cursor-pointer">
                Home & Kitchen
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">
                Daily Supplies
              </p>
            </div>
          ) : (
            <div></div>
          )}{" "}
        </div>
        <div className="PersonalCare">
          <li
            className="list-none  cursor-pointer  ml-4 mr-6"
            onMouseOver={() => {
              setOption4(true);
            }}
            onMouseOut={() => {
              setOption4(false);
            }}
          >
            Personal Care
          </li>
          {option4 === true ? (
            <div
              className="options absolute z-10 bg-white px-2 rounded-lg items-center  text-start  flex-col text-base  pt-2 "
              onMouseOver={() => {
                setOption4(true);
              }}
              onMouseOut={() => {
                setOption4(false);
              }}
            >
              {" "}
              <p className="hover:text-[#EB1414] cursor-pointer">
                Personal Hygiene
              </p>
              <p className="my-1 hover:text-[#EB1414] cursor-pointer">Babies</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <NavLink
          to={"/mostPopular"}
          className="list-none  ml-4 mr-6 hover:text-[#EB1414]"
        >
          Most Popular
        </NavLink>
        <NavLink className="list-none   ml-7 hover:text-[#EB1414]">
          My Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

