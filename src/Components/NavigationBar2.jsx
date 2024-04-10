import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { BsLightbulb, BsEnvelope, BsGlobeAsiaAustralia } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbTimeline } from "react-icons/tb";
import { Link } from 'react-scroll'
const navListMenuItems = [
    {
        title: "About",
        description: "Find the perfect solution for your needs.",
        icon: BsLightbulb,
        link: "about"
    },
    {
        title: "Skills & Experience",
        description: "Meet and learn about our dedication",
        icon: BsEnvelope,
        link: "skillset"
    },
    {
        title: "Projects",
        description: "Find the perfect solution for your needs.",
        icon: BsGlobeAsiaAustralia,
        link: "projects"
    },
    {
        title: "Certificates",
        description: "Learn how we can help you achieve your goals.",
        icon: LiaCertificateSolid,
        link: "certificates"
    },
    {
        title: "Timeline",
        description: "Reach out to us for assistance or inquiries",
        icon: TbTimeline,
        link: "timeline"
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, link }, key) => (
            <Link to={link} spy={true} smooth={true} duration={500}>
                <button onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMobileMenuOpen(false)} className="w-full">
                    <MenuItem className="flex items-center gap-3 rounded-lg ">
                        <div className="flex items-center justify-center rounded-lg  p-2">
                            {" "}
                            {React.createElement(icon, {
                                strokeWidth: 1,
                                className: "h-6 text-gray-300 lg:text-gray-900 w-6 text-xs ",
                            })}
                        </div>
                        <div>
                            <Typography
                                variant="h6"
                                className="flex items-center text-sm font-bold text-gray-300 lg:text-gray-900"
                            >
                                {title}
                            </Typography>
                        </div>
                    </MenuItem>
                </button>
            </Link>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-300 uppercase"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Resources
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block ">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 ">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                variant="small"
                color="white"
                className="font-medium"
            >
                <Link to="home" spy={true} smooth={true} duration={500}><ListItem className="flex items-center gap-2 py-2 pr-4 uppercase font-semibold">Home</ListItem></Link>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                variant="small"
                color="white"
                className="font-medium"
            >
                <Link to="contact" spy={true} smooth={true} duration={500}><ListItem className="flex items-center gap-2 py-2 pr-4 uppercase font-semibold">
                    Contact
                </ListItem></Link>
            </Typography>
        </List >
    );
}

export function NavigationBar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="min-w-screen px-4 py-2 fixed w-full m-auto z-20 top-0 right-0 left-0 bg-gray-900" color="transparent">
            <div className="flex items-center justify-between text-gray-300">
                <p className="capitalize font-black text-xl lg:text-3xl tracking-widest font-pop ml-3">TLA</p>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    color="white"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}