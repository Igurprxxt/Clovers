import React from "react";

const Filter = ({setShowCollection, showCollection, setShowPrice, showPrice}) => {
  return (
    <div className="left text-start flex flex-col">
      <div className="text-2xl mb-3">Filter by</div>
      <hr className="mb-3 border-slate-400" />
      <div
        className="collection  font-thin flex flex-col  mb-4 my-2"
        onClick={() => {
          setShowCollection(!showCollection);
        }}
      >
        <div className="flex w-48 justify-between">
          {" "}
          <div className=" ">Collection</div> <div className="">+</div>
        </div>

        {showCollection === true ? (
          <div className="text-start list-none text-sm my-4">
            <li className="">All</li>
            <li className="">Deals</li>
            <li className="">Most Popular</li>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <hr className="mb-3 border-slate-400 my-2" />
      <div
        className="Price  font-thin flex flex-col my-2"
        onClick={() => {
          setShowPrice(!showPrice);
        }}
      >
        <div className="flex w-48 justify-between">
          <div className="">Price</div> <div className="">+</div>
        </div>
        {showPrice === true ? <div className="my-2">hello</div> : <div></div>}
      </div>
    </div>
  );
};

export default Filter;
