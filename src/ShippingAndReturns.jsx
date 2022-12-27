import React from "react";

const ShippingAndReturns = () => {
  return (
    <div className="outer p-8">
      <div className="header text-7xl font-bold mb-8">Shipping & Returns</div>
      <div className="lower  flex justify-center pt-8">
        <div className="left text-start border border-slate-400 border-y-slate-400 w-[40%]  px-8 py-12">
          <div className="top text-3xl font-semibold mb-4">Shipping Policy</div>
          <p className="font-thin mb-4">
            I’m a Shipping Policy section. I’m a great place to update your
            customers about your shipping methods, packaging and costs. Use
            plain, straightforward language to build trust and make sure that
            your customers stay loyal!  </p>
            <p className="font-thin">
            I'm the second paragraph in your Shipping
            Policy section. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add details about
            your policy and make changes to the font. I’m a great place for you
            to tell a story and let your users know a little more about you.
          </p>
        </div>
        <hr className=" border-black"/>
        <div className="right text-start w-[40%] border border-r-slate-400 border-y-slate-400 px-8 py-12">
            <div className="top text-3xl font-semibold mb-4">
                Return & Exchange Policy 
            </div>
            <p className="font-thin mb-4">
            I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
            </p>
            <p className="font-thin">
            I'm the second paragraph in your Return & Exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndReturns;
