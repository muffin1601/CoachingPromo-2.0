import "./chatbubble.css";
import { Check, CheckCheck } from "lucide-react";

const ChatBubble = ({ from, text, status, options, onOption }) => {
  return (
    <div className={`chat-row ${from}`}>
      <div className={`bubble ${from}`}>
        <p>{text}</p>

        {options && (
          <div className="options">
            {options.map(o => (
              <button key={o} onClick={() => onOption(o)}>
                {o}
              </button>
            ))}
          </div>
        )}

        {/* {from === "user" && (
          <span className="ticks">
            {status === "seen" ? (
              <CheckCheck size={14} strokeWidth={2} />
            ) : (
              <Check size={14} strokeWidth={2} />
            )}
          </span>
        )} */}
      </div>
    </div>
  );
};

export default ChatBubble;
