import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";
import ChatBox from "./chat-box";

import { useStyles } from "./chat.styles";

const ChatContainer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.icon}>
      {open && <ChatBox />}
      <Fab size="medium" onClick={() => setOpen(!open)} >
        {open ? <CloseIcon /> : <ChatIcon />}
      </Fab>
    </div>
  );
};

export default ChatContainer;
