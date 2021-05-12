import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ques: {
    margin: "5px",
    display: "flex",
    flexDirection: "row",
    "& div": {
      marginLeft: "5px",
    },
  },
  ans: {
    margin: "5px",
    display: "flex",
    flexDirection: "row-reverse",
    "& div": {
      marginRight: "5px",
    },
  },
  container: {
    maxWidth: "150px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "3px",
    fontSize: "13px",
  },
});

const Message = ({ msg }) => {
  const classes = useStyles();

  return msg.ques ? (
    <div className={classes.ques}>
      <Avatar>
        <PersonIcon />
      </Avatar>
      <div className={classes.container}>{msg.ques}</div>
    </div>
  ) : (
    <div className={classes.ans}>
      <Avatar>
        <PersonIcon />
      </Avatar>
      <div className={classes.container}>{msg.ans}</div>
    </div>
  );
};

export default Message;
