// import { AlertOctagon, Check, CheckCircle, ChevronLeft, ChevronsLeft, ChevronsRight, Hospital, PlusCircle, PlusSquare, SearchX, Send, XCircle } from "lucide-react";
import { useState } from "react";

//components
import Input from "../components/tools/input";
import Button from "../components/tools/button";
import ButtonLink from "../components/tools/button-link";

//modals
import { ToolsModal } from "../components/tools/modals/tools-modal";

import { AlertOctagon, CheckCircle, ChevronsLeft, ChevronsRight, PlusSquare, Send, XCircle } from "lucide-react";

import hospital from "../../../assets/hospital.png"
import message from "../../../assets/message.png";
import send from "../../../assets/send.png";
type Ese={
    nom:string;
}[]
import vide from "../../../assets/folder.png"
const AfterAuthQuestions1 = () => {
    const [entreprise, setEntreprise] = useState<string>("")
    const [entreprises, setEntreprises] = useState<Ese>([])
    const [selectedEse, setSelectedEse] = useState<string>("")
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div className="AfterAuthQuestions">
            <div className="steps">
                <h1 className="welcome-title">
                    Ajouter le nom de l'entreprise
                </h1>
                <div className="">
                  
                    <p className="info">
                        Si l'entreprise exist déjà , cliquez sur l'entreprise <br /> en question
                    </p>
                </div>
                <div className="steps-1-input">
                    <Input name={"Nom de l'entreprise"} placeholder={"Nom de votre entreprise"} onChange={(e:any) => setEntreprise(e)} />
                    <div style={{ marginTop: "24px" }}>
                        <Button name={""} icon={<PlusSquare />} onClick={() => { setEntreprises([...entreprises, { nom: entreprise }]) }} classes={"btn btn-small btn-blue"} isLock={entreprise === "" ? true : false} />
                    </div>
                </div>
                <div className="steps-1-entreprise-list">
                    <div className="list">
                            <p className="alert">
                                <AlertOctagon className="red"/>
                               <span>L'entreprise selectionner existe déjà <br/> <span onClick={()=> setIsModalOpen(true)} className="anchor">cliquez ici</span> pour faire une demande d'adhésion </span> 
                            </p>
                            {entreprises.length == 0 &&
                                <p className=" flex justify-center items-center flex-col">
                                    <img src={vide} alt="" height={83} width={83} />
                                    <span>
                                        Recherche d'entreprise vide
                                    </span>
                                </p>
                            }
                        <ul>

                            {entreprises.map((item, index) =>
                                <li key={index} onClick={() => setSelectedEse(item.nom)} className={`${selectedEse === item.nom && "active"}`}>
                                    <div className="btn">
                                        <div className="">
                                            <img src={hospital} alt="" height={23} width={23} />
                                        </div>
                                        <span className="font-bold">{item.nom}</span>
                                    </div>
                                    <XCircle onClick={()=> {setEntreprises(entreprises.filter((i)=>i.nom !==item.nom));setEntreprise("")}} className="close-icon" />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <ToolsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Demande d'adhésion à une organisation"
                    footer={<button onClick={() => setIsModalOpen(false)}>
                        <XCircle/>
                        </button>}
                >
                    <div className="">
                        <div className="info flex items-start space-x-4">
                        <div className=" mt-1">
                            <img src={send} alt="send-logo" height={80} width={80} />
                        </div>
                        <p className="text-md">
                            Entrée votre adresse mail correctement. 
                            Puis attend la reponse du super administrateur. 
                            Si la reponse et favorable nous vous enverons la suite sur votre adresse mail.
                            Merci d'utiliser KARIBU APP.
                        </p>
                        </div>
                    </div>
                    <div className="btn">
                        <Input onChange={() => { }} name={"Votre adresse mail"} placeholder={"example : example@gmail.com"} />
                        <div style={{marginTop:"24px"}}>
                            <Button name={""} onClick={() => { }} classes={"btn btn-small btn-green"} icon={<Send />} isLock={false} />
                        </div>
                    </div>
                    <div>
                        <div className="btn success">
                           <CheckCircle/> 
                           <span>Message envoyer correctement, slvpl attendez la reponse du super administrateur.</span>
                        </div>
                    </div>
                </ToolsModal>
                <div className="ajouter-btns-containers">
                    <div className="ajouter-inscription-btns">
                        <ButtonLink 
                            href={"/after-auth/steps"} 
                            classes={"btn btn-small btn-blue "} 
                            name={""} 
                            icon={<ChevronsLeft />} 
                            onClick={() => { }} isLock={false} />
                        <ButtonLink 
                            href={"/after-auth/steps-2"} 
                            classes={"btn btn-small btn-green  btn-px "} 
                            name={"Continue"} icon={<ChevronsRight />} 
                            onClick={() => { }} 
                            isLock={!!(selectedEse === "")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AfterAuthQuestions1;