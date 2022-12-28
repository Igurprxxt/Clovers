import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const DealsComp = () => {
    const [count, setCount] =useState(1)
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios.get("/StockData.json").then((res) => {
      const bb = res.data.data;

      setData1(bb.filter((val) => val.bd === true));
      console.log("data1", data1);
    });
    axios.get("/Beverages.json").then((res) => {
        const cc = res.data.data;
    
        setData2(cc.filter((e) => e.bd === true));
        console.log("data2", data2);
      
      });
  }, []);

const finalData = data1.concat(data2)

  return (
    <div className="outer p-8">
      <div className="heading text-start  font-semibold text-4xl mx-12 px-12">
        Best Deals
      </div>
      <div className="flex items-center">
      <div className="leftArrow">{<BsChevronLeft className="text-4xl"/>}</div>
      <div className="list flex">
        {finalData.map((e)=>( 
        <div className="rightList flex  overflow-scroll ">
        
              <div className="content border border-slate-500 text-start pb-2 mx-3" key={e.id}>
                {e.mp === true ? <div className="bg-[#EB1414] text-white absolute px-2 rounded-br-lg">
                  Most Popular
                </div> : <div></div>}
                {e.bd === true ? <div className="bg-[#EB1414] text-white absolute px-2 rounded-br-lg">
                 Best Deals
                </div> : <div></div>}
                <NavLink to={`/food/fruits/details/${e.id}`}  className="url my-2" >
                  <img src={e.url} alt="" />
                </NavLink>
                <div className="name ml-2">{e.name}</div>
                <div className="title  ml-2">{e.title}</div>
                <div className="price text-[#EB1414] font-bold text-lg my-2 ml-2">
                  {e.price}
                </div>
                <div className="itemcount flex justify-around border border-slate-800 py-1 mx-2">
                  <div className="sub cursor-pointer" onClick={()=>{
                   console.log("value.id",e.id)
                  //  setData()
                  }}>-</div>
                  <div className="count">{count}</div>
                  <div className="add cursor-pointer" onClick={()=>{
                    count===20 ? setCount(20):setCount(count+1)
                  }}>+</div>
                </div>
                <div className="btn flex justify-center p-2">
                  <button className="text-white bg-black rounded-full px-4 py-2 w-full">
                    Add to Cart 
                  </button>
                
                </div>
              </div>
            {/* ))} */}
        </div>
        ))}
      </div>
      <div className="rightArrow">{<BsChevronRight className="text-4xl"/>}</div>
      </div>
    </div>
  );
};

export default DealsComp;
