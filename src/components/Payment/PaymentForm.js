import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const PaymentForm = ({ handleSubmit, loading }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  return (
    <div className={classes.root}>
      <form
        onSubmit={(e) =>
          handleSubmit(e, {
            customerData: { name, email, phone },
            shippingAddress: { address, city, state, pincode },
          })
        }
        className={classes.form}
        autoComplete="off"
      >
        <h3 className={classes.gap}>Payment Test</h3>
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="text"
          name="name"
          label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="tel"
          name="phoneno"
          label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          variant="outlined"
          inputProps={{ pattern: "[0-9]{10}" }}
        />
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="text"
          name="address"
          label="Your shipping address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="text"
          name="city"
          label="Your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="text"
          name="state"
          label="Your state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.gap}
          required
          type="number"
          name="pincode"
          label="Your pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          variant="outlined"
        />
        <Button
          className={classes.gap}
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Pay now
        </Button>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    placeItems: "center",
  },
  form: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gap: {
    margin: "10px 0",
  },
}));

export default PaymentForm;
