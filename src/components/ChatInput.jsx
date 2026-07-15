import { useState} from 'react'
import { chatbot } from 'supersimpledev';

export function ChatInput({chatMessages,setChatMessages,setToggle}) {
        
           const [inputText,setInputText]= useState("");
           const [bool,setbool]=useState(false);
            function saveInputText(event){
               setInputText(
                  event.target.value
               );
            }
            async function sendMessage(){
                if(chatMessages.length===0 ){
                    setToggle(false); 
                }
                if(bool || inputText===' '){
                    return ;
                }
                setbool(true);
                const newMessage=[
                    ...chatMessages,
                    {
                        message:inputText,
                        sender:"user",
                        id:crypto.randomUUID()
                    }
                ];
                setChatMessages(newMessage)
                setInputText("");
                setbool
                const response = await chatbot.getResponseAsync(inputText);
                setChatMessages([
                 ...newMessage,
                 {
                    message:response,
                    sender:"robot",
                    id:crypto.randomUUID()
                 }
               ]);
               setbool(false);  
            }
            function fun(event){
                 event.key==='Enter'&& sendMessage()
                 event.key==='Escape' && setInputText("")
            }
            return (
                <div className="chat-input-container">
                    <input
                        size="30"
                        type="text"
                        placeholder="send a message to chatBot"
                        onChange={saveInputText}
                        value={inputText}
                        onKeyDown={fun}
                        disabled={bool}
                        className="chat-input"
                    />
                    <button onClick={sendMessage} className="send-button" >Send</button>
                </div>
            );
        }