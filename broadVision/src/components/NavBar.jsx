import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo1.png";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";


export default function NavBar() {

    const inactive = "text-black hover:text-[#1434A4]";
    const active = "text-[#1434A4]";
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="p-6 ">
            <nav className="mb-4 font-normal px-1">
                {/*NAvBar*/}
                <div className="flex flex-row justify-between items-center">

                    {/*Logo*/}
                    <NavLink
                        to="/Home"
                    >
                        <img
                            src={logo}
                            className="h-8 w-auto"
                        />
                    </NavLink>

                    {/*Page Links*/}
                    <div className="text-black hidden md:flex flex-row gap-6 text-lg overflow-hidden font-black">
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? active : inactive}`
                            }
                            to="/Home"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? active : inactive}`
                            }
                            to="/MeetOurTeam"
                        >
                            Meet Our Team
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? active : inactive}`
                            }
                            to="/Packages"
                        >
                            Packages
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? active : inactive}`
                            }
                            to="/PartnerHMOs"
                        >
                            Partner HMOs
                        </NavLink>

                       <NavLink
                            className={({ isActive }) =>
                                `${isActive ? active : inactive}`
                            }
                            to="/ContactUs"
                        >
                            Contact Us
                        </NavLink>


                    </div>

                    {/*Contact Us*/}
                    <div className="text-black flex flex-row items-center font-bold gap-2">
                        <FaPhone color="#1434A4" />
                        +2347055570730
                    </div>

                    <button
                        className=" md:hidden"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FiX size={24} color="black" /> : <FiMenu size={24} color="black" />}
                    </button>

                </div>


            </nav>

            {isOpen && (
                <div className="flex flex-col gap-3 p-4 bg-white shadow md:hidden text-black">
                    <NavLink to="/Home">Home</NavLink>
                    <NavLink to="/MeetOurTeam">Meet Our Team</NavLink>
                    <NavLink to="/Packages">Packages</NavLink>
                    <NavLink to="/PartnerHMOs">Partner HMOs</NavLink>
                    <NavLink to="/ContactUs">Contact Us</NavLink>

                </div>

            )}


        </div>

    )
}
