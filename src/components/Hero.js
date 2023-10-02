import React, { Fragment, useState } from 'react'
import hero from "../assets/maskot.png"
import balai from '../assets/maskoet.png'
import Modal from './Modal';


export default function Hero() {

  return (
    <div className='section'>
      <div className='md:flex items-center justify-center'>
        <div className=' p-10  '>
          <div className='sm:text-[2.5rem] md:flex text-[1.825rem] gap-6 font-bold'>
            <img src={balai} className=' top-20    h-14 md:h-20 object-cover' />
            <h1 class="text-xl pt-2 sm md:text-4xl sm:text-3xl text-gray-700 font-semibold">Balai Perikanan Budi Daya Air Tawar Mandiangin
              <div className='  lg:text-base sm:text-xl text-base font-light leading-relaxed'>Sistem Pelayanan Satu Pintu Terintegrasi <b>(SIPASTI)</b></div></h1>
          </div>
        </div>

      </div><div >
        <div className='grid grid-cols-1 px-20 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex '>
            <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md  m-6 overflow-hidden sm:w-48  w-full xs:w-20 '>
              <a href='/Produk' title='https://img.freepik.com/free-vector/hand-drawn-swordfish-cartoon-illustration_52683-129577.jpg?w=740&t=st=1693973135~exp=1693973735~hmac=4615500401a5114b94ece573fd7bfca1ed46159dd42cc41148896ca511f8f583'>
                <img src='https://graphicriver.img.customer.envatousercontent.com/files/151849410/Catfish+Cartoon_PREVIEW.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=2de87fcbc20035aee4bcc44445285d76'
                  className='h-28 m-6 ' />
                <h2 className=' text-center px-2 pb-4'>Layanan Produk/Praktek</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className='px-20 py-20 pl-24'>
    //   <div className='container'>
    //     <div className='flex flex-wrap'>
    //       <div className='w-full self-center lg:w-1/2' >
    //         <div className='pl-2'>
    //         <div className='relative mt-10  flex items-center justify-center  '>
    //                       <img src={balai} className='absolute left-[-10vh] top-0.5    h-20 object-cover' />
    //                   </div>
    //         <h1 class="text-3xl md:text-4xl text-gray-700 font-semibold">Balai Perikanan Budi Daya Air Tawar Mandiangin</h1>       
    //           <p className='text-lg lg:text-xl leading-relaxed'>Sistem Pelayanan Satu Pintu Terintegrasi <b>(SIPASTI)</b></p>
    //         </div>
    //         <div className='flex'>
    //           <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md  m-6 overflow-hidden sm:w-48  w-full xs:w-20 '>
    //             <a href='/Produk' title='https://img.freepik.com/free-vector/hand-drawn-swordfish-cartoon-illustration_52683-129577.jpg?w=740&t=st=1693973135~exp=1693973735~hmac=4615500401a5114b94ece573fd7bfca1ed46159dd42cc41148896ca511f8f583'>
    //               <img src='https://graphicriver.img.customer.envatousercontent.com/files/151849410/Catfish+Cartoon_PREVIEW.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=2de87fcbc20035aee4bcc44445285d76'
    //                 className='h-28 m-6 ' />
    //               <h2 className=' text-center px-2 pb-4'>Layanan Produk/Praktek</h2>
    //             </a>
    //           </div>
    //           <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-48'>
    //             <a href='/Jasa' title='https://img.freepik.com/free-vector/hand-drawn-tuna-cartoon-illustration_52683-129574.jpg?w=740&t=st=1693973261~exp=1693973861~hmac=53bf0c4ea86b322ec0684130e81e96ea61ad60a0ca0a375f5c78683ab41364fc'>
    //               <img src='https://img.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg?w=740&t=st=1695816875~exp=1695817475~hmac=28e128366540b20c7bf57a911b67788daf5fcc2d9e357c57019ab523859cfd2c'
    //                 className='h-28 m-6 ' />
    //               <h2 className='text-center px-2 pb-4'>Layanan Jasa</h2>
    //             </a>
    //           </div>
    //           <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-48'>
    //             <a href='/Layanan' title='https://img.freepik.com/free-vector/hand-drawn-crawfish-cartoon-illustration_52683-129571.jpg?w=740&t=st=1693973311~exp=1693973911~hmac=06708902aff3f97156ef9537a178ec3742f308fd8951bbd65dbdcfd98faf370c'>
    //               <img src='https://img.freepik.com/premium-vector/scientist-work-characters-conducting-experiments-lab_113065-662.jpg?w=826'
    //                 className='h-28 m-6 ' />
    //               <h2 className='text-center px-2 pb-4'>Layanan Pengujian Laboratorium</h2>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='w-full self-end lg:w-1/2'>
    //         <div className='relative mt-10 lg:mt-9 lg:right-0'>
    //           <img src={hero} className='w-[50vh] mx-auto' />
    //           <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
    //             <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    //               <path fill="#00479c" d="M33.8,-50.5C39.4,-35.7,36.3,-20.8,33.3,-10C30.3,0.8,27.3,7.4,24.6,16C21.8,24.7,19.2,35.2,12.8,39.3C6.4,43.4,-3.8,41.1,
    //             -20.2,41.3C-36.5,41.5,-58.9,44.2,-67.7,35.8C-76.4,27.4,-71.5,7.8,-66.8,-10.6C-62.1,-29,-57.7,-46.2,-46.6,-60C-35.5,-73.9,-17.8,-84.3,-1.8,-82
    //             .1C14.1,-80,28.3,-65.3,33.8,-50.5Z" transform="translate(100 100) scale(1.2)" />
    //             </svg>
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>


  )
}
