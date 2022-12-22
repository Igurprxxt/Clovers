import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import Stockdata from '../../public/StockData.json'
const Vegetables = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/StockData.json").then((res) => {
      setData(res.data.data);
   
    });
  }, []);
  // console.log(Stockdata)
  console.log(data)
  return (
    <div className="outer p-8">
      <div className="header text-7xl font-bold">Vegetables</div>
      <div className="lowercnt flex px-8 pt-8">
        <div className="left w-48 border-2 border-black"> hello</div>
        <div className="rightList">
          {data.map((e) => (
            <div>{e.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
