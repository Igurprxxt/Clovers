import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../components/Filter";
const Meat = () => {
    const [data, setData] = useState([]);
  const [count, setCount] =useState(1)
  const [filterData, setFilterData] = useState([])
  const [showCollection, setShowCollection] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  useEffect(() => {
    axios.get("/StockData.json").then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <div className="outer p-8">
      <div className="header text-7xl font-bold">Meat & Poultry</div>
      <div className="lowercnt flex px-8 pt-8 justify-around">
      <Filter filterData={filterData} setFilterData={setFilterData} data={data} setData={setData} setShowCollection={setShowCollection} showCollection={showCollection} setShowPrice={setShowPrice} showPrice={showPrice}/>
        <div className="rightList flex ">
          {data
            .filter((val) => val.mainId == 3)
            .map((e) => (
              <div className="content border border-slate-500 text-start pb-2 mx-3" key={e.id}>
                {e.mp === true ? <div className="bg-[#EB1414] text-white absolute px-2 rounded-br-lg">
                  Most Popular
                </div> : <div></div>}
                {e.bd === true ? <div className="bg-[#EB1414] text-white absolute px-2 rounded-br-lg">
                 Best Deals
                </div> : <div></div>}
                <div className="url my-2">
                  <img src={e.url} alt="" />
                </div>
                <div className="name ml-2">{e.name}</div>
                <div className="title ml-2">{e.title}</div>
                <div className="price text-[#EB1414] font-bold text-lg my-2 ml-2">
                <strike className="text-xl mr-1"> {e.depPrice}</strike>
                  {e.price}
                </div>
                <div className="itemcount flex justify-around border border-slate-800 py-1 mx-2">
                  <div className="sub cursor-pointer" onClick={(value)=>{
                   console.log(value.id)
                          
                    
                  }}>-</div>
                  <div className="count">{count}</div>
                  <div className="add cursor-pointer" onClick={()=>{
                    count===20 ? setCount(20):setCount(count+1)
                  }}>+</div>
                </div>
                <div className="btn flex justify-center p-2">
                  <button className="text-white w-full bg-black rounded-full px-4 py-2">
                    Add to Cart 
                  </button>
                
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Meat
