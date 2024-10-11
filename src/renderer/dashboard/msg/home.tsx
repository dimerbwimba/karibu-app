
import { Paperclip } from "lucide-react";
import send_msg from "../../../../assets/send.png";
import ChatContainer from "./_components/chat_container";

export default function MSGhome(){
    return (
         <div className="message-container">
             <ChatContainer/>
             <div className="message-spacer">

             </div>
             <div className="message-form">
                 <div className=" message-form-container">
                     <img className="send" src={send_msg} alt="message" height={33} width={33} />
                     <textarea rows={1} className="textarea" placeholder="Tapez votre message ici"></textarea>
                     <Paperclip className="file"/>
                 </div>
             </div>
         </div>
       
    )
}