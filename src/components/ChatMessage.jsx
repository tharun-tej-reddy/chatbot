import robot from '../assets/robot.png';
import user from '../assets/user.png';
export function ChatMessage({ message, sender }) {
            return (
                <div className={sender}>
                    {sender === "robot" && (
                        <img src={robot}  className="chat-message-profile" />
                    )}
                    <div className="chat-message-text">
                        {message}
                    </div>
                    {sender === "user" && (
                        <img src={user} width="50" className="chat-message-profile" />

                    )}
                </div>
            );
        }