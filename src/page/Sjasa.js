import React from 'react'
import hero from "../assets/maskot.png"
import { BsArrowLeftShort } from "react-icons/bs";


export default function Sjasa() {
    return (


        <div className='px-2 lg:px-24 pt-40 lg:pt-20 font-poppins'>
            <div className='container'>
                <div className='flex'>
                    <div className='w-[19rem] lg:w-1/2 items-center bg-gray-300 mx-auto rounded-2xl shadow-lg'>
                        <div className='relative mt-10 flex items-center justify-center'>
                            <img src={hero} className='absolute left-[-3vh] lg:left-auto lg:right-[-20vh] top-[-110px] lg:top-8 h-36 lg:h-96 object-cover' />
                        </div>
                        <div class="flex flex-col items-center mb-10 lg:mb-14">
                            <h5 class="mt-0 lg:mt-5 text-xl font-semibold text-gray-900 md:text-2xl mb-2">
                                Layanan Jasa
                            </h5>
                            <ul class="my-4 space-y-6 lg:space-y-3 w-60 lg:w-auto">

                                <li>
                                    <a href="/chat" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1695904007~exp=1695904607~hmac=6e755a00970d5cec78a24b8c3a24ba82c1256845abe823251f31f85b31ce00a6' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Konsultasi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/formBim" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg?w=740&t=st=1695903910~exp=1695904510~hmac=2db1c3abee4ee94586e87738151c12d1fabb4e6fd7333a69f6cba48b39f4cf96' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Bimbingan Teknis</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/chat" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/city-hall-concept-illustration_114360-17135.jpg?w=740&t=st=1695904090~exp=1695904690~hmac=ab641da083e773f73593b799fea1b0d83a423f2cca9e47c979a1324281af1ba9' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Penggunaan Gedung dan Bangunan</span>
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
