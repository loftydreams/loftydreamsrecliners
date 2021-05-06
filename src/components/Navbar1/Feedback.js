import React from 'react'
import {Form, Button} from 'react-bootstrap';
import "./Feedback.css";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});
const Feedback = () => {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();


    return (
        <div className="feedback-wrapper">
            <h2>Feedback Form </h2> 

            <Form>
            <Form.Group controlId="formBasicEmail">
  
  
  <Form.Control type="name" placeholder="Name" />
</Form.Group>   
<Form.Group controlId="formBasicEmail">
  

  <Form.Control type="phone" placeholder="Contact" />
</Form.Group>           
  <Form.Group controlId="formBasicEmail">
  
  
    <Form.Control type="email" placeholder="Enter email" />
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
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  <Form.Group controlId="exampleForm.ControlTextarea1">

    <Form.Control as="textarea" rows={5} placeholder="Your Valuable Feedback"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Feedback
