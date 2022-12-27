import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="outer p-8">
      <div className="header text-7xl font-bold mb-8">Terms & Conditions</div>
      <div className="lower  flex justify-center pt-8">
        <div className="left text-start border border-slate-400 border-y-slate-400 w-[40%]  px-8 py-12">
          <div className="top text-3xl font-semibold mb-4">Customer Care</div>
          <p className="font-thin mb-4">
            I’m a Customer Care section. I’m a great place to write a long text
            about your company and your services, and, most importantly, how to
            contact your store with queries. Writing a detailed Customer Care
            policy is a great way to build trust and reassure your customers
            that they can buy with confidence.
          </p>
          <p className="font-thin">
            I'm the second paragraph in your Customer Care section. Click here
            to add your own text and edit me. It’s easy. Just click “Edit Text”
            or double click me to add details about your policy and make changes
            to the font. I’m a great place for you to tell a story and let your
            users know a little more about you.
          </p>
        </div>
        <hr className=" border-black" />
        <div className="right text-start w-[40%] border border-r-slate-400 border-y-slate-400 px-8 py-12">
          <div className="top text-3xl font-semibold mb-4">
            Privacy & Safety
          </div>
          <p className="font-thin mb-4">
            I’m a Privacy & Safety policy section. I’m a great place to inform
            your customers about how you use, store, and protect their personal
            information. Add details such as how you use third-party banking to
            verify payment, the way you collect data or when will you contact
            users after their purchase was completed successfully.
          </p>
          <p className="font-thin">
            Your user’s privacy is of the highest importance to your business,
            so take the time to write an accurate and detailed policy. Use
            straightforward language to gain their trust and make sure they keep
            coming back to your site!
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default TermsAndCondition;
