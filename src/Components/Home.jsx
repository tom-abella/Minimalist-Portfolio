import React, { useRef, useState } from "react";
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
export default function Body() {
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
        try{
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
        catch(error){
            console.log(error)
            setLoading(false)
        }
        setEmail("")
        setName("")
        setMessage("")
    }

    return (

        <div className="font-pop" id="home">
            <div className="h-screen flex flex-col capitalize justify-center items-center  w-full text-gray-300">
                <p className=" uppercase text-3xl  md:text-5xl lg:text-5xl" data-aos="fade-right" data-aos-duration="1000">Tom Leonard Abella</p>
                <p className="my-2" data-aos="fade-right" data-aos-duration="300">front end developer</p>
                <ul className="flex justify-around" data-aos="fade-right" data-aos-duration="600">
                    <li><a href="https://www.facebook.com/tomleonard.abella/" target={"_blank"}><i className="fa fa-facebook fa-2x mx-2 p-2 hover:text-blue-500 cursor-pointer"></i></a></li>
                    <li><a href="https://www.instagram.com/abella_tl/" target={"_blank"}><i className="fa fa-instagram fa-2x mx-2 p-2 hover:text-rose-500 cursor-pointer"></i></a></li>
                    <li><a href="https://github.com/tom-abella" target={"_blank"}><i className="fa fa-github fa-2x mx-2 p-2 hover:text-slate-400 cursor-pointer"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/tom-leonard-abella" target={"_blank"}><i className="fa fa-linkedin fa-2x mx-2 p-2 hover:text-blue-500 cursor-pointer"></i></a></li>
                    <li>

                        <button onClick={handleOpen}><i className="fa fa-envelope-o fa-2x mx-2 p-2 hover:text-slate-400 cursor-pointer"></i></button>

                    </li>
                </ul>

                {/* dialog box */}
                <Dialog
                    size="xs"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none w-full"
                >
                    <form ref={form} onSubmit={handleSendMessage}>
                        <Card className="mx-auto w-full max-w-[24rem]">
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant="h4" color="blue-gray" className="capitalize">
                                    Message Me
                                </Typography>

                                <Input
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="Your Email"
                                    size="lg"
                                    required
                                    placeholder="tomleonardabella@gmail.com" />
                                <Input
                                    id="fullName"
                                    name="from_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    label="Your Name"
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

                            </CardBody>
                            <CardFooter className="pt-0 items-center justify-center flex">

                                {loading ? (
                                    <Button variant="gradient" disabled className="flex items-center justify-center gap-2">
                                        <Spinner className="w-full" />
                                    </Button>
                                ) : (
                                    <Button id="send_mail" variant="gradient" type="submit" className="flex items-center justify-center gap-2">
                                        <i className="fa fa-send cursor-pointer"></i>  <p>Send Message</p>
                                    </Button>
                                )}

                            </CardFooter>
                        </Card>
                    </form>
                </Dialog>

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
        </div>
    )
}