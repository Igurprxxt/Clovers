import React from "react";
import { useState, useEffect } from "react";

const Filter = ({
  data,
  setData,
  setShowCollection,
  showCollection,
  setShowPrice,
  showPrice,

  setMpdata,

  setBddata,
}) => {
  const [range, setRange] = useState();

  return (
    <div className="left text-start flex flex-col">
      <div className="text-2xl mb-3">Filter by</div>
      <hr className="mb-3 border-slate-400" />
      <div className="collection  font-thin flex flex-col  mb-4 my-2">
        <div
          className="flex w-48 justify-between"
          onClick={() => {
            setShowCollection(!showCollection);
          }}
        >
          {" "}
          <div className=" ">Collection</div>{" "}
          <div className="">{showCollection === true ? "-" : "+"}</div>
        </div>

        {showCollection === true ? (
          <div className="text-start list-none text-sm my-4">
            <li
              className=""
              onClick={() => {
                setData(data);
              }}
            >
              All
            </li>
            <li
              className=""
              onClick={() => {
                setBddata(data.filter((e) => e.bd === true));
              }}
            >
              Deals
            </li>
            <li
              className=""
              onClick={() => {
                setMpdata(data.filter((e) => e.mp === true));
              }}
            >
              Most Popular
            </li>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <hr className="mb-3 border-slate-400 my-2" />
      <div className="Price  font-thin flex flex-col my-2">
        <div
          className="flex w-48 justify-between"
          onClick={() => {
            setShowPrice(!showPrice);
          }}
        >
          <div className="">Price</div>{" "}
          <div className="">{showPrice === true ? "-" : "+"}</div>
        </div>
        {showPrice === true ? (
          <div className="my-2">
            <div className="range text-black rounded-full bg-slate-200 w-min p-1">
              {range}
            </div>
            <input
              type="range"
              min="1.0"
              max="10.0"
              step="0.2"
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Filter;
