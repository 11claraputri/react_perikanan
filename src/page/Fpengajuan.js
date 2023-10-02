import React from 'react'

export default function Fpengajuan() {
    return (
        <div>
            <div className='font-poppins fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' >
                <div className='w-[600px] flex flex-col'>
                    <button className='text-white text-xl place-self-end' ><a href="/Produk">X</a></button>
                    <div className='bg-white p-2 rounded'>
                        <div className='py-6 px-6 lg:px-8 text-left '>
                            <h3 className='text-xl   text-gray-900 mb-10 text-center font-bold'>Form Pengajuan Kegiatan Praktek</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Nama</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 " placeholder="Input Nama Lengkap" required />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                                </div>

                                <div>
                                    <label for="notelp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">No Telepon</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 " placeholder="No Telp" required />
                                </div>
                                <div>
                                    <label for="instansi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Instansi</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 " placeholder="Input Instansi" required />
                                </div>
                                <div class="mb-2">
                                    <label
                                        for="formFile"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Upload File Surat Pengajuan Kegiatan Praktek</label>
                                    <input
                                        class="relative m-0 block w-full min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-300 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                                        type="file"
                                        id="formFile" />
                                </div>
                                {/* <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Alamat</label>
                <textarea rows="4" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Alamat" required ></textarea>
              </div> */}


            <button type="submit" class="text-white items-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>


                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


