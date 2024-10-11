import { Cog, Dot, LockKeyhole, Menu, Star, Subscript } from "lucide-react";
import MainNavItem from "./item/main-nav-item";
import hospital from "../../../../../assets/hospital.png"
const MainNavItems = () => {

    const items = [
        {
            label:"Favorite",
            icon:<Star/>,
            left:1,
            hasMenu:false,
        },

        {
            label:"Menu",
            icon:<Menu/>,
            left:0,
            hasMenu:true,
            MenuItems:[
                {
                    icon:<LockKeyhole/>,
                    title:"Securite",
                    route:"/dashboard/sub",
                },
                {
                    icon:<Subscript/>,
                    title:"Souscription",
                    route:"/dashboard/sub",
                },
                {
                    icon:<Cog/>,
                    title:"Paramètre avancé",
                    route:"/dashboard/sub",
                },
            ]
        },
    ]

    return ( 
        <div className=" flex justify-between px-5 py-1 ">
            <div className="flex space-x-5 ">
            <MainNavItem hasBorder={false} label={"Company name"} icon={<img src={hospital} height={23} width={23} />}/>
                {
                items.filter((item)=> item.left !==0 ).map((item,index)=>(
                    <MainNavItem key={index} label={item.label} icon={item.icon}/>
                ))
                }
            </div>
            <div className=" flex space-x-3">
            <MainNavItem hasBorder={false} label={"Online"} icon={<div className=" h-3 w-3 bg-green-700 rounded-full"></div>}/>
                {
                    items.filter((item)=> item.left ===0 ).map((item,index)=>(
                        <MainNavItem key={index} label={item.label} icon={item.icon} hasMenu={true} menuItems={item.MenuItems}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default MainNavItems;