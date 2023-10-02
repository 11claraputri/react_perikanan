import React from 'react'
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faXmark, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import hero from "../assets/kkp.png"


export default function Chat() {

    return (
        // <div>
        //     <button class="open-btn"  onClick={openChatWindow()}>
        //         <i ><FontAwesomeIcon icon={faComment} /></i>
        //     </button>
        //     <div class="chat-popup" id='chat-form-container'>
        //         <form action='#' class="form-container">
        //             <div class='chat-window-head'>
        //                 <h4><i><FontAwesomeIcon icon={faComment} /></i>Chat</h4>
        //                 <span class='close-btn' onClick={closeChatWindow()}>
        //                     <i><FontAwesomeIcon icon={faXmark} /></i>
        //                 </span>
        //             </div>

        //             <div class='msg-container'>
        //                 <div class='msg'>
        //                     <p>Hey how may i help you?</p>
        //                     <span>08:32</span>
        //                 </div>
        //             </div>

        //             <div class='chat-box-container'>
        //                 <div class='chat-box'>
        //                     <input type='text' placeholder='Type your message..' name='msg' required/>
        //                     <button type='submit' class="btn"><i><FontAwesomeIcon icon={faCircleChevronRight} /></i></button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div className='bg-gray-100 dark:bg-gray-800'>
            <div className='flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto'>
                <div className='p-12 lg:p-20 w-full'>
                    <div className='max-h-full h-full flex flex-row'>
                        <div className='w-full lg:w-2/6 bg-white dark:bg-gray-900 rounded-lg mr-5'>
                            <div className='max-w-full h-full w-full flex-flex-col'>
                                <div className='flex p-10 justify-between'>
                                    <div className='text-4xl font-poppins dark:text-white text-gray-900'>chat</div>

                                </div>
                                <div className='flex-1 overflow-y-scroll '>
                                    <div className='w-full space-y-10'>
                                        <div className='cursor-pointer flex px-10'>
                                            <div className='mr-4 relative w-12'>
                                                <img className='rounded-full w-full mr-2' src='https://blalockcompanies.com/commercial/wp-content/uploads/sites/2/2017/08/person.jpg' />
                                                <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0'></div>

                                            </div>
                                            <div className='flex flex-col flex-1'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='text-gray-800 text-base font-poppins dark:text-gray-300'>user</div>
                                                    <div className='text-gray-700 dark:text-gray-600 text-xs'>12:00</div>
                                                </div><div className='text-gray-400 text-sm dark:text-gray-600'>
                                                    bagaimana caranya?
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative max-h-full h-full bg-white rounded-lg w-full flex flex-col dark:bg-gray-900 lg:flex-hidden'>
                            <div className='flex-1 overflow-scroll p-5 scrollbar-thumb-color dark:scrollbar-thumb-color-dark scrollbar-width space-y-5'>
                                <div className='flex justify-start'>
                                    <div className='w-14 mr-5'>
                                        <img className='rounded-full w-full' src='https://blalockcompanies.com/commercial/wp-content/uploads/sites/2/2017/08/person.jpg' />
                                    </div>
                                    <div className='flex-flex-col space-y-5 text-left'>
                                        <div>
                                            <span className='bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline-flex max-w-xl dark:text-white dark:bg-gray-800'>
                                                gimn kabarnya?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='space-y-5 text-right'>
                                        <div className='bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-none p-5'>
                                <div>
                                    <div className='relative flex'>
                                        <span className='absolute inset-y-0 flex-items-center'>
                                            <button type='button'className='inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'>emot</button>
                                        </span>
                                        <input type='text' placeholder='type here..' className='w-full focus:outline-none focus:placeholderbg-gray-400 pl-12 bg-gray-100 dark:bg-gray-800 rounded-full py-3 pr-5'/>
                                            <div className='ml-5'>
                                                <button className='inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-indigo-800 hover:bg-indigo-600 focus:outline-none'></button>
                                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
// function openChatWindow(){
//     // document.getElementById("chat-form-container").style.display="block";
// }
// function closeChatWindow(){
//     document.getElementById("chat-form-container") ;
// }
