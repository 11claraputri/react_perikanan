import React, { useState } from 'react'
import Button from './Button';
import logo from "../assets/long.png"


const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Layanan", link: "/" },
        { name: "Contac", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        
        <div className=''>
            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-1 md:px-32 px-10'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center  text-gray-800'>
                        <div className='mr-2 '>
                            <img className='w-44' src={logo} />
                        </div>

                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`font-[poppins] md:flex md:items-center md:pb-0 pb-12 text-base absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                    <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                        <Button>
                            Login
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
