// import { Lock } from "lucide-react";
// import Link from "next/link";

import { IconNode, Lock } from "lucide-react";
import { ReactElement, ReactSVG } from "react";
import { Link } from "react-router-dom";

type Props={
    href:string,
    name:string,
    icon:ReactElement<ReactSVG,string>
    onClick:(e:any)=> void,
    classes:string,
    isLock:boolean
}

const ButtonLink = ({href, name, icon, onClick, classes,isLock=true}:Props) => {
    return (
            <Link to={href}>
                <button
                    disabled={isLock}
                    onClick={onClick}
                    className={classes + ` ${isLock && "lock" }`}
                    >
                    <span>{name}</span>
                {!isLock ? icon : <Lock/> }
                </button>
            </Link>
    );
}

export default ButtonLink;