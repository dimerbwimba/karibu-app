// import { Bean, ChevronsLeft, ChevronsRight, Cog, HandCoins, Hospital, MessageCirclePlus, PlusCircle, StopCircle, TriangleAlert, UserCheck, UserPlus, XCircle } from "lucide-react";
import ButtonLink from "../components/tools/button-link";
import { useState } from "react";
import Button from "../components/tools/button";
import { ChevronsLeft, ChevronsRight, Cog, Hospital, MessageCirclePlus, TriangleAlert, UserPlus, XCircle } from "lucide-react";
import vide from "../../../assets/folder.png"
type Lists ={
    name:string,
    selected:boolean
}[]

export default function AfterAuthQuestions2() {
    const [lists, setLists] = useState<Lists>([]);
    return (
        <div className="AfterAuthQuestions">
            <div className="steps">
                <h1 className="welcome-title">
                    Choisie les outils à utiliser <br /> dans votre::::::
                </h1>
                <div className="type-of-tools">
                    <Button
                        isLock={!!lists?.filter((i)=>i.name === "Reception" )[0]?.selected}
                        icon={<UserPlus />}
                        name={"Reception"}
                        onClick={() => setLists([...lists, { name: "Reception", selected: true }])}
                        classes={`btn btn-full btn-green`}
                    />
                    <Button
                        isLock={!!lists.filter((i)=>i.name === "Consultation" )[0]?.selected}
                        icon={<Hospital />}
                        name={"Consultation"}
                        onClick={() => setLists([...lists, { name: "Consultation", selected: true }])}
                        classes="btn btn-full btn-green"
                    />
                     <Button
                        isLock={!!lists.filter((i)=>i.name === "Messagerie" )[0]?.selected}
                        icon={<MessageCirclePlus />}
                        name={"Messagerie"}
                        onClick={() => setLists([...lists, { name: "Messagerie", selected: true }])}
                        classes="btn btn-full btn-green"
                    />
                </div>
                <div className="steps-1-entreprise-list">
                    <div className="list">
                        <ul>
                            {
                                lists.length === 0 && 
                                <li className=""> 
                                    <img src={vide} alt="empty folder " height={70} width={70} /> 
                                    <span className="font-bold">Vous n'avez selectionné aucun outil.</span>
                                </li>
                            }
                            {
                                lists.length !== 0 && <li className=""> Vous avez choisie {lists.length} outils </li>
                            }
                            {
                                lists.map((outil, index) => <li key={index}>
                                    <div className="btn">
                                        <Cog /> 
                                        <span>{outil.name}</span>
                                    </div>
                                    
                                    <XCircle onClick={()=>{setLists(lists.filter((l)=> l.name !== outil.name))}} className="close-icon"/>
                                </li>)}
                        </ul>
                    </div>
                </div>
                <div className="ajouter-btns-containers">
                    <div className="ajouter-inscription-btns">
                        <ButtonLink 
                            href={"/after-auth/steps-1"} 
                            classes={"btn btn-small btn-blue "} 
                            name={""} 
                            icon={<ChevronsLeft />} 
                            onClick={() => { }} 
                            isLock={false} />
                        <ButtonLink 
                            href={"/dashboard"} 
                            classes={"btn btn-small btn-green  btn-px "} 
                            name={"Continue"} 
                            icon={<ChevronsRight />} 
                            onClick={() => { }} 
                            isLock={!!(lists.length <= 0)  } />
                    </div>
                </div>
            </div>
        </div>
    )
}