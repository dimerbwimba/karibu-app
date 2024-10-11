import { useState } from "react";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import { ChevronDown, HelpCircle, LogIn, User } from "lucide-react";
import { increment, selectCount } from "../store/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import auth from "../../../assets/password.png"
export default function HomeWelcome(){

	const [tab, setTab] = useState(0)
	return (
		<div>
			 <>
        <div className="welcome">
          <div className="left-marketing">
            <img src='' alt='logo' />
            <h1 className='welcome-marketing-h1'>BIENVENU SUR KARIBU APP</h1>
            <h2 className='welcome-marketing-h2'>
              Nous somme blabla
            </h2>
          </div>
          <div className="right-marketing">
            <div className=" mb-10">
              <img src={auth} height={105} width={105} />
            </div>
            <div className='login-register-button relative'>
              <button onClick={() => setTab(0)} className={`button ${tab === 0 && "active"}`}>
                <LogIn />
                <span>Login</span>
                {tab === 0 && <span className='tab-pointer'>
                <ChevronDown />
                </span>}
              </button>
              <div className='' style={{ paddingLeft: "14px", paddingRight: "14px" }}>
                ou
              </div>
              <button onClick={() => setTab(1)} className={`button ${tab === 1 && "active"}`}>

                <User />
                <span>Créez un compte</span>
                {tab === 1 && <span className='tab-pointer'>
                <ChevronDown />
                </span>}
              </button>
            </div>
            {tab === 0 && <Login />}
            {tab === 1 && <Register />}
            <div className=' active flex items-center space-x-2 justify-center border cursor-pointer'>
              <HelpCircle size={20}/>
              <span className=" font-bold text-red-800">Read the terms and services</span>
            </div>
          </div> 
        </div>
      </>
		</div>
	);
}