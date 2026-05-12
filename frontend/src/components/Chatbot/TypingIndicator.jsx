const TypingIndicator = () => {
  return (
    <div className="chat-row bot">
      <img 
        src="/agent-96.webp" 
        alt="Sana - Support Agent" 
        className="chat-avatar" 
        width={40}
        height={40}
        decoding="async"
        loading="lazy"
        sizes="40px"
      />
      <div className="typing-bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
