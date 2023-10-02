import React from 'react'

const Modal = ({ isVisible, onClose, childern }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }
  return (
    <div className='font-poppins fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-2 rounded'>{childern}
          <div className='py-6 px-6 lg:px-8 text-left'>
            <h3 className='text-xl   text-gray-900 mb-5'>Buku Tamu</h3>
            <form class="space-y-6" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black" placeholder="Input Nama Lengkap" required />
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">No Telpon</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black" placeholder="No Telpon" required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Keperluan</label>
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Keperluan</option>
                    {/* <option>Layanan</option>
                    <option>Jasa</option>
                    <option>Produk</option> */}
                  </select>
                </div>
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Alamat</label>
                <textarea rows="4" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Alamat" required ></textarea>
              </div>


              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Modal
