// import { Lock } from "lucide-react";

import { Lock } from "lucide-react";
import { ReactElement, ReactSVG } from "react";

type Props={
    name:string,
    icon:ReactElement<ReactSVG,string>,
    onClick:(e:any)=>void,
    classes:string,
    isLock:boolean
}
const Button = ({name, icon, onClick, classes,isLock=true}:Props) => {
    return (
       
            <button
                disabled={isLock}
                onClick={onClick}
                className={classes + ` ${isLock && "lock" }`}
                >
               {name && <span>{name}</span>}
               {!isLock ? icon : <Lock/> }
            </button>
    );
}

export default Button;