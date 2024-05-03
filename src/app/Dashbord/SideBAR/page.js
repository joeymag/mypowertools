import React from 'react'
import { User } from "@nextui-org/react";
import { IoMdHome,   } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import Link from 'next/link'

const menu = [
    {
        title: "Home",
        icon: <IoMdHome size={30} />,
        links: "/Dashbord"
    },
    {
        title: "MY tools",
        icon: <FaTools size={30} />,
        links: "/Dashbord/mytools"
    },
    {
        title: "Settings",
        icon: <IoIosSettings size={30} />,
        links: "/settings"
    },
    
]


const SideBar = () => {
        return (
            <div className="w-[300px] border-r min-h-screen bg-black  ">
                <div className=" p-5 text-white">
                <User
                    name="Jane Doe"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />
                <ul className="py-5 gap-2 m-4 text-lg ">
                    {menu.map((cat) => (
                        <ul key={cat.title} className="flex items-center">
                            <li className="flex  gap-2 p-1 text-white">
                                {cat.icon}
                                <Link href={cat.links}>
                                    <p>{cat.title}</p>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </ul>
                <div className="flex  text-white">
                    <p>Logout</p>
                </div>
                </div>
            </div>
        );
    }



export default SideBar