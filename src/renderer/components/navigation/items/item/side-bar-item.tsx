import { ReactElement, ReactSVG } from "react"
import { NavLink } from "react-router-dom"

type Props={
    icon:ReactElement<ReactSVG,string>,
    route:string,
    name:string,
    new?:string
}
const SideBarItem = ({item}:{item:Props})=>{
    return (
            <NavLink className="link" to={item.route}>
                <div className="sidebar-item flex space-x-3">
                    <span className=" border-r pr-2">
                        {item.icon}
                    </span>
                    <span>{item.name}</span>
                    <span className="red">
                        {item.new ? `(${item.new})`:""}
                    </span>
                </div>
            </NavLink>
    )
}

export default SideBarItem;