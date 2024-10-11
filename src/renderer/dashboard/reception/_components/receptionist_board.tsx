import { ChevronsLeft, ChevronsRight, PlusCircle } from "lucide-react";
import CardButtonLink from "../../../components/cards/card_button_link";
import Consultation from "../../../../../assets/doctor-appointment.png"
import ListPatients from "../../../../../assets/search.png"
import Special from "../../../../../assets/patient.png"
import Charts from "./charts";

const ReceptionistBoard = () => {
    return ( 
        <div className=" ">
          <div>
            <div className=" border-t bg-gray-50 mt-20 relative">
                <div className=" absolute -top-12 left-16 right-16">
                    <div className=" flex justify-center items-center space-x-5">
                        <CardButtonLink 
                            href="" 
                            icon={<img src={Consultation} alt="consultation" height={35} width={35} />} 
                            classes={"bg-red-200 h-52 w-52 rounded-lg flex justify-center items-center"} 
                            title="Ajouter Patient"/>
                        <CardButtonLink 
                            href="" 
                            icon={<img src={ListPatients} alt="patient" height={35} width={35}/>} 
                            classes={"bg-green-200 h-52 w-52 rounded-lg flex justify-center items-center"} 
                            title="Recherche"/>
                        <CardButtonLink 
                            href="" 
                            icon={<img src={Special} alt="speciale" height={35} width={35}/>} 
                            classes={"bg-blue-200 h-52 w-52 rounded-lg flex justify-center items-center"} 
                            title="Cas speciale"/>
                    </div>
                </div>
                <div className=" mt-52"></div>
                <div className=" flex justify-center">
                   <div className=" flex lg:w-2/3 w-full bg-gray-500flex">
                        <div className="w-1/2 ">
                            <h2 className=" pl-5 text-xl flex space-x-2 mb-2">
                                <img src={Consultation} alt="consultation" height={30} width={30} />
                                <span className=" font-bold">
                                    Consultations
                                </span>
                            </h2>
                            <div className=" border-r">
                                <ul className="">
                                   {
                                    [
                                        "Dimer Bwimba",
                                        "Daniel MUSEKURA",
                                        "Jean Luc BlaBla",
                                        "Emmanuel Mutamba",
                                        "Fiston Mutulanya",
                                    ].map((item,index)=>(
                                        <li key={index} className=" hover:bg-slate-100 px-5 py-2 border-t leading-tight">
                                            <span className=" font-semibold">{item}</span>
                                            <div className=" text-sm">
                                                <span className="pr-2">
                                                    Status :
                                                </span>

                                                <span>
                                                    En attente
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                }
                                </ul>
                                <div className="px-5 flex justify-between mb-5 border-t py-1">
                                    <button className="bg-green-700 px-3 rounded-lg">
                                        {/* <span>preview</span> */}
                                        <ChevronsLeft className=" text-gray-50"/>
                                    </button>
                                    <button className=" bg-green-700 px-3 rounded-lg">
                                        {/* <span>next</span> */}
                                        <ChevronsRight className=" text-gray-50"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div>
                                <h2 className=" pl-5 text-xl flex space-x-2 mb-2">
                                    <img src={Consultation} alt="consultation" height={30} width={30} />
                                    <span className=" font-bold">
                                        Statistique
                                    </span>
                                </h2>
                            </div>
                            <div>
                                <Charts/>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
     );
}
 
export default ReceptionistBoard;