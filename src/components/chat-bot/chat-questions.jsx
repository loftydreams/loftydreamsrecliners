import { chatQuestions } from "./questions";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "5px",
    display: "flex",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "5px",
    marginLeft: "5px",
  },
  question: {
    width: "100%",
    padding: "3px",
    fontSize: "13px",
    borderBottom: "1px solid black",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
});

let audio = new Audio("/preview.mp3")

  const start = () => {
    audio.play()
  }

const ChatQuestion = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar>
        <PersonIcon />
      </Avatar>
      <div onClick={start} className={classes.container}>
        {chatQuestions.length &&
          chatQuestions.map((question) => (
            <div
              key={question.id}
              className={classes.question}
              onClick={() => handleClick(question.id)}
            >
              {question.ques}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatQuestion;
