import { useEffect, useState } from "react";

import Message from "./Message";

import { dataMessages } from "./dataMessages";

import "./app.css";

function App() {
  const [lastMessageId, setLastMessage] = useState(2);
  const [messages, setMessages] = useState(dataMessages);

  useEffect(() => {
    const thereAreMessagesToBeDisplayed = messages.find(
      message => message.visible === false
    );

    if (!thereAreMessagesToBeDisplayed) {
      return;
    }

    const timeout = setTimeout(() => {
      setMessages(
        messages.map(message => {
          if (message.id === lastMessageId) {
            setLastMessage(lastMessageId + 1);
            return {
              ...message,
              visible: true,
            };
          }
          return message;
        })
      );
    }, 4000);

    return () => {
      timeout;
    };
  }, [messages]);

  return (
    <div id="main">
      <div className="content">
        {messages.map(({ id, text, visible }) => (
          <Message key={id} visible={visible} text={text} />
        ))}
      </div>
    </div>
  );
}

export default App;
