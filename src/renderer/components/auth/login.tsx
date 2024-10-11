// import { Facebook, Gem, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../tools/input";
// import Link from "next/link";
import google from "../../../../assets/google.png"
import facebook from "../../../../assets/facebook.png"
import { LogIn } from "lucide-react";
const Login = () => {
    return (
        <div className="register-form">

            <h1 className='welcome-title'>
                Accède à ton compte
            </h1>
            <Input
                name={"Nom d'utilisateur ou votre email"}
                placeholder={"Tapez votre adress mail ou votre nom d'utilisateur"}
                onChange={() => { }}
            />
            <Input
                name={"Mot de passe"}
                placeholder={"Tapez votre adress mail ou votre nom d'utilisateur"}
                onChange={() => { }}
            />
            <button onClick={() => { }} className="btn btn-full btn-add mt4">
                <LogIn /> 
                <Link to={"/after-auth/steps"}>Login gola</Link>
            </button>
            <div className=' border-b-2 py-2'></div>
            <button onClick={() => { }} className="btn btn-full  mt4">
                <img src={google} height={25} width={25} />
                <span className="font-bold">Utilise Google</span>
            </button>
            <button onClick={() => { }} className="btn btn-full mt4">
                <img src={facebook} height={25} width={25} />
                <span className=" font-bold">Utilise Facebook</span>
            </button>
        </div>
    );
}

export default Login;