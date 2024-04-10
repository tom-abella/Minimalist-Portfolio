import React, { useEffect, useState, useRef } from "react";
import photo from '../assets/photo.png'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'
import AOS from "aos";
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css'
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Spinner,
    Textarea,
} from "@material-tailwind/react";
import { MdOutlineError, MdOutlineCheck } from "react-icons/md";
export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = () => setOpenAlert(!openAlert);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const handleSendMessage = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const response = await emailjs.sendForm('service_jakluhz', 'template_nu6dt2p', form.current, 'zrnB7TDR-vHn_wtwR')
            if (response.text === "OK") {
                setSuccess(true)
                handleOpen()
                handleOpenAlert()
                setLoading(false)
            } else {
                setSuccess(false)
                handleOpen()
                handleOpenAlert()
                setLoading(false)
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
        setEmail("")
        setName("")
        setMessage("")
    }

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="min-h-screen m-full bg-gray-900  flex p-11 text-4xl justify-center items-center text-gray-300 font-pop flex-col md:flex-row overflow-hidden relative text-center" id="contact">
            <div className="background-image" />
            <ul className=" flex gap-5 items-center justify-center  flex-col w-full max-w-lg h-full">
                <li className="h-full lg:w-[30rem] flex flex-col justify-center items-center lg:justify-start">
                    <p className="text-[40px]" data-aos="fade-up" data-aos-duration="900">Get in touch</p>
                    <p className="text-base" data-aos="fade-up" data-aos-duration="900">Fill in the form to start a conversation</p>
                </li>
                <li className=" w-full h-full text-white  max-w-lg  p-10 rounded-lg bg-[#f5f5f5] opacity-75 z-10" data-aos="fade-up" data-aos-duration="900">
                    <form ref={form} onSubmit={handleSendMessage} className="flex gap-5 flex-col text-white">
                        <Input
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            size="lg"
                            required
                           
                            placeholder="tomleonardabella@gmail.com" />
                        <Input
                            id="fullName"
                            name="from_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name"
                            size="lg"
                            required
                            placeholder="Tom Leonard Abella" />
                        <Textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            label="Message"
                            name="message"
                            id="message"
                            required
                            size="lg" />


                        {loading ? (
                            <Button variant="gradient" disabled className="flex items-center justify-center gap-2">
                                <Spinner className="w-full" />
                            </Button>
                        ) : (
                            <Button id="send_mail" variant="gradient" type="submit" className="flex items-center justify-center gap-2">
                                <i className="fa fa-send cursor-pointer"></i>  <p>Send Message</p>
                            </Button>
                        )}

                    </form>
                </li>

            </ul>

            {/* dialog box */}
            <Dialog
                size="xs"
                open={openAlert}
                handler={handleOpenAlert}
                className="bg-transparent shadow-none w-full"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    {!success ? (
                        <CardBody className="flex flex-col gap-4 items-center justify-center">
                            <MdOutlineError size={100} color="#161616" />
                            <Typography variant="h6" color="blue-gray" className="capitalize">
                                Error sending email. Please try again.
                            </Typography>
                        </CardBody>
                    ) : (
                        <CardBody className="flex flex-col gap-4 items-center justify-center">
                            <MdOutlineCheck size={100} color="#161616" />
                            <Typography variant="h6" color="blue-gray" className="capitalize">
                                Email sent successfully.
                            </Typography>
                        </CardBody>
                    )}
                    <CardFooter className="pt-0 items-center justify-center flex">
                        <Button variant="gradient" onClick={handleOpenAlert} className="flex items-center justify-center gap-2">
                            <p>Okay</p>
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    )
}