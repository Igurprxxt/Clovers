import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='outer px-8 py-12 mt-8 bg-[#EB1414] text-white flex justify-around'>
      <div className="first flex flex-col items-start  w-fit  ">
         <span className='text-4xl font-bold mb-4'>Clovers.</span>
         <span className='text-lg font-semibold mb-2'>Need Help?</span>
         <div className='text-sm font-thin'>Visit our <a href="" className='underline'>Customer Support</a></div>
         <div className='text-sm font-thin mb-4'>for assistance or call us at</div>
         <span className='text-2xl font-semibold mb-4'>123-456-7890</span>
         <div className='logos flex mt-8 text-3xl'>
         <CiFacebook className='mx-1'/>
         <AiOutlineInstagram className='mx-1'/>
         <AiOutlineTwitter className='mx-1'/>
         <AiFillYoutube className='mx-1'/>
         </div>
      </div>
      <div className="second ">
        <div className='mb-4 text-start text-xl font-semibold'>Menu</div>
        <div className="list list-none text-start  font-thin">
            <li className='mb-3'>Deals</li>
            <li className='mb-3'>Food</li>
            <li className='mb-3'>Beverages</li>
            <li className='mb-3'>Household</li>
            <li className='mb-3'>Personal Care</li>
            <li className='mb-3'>Most Popular</li>
            <li className='mb-3'>My Orders</li>
        </div>
      </div>
      <div className="third ">third</div>
      <div className="fourth ">fourth</div>
      <div className="fifth ">fifth</div>
      
    </div>
  )
}

export default Footer
