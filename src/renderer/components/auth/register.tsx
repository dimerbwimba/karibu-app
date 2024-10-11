// import { ChevronsLeft, ChevronsRight, Facebook, Gem, LogIn } from "lucide-react"
import { ChevronsRight } from "lucide-react";
import Input from "../tools/input"
import google from "../../../../assets/google.png"
import facebook from "../../../../assets/facebook.png"
const Register = () => {
    return (
        <div className="login-form">
            <h1 className='welcome-title'>
                Crée ton compte
            </h1>
            <Input
                name={"Nom de votre entreprise"}
                placeholder={"Tapez votre adress mail ou votre nom d'utilisateur"}
                onChange={() => { }}
            />
            <Input
                name={"Votre adress mail"}
                placeholder={"Tapez votre adress mail ou votre nom d'utilisateur"}
                onChange={() => { }}
            />
            <Input
                name={"Mot de passe"}
                placeholder={"Tapez votre adress mail ou votre nom d'utilisateur"}
                onChange={() => { }}
            />
            <button onClick={() => { }} className="btn btn-full btn-add mt4">
                <span>S'enregistrer</span>
                 <ChevronsRight />
            </button>
            <div className='or-login-divider'> Or </div>
            <button onClick={() => { }} className="btn btn-full  mt4">
                <img src={google} height={25} width={25} />
                <span>S'enregistrer avec GOOGLE</span>
            </button>
            <button onClick={() => { }} className="btn btn-full mt4">
                <img src={facebook} height={25} width={25} />
                <span>S'enregistrer avec Facebook</span>
            </button>
        </div>
    );
}

export default Register;