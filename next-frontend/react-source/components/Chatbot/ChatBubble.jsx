import "./chatbubble.css";
const ChatBubble = ({ from, text, options, onOption }) => {
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

      </div>
    </div>
  );
};

export default ChatBubble;
