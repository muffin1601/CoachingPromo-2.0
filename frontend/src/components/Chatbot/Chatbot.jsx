import { useEffect, useState, useRef } from "react";
import { X, ArrowRight } from "lucide-react";
import { chatSteps } from "./chatFlow";
import { submitLead } from "../../utils/submitLead";
import { validators } from "../../utils/validators";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import ChatLauncher from "./ChatLauncher";
import "./chatbot.css";

const sound = new Audio("/notify.mp3");

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [agentMode, setAgentMode] = useState(false);

  const chatEndRef = useRef(null);

  /* Open chatbot automatically once */
  useEffect(() => {
    if (!localStorage.getItem("chatOpened")) {
      setTimeout(() => {
        setOpen(true);
        localStorage.setItem("chatOpened", "yes");
      }, 6000);
    }
  }, []);

  /* Initial bot message */
  useEffect(() => {
    if (open && messages.length === 0) {
      botReply(chatSteps[0]);
    }
  }, [open]);

  /* Auto-scroll to bottom */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [messages, typing, open]);

  /* Mark user messages as seen */
  useEffect(() => {
    if (!typing) {
      setMessages(prev =>
        prev.map(m =>
          m.from === "user" ? { ...m, status: "seen" } : m
        )
      );
    }
  }, [typing]);

  const botReply = (stepData) => {
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      sound.play().catch(() => {});

      setMessages(prev => [
        ...prev,
        {
          from: "bot",
          text:
            typeof stepData.text === "function"
              ? stepData.text(formData)
              : stepData.text,
          options: stepData.options || null
        }
      ]);
    }, 900);
  };

  const send = async (value = input) => {
    if (!value || typing) return;

    setMessages(prev => [
      ...prev,
      { from: "user", text: value, status: "sent" }
    ]);

    setInput("");

    if (agentMode) return;

    const current = chatSteps[step];

    if (validators[current.key] && !validators[current.key](value)) {
      return botReply({
        text:
          current.key === "email"
            ? "That email doesn’t look right. Could you recheck?"
            : "Please enter a valid 10-digit phone number."
      });
    }

    const updatedData = { ...formData, [current.key]: value };
    setFormData(updatedData);

    if (step === chatSteps.length - 1) {
      await submitLead({ ...updatedData, source: "Chatbot" });
      return botReply({
        text: "Thanks! Our team will contact you shortly."
      });
    }

    setStep(prev => prev + 1);
    botReply(chatSteps[step + 1]);
  };

  return (
    <>
      <ChatLauncher 
        isOpen={open}
      onClick={() => setOpen(true)} />

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <img
                src="/agent-96.webp"
                alt="Sana - Support Agent"
                className="agent-avatar"
                width={44}
                height={44}
                decoding="async"
                loading="lazy"
                sizes="44px"
              />

              <div className="agent-info">
                <span className="chat-name">Sana · CoachingPromo</span>
                <span className="agent-status">● Online</span>
              </div>
            </div>

            <div className="chat-actions">
              <button onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <ChatBubble key={i} {...m} onOption={send} />
            ))}

            {typing && <TypingIndicator />}

            {/* Scroll anchor */}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message"
              onKeyDown={e => e.key === "Enter" && send()}
              disabled={typing}
            />
            <button
              onClick={() => send()}
              disabled={typing}
              aria-label="Send message"
              title="Send message"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
