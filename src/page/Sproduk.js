import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import hero from "../assets/maskot.png"

export default function Sproduk() {
    return (

        <div className='px-2 lg:px-24 pt-40 lg:pt-28 font-poppins'>
            <div className='container'>
                <div className='flex'>
                    <div className='w-[17rem] lg:w-1/2 items-center bg-gray-300 mx-auto rounded-2xl shadow-lg'>
                        <div className='relative mt-10 flex items-center justify-center'>
                            <img src={hero} className='absolute left-[-5vh] lg:left-auto lg:right-[-20vh] top-[-110px] lg:top-8 h-36 lg:h-96 object-cover' />
                        </div>
                        <div class="flex flex-col items-center mb-14">
                            <h5 class="mt-0 lg:mt-5 text-xl font-semibold text-gray-900 md:text-2xl mb-2">
                                Layanan Produk
                            </h5>
                            <ul class="my-4 space-y-6 lg:space-y-3 w-52 lg:w-auto">
                                <li>
                                    <a href="/chat" class="h-14 lg:h-auto flex items-center p-3 text-base text-white rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c]">
                                        <img className='w-10 lg:w-14 rounded-full' src='https://img.freepik.com/free-vector/industrial-fish-farming-isometric_1284-69321.jpg?w=740&t=st=1695903338~exp=1695903938~hmac=618b671f141e2009b84470226301d382e66766e9b3510c45c7608d683375f9a4' />
                                        <span class="flex-1 ml-3 text-sm lg:text-base">Produk Budi Daya Ikan</span>
                                    </a>
                                </li>

                            </ul>
                            <a href="/"><BsArrowLeftShort className='bg-white text-3xl rounded-full absolute border-2 border-blue-700 cursor-pointer ml-[-10px] lg:ml-0' /></a>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
