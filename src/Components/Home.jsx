import React, { useState } from "react";
import AOS from "aos";
import axios from "axios";
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
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleOpen = () => setOpen((cur) => !cur);

    const handleSendMessage = async()=>{
        const emailDetails ={
            "email": email,
            "senderName": name
        }
        try{
            console.log(emailDetails)
            const sendEmail = await axios.post(" https://x8yph5yvrg.execute-api.ap-southeast-1.amazonaws.com/default/PortfolioEmailSender",emailDetails)
            alert("Email send", JSON.stringify(sendEmail.data))
        }
        catch(error){
            console.log(error)
            alert("Error sending email", JSON.stringify(error))
        }
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
                    <Card className="mx-auto w-full max-w-[24rem]">
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray" className="capitalize">
                                connect with me
                            </Typography>
                            <Input
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                label="Your Email" 
                                size="lg" 
                                placeholder="tomleonardabella@gmail.com"/>
                            <Input
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                                label="Your Name" 
                                size="lg"  
                                placeholder="Tom Leonard Abella"/>
                            <Input
                                value={subject}
                                onChange={(e)=>setSubject(e.target.value)}
                                    label="Subject" 
                                    size="lg"  
                                    placeholder="Inquire"/>
                            <Textarea onChange={(e)=>setMessage(e.target.value)} value={message} label="Message" size="lg" />
                        </CardBody>
                        <CardFooter className="pt-0 items-center justify-center flex">
                            <Button variant="gradient" onClick={handleSendMessage} className="flex items-center justify-center gap-2">
                                <i className="fa fa-send cursor-pointer"></i>  <p>Send Message</p>
                            </Button>
                        </CardFooter>
                    </Card>
                </Dialog>
            </div>
        </div>
    )
}