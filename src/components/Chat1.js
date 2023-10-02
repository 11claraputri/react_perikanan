import React,{Fragment, useState} from 'react'
import '../style.css'
import '../typing.css'
import '../chat.css'
import Modal from '../components/Modal';
import img from '../assets/images/image.png'
import box from '../assets/images/icons/chatbox-icon.svg'
import emo from '../assets/images/icons/emojis.svg'
import '../assets/js/Chat'
import '../assets/js/App'

export default function Chat() {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>

        <div class="container font-poppins">
            <div class="chatbox font-poppins mb-20">
                <div class="chatbox__support">
                    <div class="chatbox__header">
                        <div class="chatbox__image--header ">
                            <img src={img} alt="image" />
                        </div>
                        <div class="chatbox__content--header ">
                            <h4 class="chatbox__heading--header">Chat support</h4>
                            <p class="chatbox__description--header">user</p>
                        </div>
                    </div>
                    <div class="chatbox__messages">
                        <div>
                            <div class="messages__item messages__item--visitor">
                                Can you let me talk to the support?
                            </div>
                            <div class="messages__item messages__item--operator">
                                Sure!
                            </div>
                            <div class="messages__item messages__item--visitor">
                                Need your help, I need a developer in my site.
                            </div>
                            <div class="messages__item messages__item--operator">
                                Hi... What is it? I'm a front-end developer, yay!
                            </div>
                            <div class="messages__item messages__item--typing">
                                <span class="messages__dot"></span>
                                <span class="messages__dot"></span>
                                <span class="messages__dot"></span>
                            </div>
                        </div>
                    </div>
                    <div class="chatbox__footer">
                        <img src={emo} alt="" className='w-6'/>
                        <input type="text" placeholder="Write a message..." />
                        <button class="chatbox__send--footer hover:bg-blue-700 rounded-full px-3 py-3" onClick={() => setShowModal(true)}>Send</button>
                    </div>
                </div>
                {/* <div class="chatbox__button">
                    <button>button</button>
                </div> */}
            </div>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className='py-6 px-6 lg:px-8 text-left'>
          <h3 className='text-xl font-poppins text-gray-900 mb-5'>Buku Tamu</h3>
          <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
        </div>
      </Modal>
    </Fragment>

    )

}
