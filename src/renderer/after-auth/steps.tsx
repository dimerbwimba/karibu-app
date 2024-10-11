// import { ChevronsLeft, ChevronsRight, HandCoins, Home, Hospital, Store } from "lucide-react";
// import Link from "next/link";
import ButtonLink from "../components/tools/button-link";
import Button from "../components/tools/button";
import { useState } from "react";
import { ChevronsRight, HandCoins, Hospital, Store } from "lucide-react";
import hospital from "../../../assets/hospital.png"
import store from "../../../assets/store.png"
import ong from "../../../assets/care.png"
// import Navigation from "../_components/navigation";
import picklist from "../../../assets/list.png"
const AfterAuthQuestions = () => {
    const [selected,setSelected] = useState("");
    return (
        <div>
                {/* <Navigation routePrev="/home" isPrev={true} /> */}
            
            <div className="AfterAuthQuestions">
            
                <div className="steps">
                    <h1 className="welcome-title text-center">
                        Choisie le type d'entreprise
                    </h1>
                    
                    <div className="type-of-company">
                        <button onClick={() => setSelected("ONG")} className={`card  ${selected ==="ONG" && "active"} ` }>
                            <div className="icon-text">
                                <img src={ong} alt="" height={43} width={43} />
                                <span>ONG</span>
                            </div>
                        </button>
                        <button 
                            onClick={() => setSelected("Hopitale")} 
                            className={`card  ${selected ==="Hopitale" && "active"} ` }>
                            <div className="icon-text">
                                <img src={hospital} alt="" height={43} width={43} />
                                <span>Hopitale</span>
                            </div>
                        </button>
                        <button onClick={() => setSelected("Magazin")} className={`card  ${selected ==="Magazin" && "active"} ` }>
                            <div className="icon-text">
                                <img src={store} alt="" height={43} width={43} />
                                <span>Magazin</span>
                            </div>
                        </button>
                    </div>
                    <div className="my-20"></div>
                    <div className="ajouter-btns-containers">
                        <div className="ajouter-inscription-btns items-center">
                                <div className=" flex justify-center items-center">
                                    <div className=" mb-5">
                                        <img src={picklist} alt="" height={53} width={53} />
                                    </div>
                                   
                                    <p className=" info w-1/2 text-xs font-bold">
                                        Choisie le type d'entreprise qui correspond à votre organisation. 
                                        Simplement <span className=" text-red-600">click</span>  sure les differentes boites.
                                    </p>
                                </div>
                                <ButtonLink href={"/after-auth/steps-1"} isLock={selected==="" ? true : false} classes={"btn btn-small btn-green "} name={"Continue"} icon={<ChevronsRight/>} onClick={() => { }}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfterAuthQuestions;