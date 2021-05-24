import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import { FaRobot } from "react-icons/fa";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  container: {
    maxWidth: "200px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "3px",
    fontSize: "13px",
  },
}));

const Message = ({ msg }) => {
  const classes = useStyles();

  return msg.ques ? (
    <div className={classes.ques}>
      <Avatar className={classes.small}>
        <PersonIcon />
      </Avatar>
      <div className={classes.container}>{msg.ques}</div>
    </div>
  ) : (
    <div className={classes.ans}>
      <Avatar className={classes.small}>
        <FaRobot />
      </Avatar>
      <div className={classes.container}>{msg.ans}</div>
    </div>
  );
};

export default Message;
