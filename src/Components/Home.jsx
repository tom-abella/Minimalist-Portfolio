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
    Textarea,
} from "@material-tailwind/react";
export default function Body() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const handleOpen = () => setOpen((cur) => !cur);

    const form = useRef();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jakluhz', 'template_nu6dt2p', form.current, 'zrnB7TDR-vHn_wtwR')
        .then((result) => {
            alert("Message Sent Successfully!")
        }, (error) => {
            alert("Error! Message not Sent!")
        });
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
                                connect with me
                            </Typography>
                            
                            <Input
                                id="email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Your Email"
                                size="lg"
                                placeholder="tomleonardabella@gmail.com" />
                            <Input
                                id="fullName"
                                name="from_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                label="Your Name"
                                size="lg"
                                placeholder="Tom Leonard Abella" />
                            <Textarea 
                            onChange={(e) => setMessage(e.target.value)} 
                            value={message} 
                            label="Message"
                            name="message" 
                            id="message"
                            size="lg" />
                        
                        </CardBody>
                        <CardFooter className="pt-0 items-center justify-center flex">
                            <Button id="send_mail" variant="gradient" type="submit" className="flex items-center justify-center gap-2">
                                <i className="fa fa-send cursor-pointer"></i>  <p>Send Message</p>
                            </Button>
                        </CardFooter>
                    </Card>
                    </form>
                </Dialog>
            </div>
        </div>
    )
}