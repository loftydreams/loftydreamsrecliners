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
    backgroundColor: "black",
  },
  question: {
    width: "100%",
    padding: "8px",
    fontSize: "13px",
    color: "white",
    backgroundColor: "black",
    borderBottom: "2px solid white",
    cursor: "pointer",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
});

let audio = new Audio("/1_second_tone.mp3");

const start = () => {
  audio.play();
};

const ChatQuestion = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar style={{ color: "white", backgroundColor: "black" }}>
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
