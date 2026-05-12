import { MessageCircle } from "lucide-react";
import "./chatlauncher.css";

const ChatLauncher = ({ onClick, isOpen }) => {
  return (
    <div className="chat-launcher-wrapper" onClick={onClick}>
      <div
        className={`chat-launcher-bubble ${
          isOpen ? "bubble-hidden" : "bubble-visible"
        }`}
      >
        <span className="launcher-text">
          Hi 👋 Need help with corporate gifting?
        </span>
      </div>

      <button className="chat-launcher" aria-label="Open chat">
        <img
          src="/agent-96.webp"
          alt="Sana - Support Agent"
          className="launcher-avatar"
          loading="lazy"
          decoding="async"
          width={54}
          height={54}
          sizes="54px"
        />
        <span className="launcher-icon">
          <MessageCircle size={14} strokeWidth={1.8} />
        </span>
      </button>
    </div>
  );
};

export default ChatLauncher;
