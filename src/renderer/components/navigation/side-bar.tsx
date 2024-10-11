// import Link from "next/link";
// import { BarChart, ChevronRight, CogIcon, Home, IconNode, LogOut, Magnet, Menu, Star, User } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useState } from "react";

import SideBarItems from "./items/side-bar-items";
import { Cog, Home, LogOut } from "lucide-react";
import SideBarItem from "./items/item/side-bar-item";
import role from "./../../../../assets/role.png"
import male_profile from "./../../../../assets/profile-home.png" 
import settings from "./../../../../assets/settings.png" 
import disconnect from "./../../../../assets/disconnected.png"
const SideBar = () => {
    const [organisations, setOriganisations] = useState(["GE", "TM"])
    return (
        <div className=" w-[25.5%]  bg-white">
            <div className="fixed min-w-max  w-1/4 h-screen    z-[999999]">
                <div className="w-full flex">
                    <div className=" w-[25%] border-r px-3 py-3 flex justify-start flex-col space-y-3 ">
                        {organisations.map((o,index) =>
                            <div key={index} className="border h-10 w-10 flex justify-center items-center rounded-lg shadow-sm cursor-pointer font-bold active">
                                {o}
                            </div>
                        )}
                    </div>
                    <div className="w-full flex flex-col justify-between h-screen border-r">
                        <div className="w-full">
                            <div className=" bg-gray-50 p-16">
                                Logo
                            </div>
                        <SideBarItem  item={ {icon:<Home/>,route:"/dashboard",name:"Acceuille",new:""}} />
                            {/* {JSON.stringify(tools)} */}
                            <SideBarItems/>
                        </div>
                        <div>
                            <SideBarItem  item={ {icon:<img src={role} height={25} width={25} />,route:"/dashboard/role",name:"Role",new:""}} />
                            <SideBarItem  item={ {icon:<img src={male_profile} height={25} width={25} />,route:"/dashboard/profile",name:"Profile",new:""}} />
                        </div>
                        <div className="side-menu-bottom-container">
                            <div className="side-menu-bottom-container-item-settings">
                                <SideBarItem  item={ {icon:<img src={disconnect} height={25} width={25} />,route:"/dashboard/profile",name:"Déconnection",new:""}} />
                                <SideBarItem  item={ {icon:<img src={settings} height={25} width={25} />,route:"/dashboard/profile",name:"Paramètre",new:""}} />

                            </div>
                            <div className="side-menu-bottom-container-item-licenced-version">
                                Licence v.1.0.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;