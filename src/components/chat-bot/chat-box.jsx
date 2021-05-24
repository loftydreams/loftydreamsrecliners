import { useRef, useState } from "react";
import ChatQuestion from "./chat-questions";

import { chatQuestions } from "./questions";
import { chatAnswers } from "./answers";

import { useStyles } from "./chat.styles";
import Message from "./message";

const ChatBox = () => {
  const classes = useStyles();
  const dummy = useRef();
  const [messages, setMessages] = useState([]);

  const handleClick = (id) => {
    const newMessages = [...messages];
    const q = chatQuestions.filter((ques) => ques.id === id);
    const a = chatAnswers.filter((ans) => ans.id === id);
    newMessages.push(q[0]);
    newMessages.push(a[0]);
    setMessages(newMessages);
    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h2>Have some questions!?</h2>
        <h3>What can we help you with?</h3>
      </div>
      <div className={classes.chat}>
        <ChatQuestion handleClick={handleClick} />
        {messages.length > 0 &&
          messages.map((message, idx) => <Message key={idx} msg={message} />)}
        <br />
        <br />
        <div ref={dummy} />
      </div>
    </div>
  );
};

export default ChatBox;
