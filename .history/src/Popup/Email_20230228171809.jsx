import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
const Email = ({ setModalOn }) => {
    const handleModalClick = () => {
        setModalOn(false)
    }
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jakluhz', 'template_nu6dt2p', form.current, 'Oyu5widnvktMkXEma')
    .then((result) => {
        alert("Message Sent Successfully!")
        handleModalClick()
    }, (error) => {
        alert("Error! Message not Sent!")
    });
};
    return (

        <div className="font-pop bg-zinc-900 opacity-95 fixed inset-0 z-50 ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-gray-600 pb-1 pt-5 px-20 border-4 border-gray-800 rounded-xl font-bold">

                    <div className="flex  text-lg  text-white   mb-10" >
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-col gap-2 mt-2">
                                <label htmlFor="fullName">Name</label>
                                <input type="text" id="fullName" name="from_name" className="rounded-lg p-2 bg-gray-800 font-normal text-sm" required/>
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                <label htmlFor="email_id">Email</label>
                                <input type="email" id="email_id" name="email_id" className="rounded-lg p-2 bg-gray-800 font-normal text-sm" required/>
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                <label htmlFor="message">Comment</label>
                                <textarea name="message" id="message" cols="30" rows="10" className="rounded-lg p-2 bg-gray-800 font-normal text-sm" required></textarea>
                            </div>
                                <div className="flex justify-between items-center mt-4">
                                <button onClick={
                                handleModalClick} className=" rounded px-4 py-2 text-white  bg-gray-700 ">Cancel</button>
                                <button type="submit" className="rounded px-4 py-2 ml-4 text-white bg-gray-400 pointer" id="send_mail" >Send
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Email