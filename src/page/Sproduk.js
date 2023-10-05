import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import hero from "../assets/maskot.png"

export default function Sproduk() {
    return (
        <div className='px-24 py-48 h-screen font-poppins'>
            <div className='container'>
                <div className='flex '>
                    <div className='w-full items-center bg-gray-300 mx-auto lg:w-1/2 rounded-2xl shadow-lg'>
                        <div className='relative mt-10  flex items-center justify-center  '>
                            <img src={hero} className='absolute right-[-16vh] top-[-12vh]    h-96 object-cover' />
                        </div>
                        <div class="flex flex-col items-center mb-14">
                            <h5 class="mt-5 text-xl font-semibold text-gray-900 md:text-2xl mb-2">
                                Layanan Produk
                            </h5>
                            <ul class="my-4 space-y-3">

                                <li>
                                    <a href="/chat" class="flex items-center p-3 text-base  rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] text-white">
                                        <img className='w-14 rounded-full' src='https://img.freepik.com/free-vector/industrial-fish-farming-isometric_1284-69321.jpg?w=740&t=st=1695903338~exp=1695903938~hmac=618b671f141e2009b84470226301d382e66766e9b3510c45c7608d683375f9a4' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Produk Budi Daya Ikan</span>
                                    </a>
                                </li>
                                

                            </ul>
                            <a href="/"><BsArrowLeftShort className='bg-white  text-3xl  rounded-full absolute  border-2 border-blue-700 cursor-pointer' /></a>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
