import { ReactElement, ReactSVG, useState } from "react";
import { Link } from "react-router-dom";

type Props={
    label?:string;
    icon:ItemFoo['icon'];
    hasMenu?:boolean;
    hasBorder?:boolean;
    menuItems?:ItemFoo[] | undefined
}
type ItemFoo={
    title:string;
    route:string;
    icon?:ReactElement<ReactSVG,string>; 
}
type ItemProps={
    item: ItemFoo
}
type ItemsProps={
    items: ItemFoo[]
}
const Item=({item}:ItemProps)=>{
    return (
        <div className=" border-t py-1 cursor-pointer hover:bg-gray-200 px-2 w-full">
            <Link to={item?.route} className=" flex space-x-2">
                {item.icon}
                <span>{item?.title}</span>
            </Link>
        </div> 
    )
}
const Items = ({items}:ItemsProps) =>{
    return (
        <>
            <div className="absolute bg-white border-l border-r border-b top-11 right-0 w-48 h-32"> 
                {
                    items.map((item:ItemProps["item"],index:number)=>(
                        <Item key={index} item={item}/>
                    ))
                }
            </div>
        </>
    )
}
const MainNavItem = ({label,icon,hasMenu=false,menuItems, hasBorder=true}:Props) => {
    const [dropdown, setDropdown] = useState<boolean>()
    return ( 
        <div className="relative">
            <div onClick={()=>setDropdown(dropdown == !hasMenu)} className={`flex cursor-pointer items-center relative space-x-1 ${hasBorder ?  "border" : ""}  px-2 rounded-md p-1`}>
                <span>{icon}</span><h2 className="">{label}</h2>
            </div>
           {dropdown && <Items items={menuItems||[]}/>}
        </div>
    );
}
 
export default MainNavItem;