import { ReactElement, ReactSVG } from "react";
import { Link } from "react-router-dom";

type CardButtonProps={
    classes:string;
    title:string;
    icon:ReactElement<ReactSVG,string>;
    href:string;
}

const CardButtonLink = ({classes,title,icon,href}:CardButtonProps) => {
    return ( 
        <Link to={href}>
            <div className={classes}>
                <div className=" flex flex-col justify-center items-center">
                    {icon}
                    <h1 className=" font-bold text-lg">{title}</h1>
                </div>
            </div>
        </Link>
     );
}
 
export default CardButtonLink;