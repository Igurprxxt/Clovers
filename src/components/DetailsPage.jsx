import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
const DetailsPage = () => {
  const [data, setData] = useState([]);
  const [productInfo, setProductInfo] = useState(false);
  const [returnRefund, setReturnRefund] = useState(false);
  const [shipping, setShipping] = useState(false);
  const { fruitId } = useParams();

  useEffect(() => {
    axios.get("/StockData.json").then((res) => {
      setData(res.data.data.find((e) => e.id == fruitId && e.mainId === 2));
    });
  }, []);
  console.log("fruitId :>> ", data);

  return (
    <div className="outer p-8 ">
      <div className="top flex justify-around">
        <div className="left ">
          Home/ <span> {data.category}</span>/ <span>{data.name}</span>{" "}
        </div>
        <div className="right flex ">
          <div className="arrowLeft flex mr-2">
            <BsChevronLeft className="text-xl" /> <span>Prev</span>
          </div>

          <div className="arrowRight flex ml-2">
            {" "}
            <span>Next</span>
            <BsChevronRight className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="leftBox border border-black w-[30vw] h-[80vh] flex justify-center items-center ">
          <img src={data.url} alt="" className="h-96 w-96" />
        </div>
        <div className="rightBox ">
          <div className="name">{data.name}</div>
          <div className="id">
            SKU <span>00{data.id}</span>
          </div>
          <div className="price">{data.price}</div>
          <div className="quantity">Quantity</div>
          <div className="value">quantity here</div>
          <div className="buttons flex">
            {" "}
            <button className="rounded-full text-white bg-[#EB1414]">
              Add to Cart
            </button>
          </div>
          <div
            className="productInfo flex justify-between"
            onClick={() => {
              setProductInfo(!productInfo);
              setReturnRefund(false);
              setShipping(false);
            }}
          >
            <span>Product Info</span>
            <span>{productInfo === true ? "-" : "+"}</span>
          </div>
          {productInfo === true ? (
            <div>
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
              Buyers like to know what they’re getting before they purchase, so
              give them as much information as possible so they can buy with
              confidence and certainty.
            </div>
          ) : (
            <div></div>
          )}
          <div
            className="ReturnRefund flex justify-between"
            onClick={() => {
              setReturnRefund(!returnRefund);
              setProductInfo(false);
              setShipping(false);
            }}
          >
            <span>Return & Refund Policy</span>
            <span>{returnRefund === true ? "-" : "+"}</span>
          </div>
          {returnRefund === true ? (
            <div>
              I’m a Return and Refund policy. I’m a great place to let your
              customers know what to do in case they are dissatisfied with their
              purchase. Having a straightforward refund or exchange policy is a
              great way to build trust and reassure your customers that they can
              buy with confidence.
            </div>
          ) : (
            <div></div>
          )}
          <div
            className="Shipping flex justify-between"
            onClick={() => {
              setShipping(!shipping);
              setProductInfo(false);
              setReturnRefund(false);
            }}
          >
            <span>Shipping Info</span>
            <span>{shipping === true ? "-" : "+"}</span>
          </div>
          {shipping === true ? (
            <div>
              I’m a Return and Refund policy. I’m a great place to let your
              customers know what to do in case they are dissatisfied with their
              purchase. Having a straightforward refund or exchange policy is a
              great way to build trust and reassure your customers that they can
              buy with confidence.
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
