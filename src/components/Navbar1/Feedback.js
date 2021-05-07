import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Feedback.css";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import firebase from "firebase/app";
import "firebase/firestore";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});
const Feedback = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [feedbackData, setFeedback] = React.useState("");
  const [rating, setRating] = React.useState(3);
  const [name,setName] = React.useState("Enter Name");
  const [email,setEmail] = React.useState('Enter Email');
  const [contact,setContact] = React.useState('Enter Contact');
  const classes = useStyles();
  
  const handleSubmit = (e) => {
 
    
    e.preventDefault();
     firebase
       .firestore()
       .collection("FeedBackFromUser")
       .add({
         feedback: feedbackData,
         rating: rating,
         name:name,
         email:email,
         contact:contact,
       })
       .then(() => {
         
         window.history.go(0);
       })
       .catch((error) => {
         alert(error.message);
       });

  }

  return (
    <div className="feedback-wrapper">
      <h2>Feedback Form </h2>

      <Form onSubmit ={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Name" 
           value={name}
           onChange={(e) => {
             setName(e.target.value);
           }}
          
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" >
          <Form.Control type="phone" placeholder="Contact" 
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" 
           value={email}
           onChange={(e) => {
             setEmail(e.target.value);
           }}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <span> Rating</span> <br></br>
        <div className={classes.root}>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            value={rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Your Valuable Feedback"
            value={feedbackData}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Feedback;
