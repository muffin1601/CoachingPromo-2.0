const TypingIndicator = () => {
  return (
    <div className="chat-row bot">
      <img src="/agent.webp" className="chat-avatar" />
      <div className="typing-bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
