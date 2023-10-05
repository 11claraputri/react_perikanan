import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import hero from "../assets/maskot.png"

export default function Slayanan() {
    return (
        <div className='px-2 lg:px-24 pt-28 lg:pt-28 font-poppins'>
            <div className='container'>
                <div className='flex'>
                    <div className='w-[17rem] lg:w-1/2 items-center bg-gray-300 mx-auto rounded-2xl shadow-lg'>
                        <div className='relative mt-10 flex items-center justify-center  '>
                            <img src={hero} className='absolute left-[-5vh] lg:left-auto lg:right-[-20vh] top-[-110px] lg:top-28 h-36 lg:h-96 object-cover' />
                        </div>
                        <div class="flex flex-col items-center mb-10 lg:mb-14">
                            <h5 class="mt-0 lg:mt-4 text-xl font-semibold text-gray-900 md:text-2xl mb-6 lg:mb-2 text-center">
                                Layanan Pengujian Laboratorium 
                            </h5>
                            <ul class="my-4 mt-0 lg:mt-8 space-y-6 lg:space-y-3 w-52 lg:w-auto">

                                <li>
                                    <a href="/chat" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/blue-water-surface-template-cartoon-style_1308-56686.jpg?w=740&t=st=1695904926~exp=1695905526~hmac=5598940cdd39cb3f2a2273676cb9d9d4f5c297cf677e1e4bf92e97f0acf48fbc' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Pengujian Kualitas Air</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/form" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/coronavirus-vaccine-development_23-2148545691.jpg?w=740&t=st=1695905426~exp=1695906026~hmac=8f69276badb92615712333e5320acf2cf970122f41f765c15705bb819d07c014' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Pemeriksaan Penyakit</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/chat" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/science-concept-with-microscope-people-working_23-2148527560.jpg?w=740&t=st=1695904986~exp=1695905586~hmac=b407a0da9276d00fe10259cbdab6e19e83aa34efdd39ad6df09385b77b8103c6' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Analisis Nutrisi Pakan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/chat" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/retrovirusesr-concept-illustration_114360-7537.jpg?w=740&t=st=1695905338~exp=1695905938~hmac=da2a5d12618156730bd5aaefd7c217025ff29e4bb94bea4338e0310cd9bc78a4' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Penyediaan Kultur Acuan Bakteri</span>
                                    </a>
                                </li>

                            </ul>
                            <a href="/"><BsArrowLeftShort className='bg-white text-3xl rounded-full absolute border-2 border-blue-700 cursor-pointer ml-[-10px]' /></a>

                        </div>
                    </div>

                </div>

            </div>
            {/* <div className='w-full pr-96 pl-2 lg:w-1/2 '>                        
                            <img src={hero} className='w-[40vh] mx-auto' />                       
                    </div> */}
        </div>

    )
}
