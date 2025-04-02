import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
          <li><Link to="/about" className="hover:underline">About us</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
          <li><a href="https://docs.google.com/document/d/1_4Zoa4hLNQxxSlseDDluPf1-yGVtfGAJ8jkSK_LE1Wc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="https://docs.google.com/document/d/1pmcd_EurkCO8BhGCKxSkZRJHUpUGowSF6cnhiNpN_u8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">Refund Policy</a></li>
          <li><a href="https://docs.google.com/document/d/1og8GvG3Yv9FzzJ2mo65dBsw2EUpUw2NQ1Z87sME_VSs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a></li>
          <li><a href="https://docs.google.com/document/d/1wiBWDUUV5Js3auIlUD5H84_T6TDeLwSJYTTyntq-KAU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">Pricing</a></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 6387271446</li>
            <li>arpankatiyar2002@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Descripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
