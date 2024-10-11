
import send_msg from "../../../../assets/send.png";

const ChatForm = () => {
    return ( 
        <div className="message-form">
        <div className=" message-form-container">
            <img className="send" src={send_msg} alt="message" height={33} width={33} />
            <textarea rows={1} className="textarea" placeholder="Tapez votre message ici"></textarea>
            {/* <Paperclip className="file"/> */}
        </div>
    </div>
     );
}
 
export default ChatForm;