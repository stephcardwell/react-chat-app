

const Message = ({ message }) => {
    return (
      <div className="chat-bubble">
        <img
          className="chat-bubble-avatar"
          src={message.avatar}
          alt={message.name}
        />
        <div className="chat-bubble-message">
          <p className="user-name">{message.name}</p>
          <p className="user-message">{message.text}</p>
        </div>
      </div>
    );
  };
  
  export default Message;