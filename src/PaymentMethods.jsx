import React from 'react'

const PaymentMethods = () => {
  return (
    <div className="lower  flex justify-center pt-8">
    <div className="left text-start border border-slate-400 border-y-slate-400 w-[40%]  px-8 py-12">
      <div className="top text-3xl font-semibold mb-4">Payment Methods</div>
      <div>
      <li className="">Credit/Debit Cards</li>
      <li className="">PAYPAL</li>
      <li className="">Offline Payments</li>
      </div>
    </div>
    <hr className=" border-black" />
    <div className="right text-start w-[40%] border border-r-slate-400 border-y-slate-400 px-8 py-12">
      <div className="top text-3xl font-semibold mb-4">
       Wholesale Inquiries
      </div>
      <p className="font-thin mb-4">
      I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!
      </p>
      <p className="font-thin">
      I'm the second paragraph in your Wholesale Inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </div>
  )
}

export default PaymentMethods
