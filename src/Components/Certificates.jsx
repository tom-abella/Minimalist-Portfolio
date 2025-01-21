import React, { useState, useEffect } from "react";
import { certificates } from "../Data/Data";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import AOS from "aos";
export default function Certificates() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [image, setImage] = useState('')
    const handleChangeImage = (imageLinks) => {
        setImage(imageLinks)
        handleOpen()
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="h-full bg-gray-900 flex px-5 text-4xl justify-center items-center flex-col font-pop min-h-screen py-10 pt-20 overflow-hidden" id="certificates">
            <p className="text-[25px] md:text-[30px] lg:text-[40px] fontbold uppercase mb-10 text-gray-300 scroll-mt-10" data-aos="fade-up" data-aos-duration="900">Certificates</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-4xl m-auto">
                {certificates.map(({ imageLinks }, index) => (
                    <div key={index} data-aos="fade-up" data-aos-duration="900">
                        <button onClick={() => handleChangeImage(imageLinks)} className="h-40 w-full max-w-full">
                            <img
                                className="h-40 w-full max-w-full rounded-lg object-s object-top object-cover"
                                src={imageLinks}
                                alt="gallery-photo"
                            />
                        </button>
                    </div>
                ))}
            </div>

            <Dialog
                size="md"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none w-full"
            >
                <Card className="mx-auto w-full">
                    <CardBody className="flex flex-col gap-4 items-center justify-center">
                        <img
                            className="w-full  rounded-lg"
                            src={image}
                            alt="gallery-photo"
                        />
                    </CardBody>
                    <CardFooter className="pt-0 items-center justify-center flex">
                        <Button variant="gradient" onClick={handleOpen} className="flex items-center justify-center gap-2">
                            <p>Close</p>
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    )
}