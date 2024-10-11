// import { Home, IconNode } from "lucide-react";
// import Link from "next/link";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SideBarItem from "./item/side-bar-item";
import { Hospital, LucideHospital, MessageCircle } from "lucide-react";

import reception from "./../../../../../assets/reception.png"
import messages from "../../../../../assets/message.png"
type Props = {
    name:string;
    route:string;
    icon : string;
    new:number;
}
const SideBarItems = () => {
    const [items,setItems] = useState([
        {
            name:"Reception",
            route:"/dashboard/reception",
            icon:<img src={reception} height={25} width={25} />,
            new:""
        },
        {
            name:"Messagerie",
            route:"/dashboard/msg",
            icon:<img src={messages} height={25} width={25} />,
            new:"10"
        },
        {
            name:"Consultation",
            route:"/",
            icon:<Hospital/>,
            new:""
        }
    ])
    return (
        <>
        { items.map((item, index) => <SideBarItem key={index} item={item}/>)}
        </>
    );
}

export default SideBarItems;