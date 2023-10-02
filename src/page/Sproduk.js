import React from 'react'
import hero from "../assets/maskot.png"

export default function Sproduk() {
    return (
        <div className='px-24 pt-28 font-poppins'>
            <div className='container'>
                <div className='flex '>
                    <div className='w-full items-center bg-gray-300 mx-auto lg:w-1/2 rounded-2xl shadow-lg'>
                        <div className='relative mt-10  flex items-center justify-center  '>
                            <img src={hero} className='absolute right-[-20vh] top-8    h-96 object-cover' />
                        </div>
                        <div class="flex flex-col items-center mb-14">
                            <h5 class="mt-5 text-xl font-semibold text-gray-900 md:text-2xl mb-2">
                                Menu Produk
                            </h5>
                            <ul class="my-4 space-y-3">

                                <li>
                                    <a href="/chat" class="flex items-center p-3 text-base  text-gray-900 rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] dark:text-white">
                                        <img className='w-14 rounded-full' src='https://img.freepik.com/free-vector/industrial-fish-farming-isometric_1284-69321.jpg?w=740&t=st=1695903338~exp=1695903938~hmac=618b671f141e2009b84470226301d382e66766e9b3510c45c7608d683375f9a4' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Produk Budi Daya Ikan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/form" class="flex items-center p-3 text-base  text-gray-900 rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] dark:text-white">
                                        <img className='w-14 rounded-full' src='https://img.freepik.com/free-vector/industrial-seafood-fish-farm-indoor-aquaculture-facility-isometric-interior-view-with-cutout-roof-wall-sections-vector-illustration_1284-69665.jpg?w=740&t=st=1695903064~exp=1695903664~hmac=f76dfddfbe203d08e3c22a3c12652c78ded520d6eb46bf95f56dfc88614d6dfb' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Praktek Kegiatan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/chat" class="flex items-center p-3 text-base  text-gray-900 rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] dark:text-white">
                                        <img className='w-14 rounded-full' src='https://img.freepik.com/premium-vector/industrial-fishing-isometric-view_1284-69465.jpg?w=740' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Pelatihan Budi Daya</span>
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
