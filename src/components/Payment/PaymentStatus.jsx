import { useStyles } from "./PaymentPage.styles";

const PaymentPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Payment Status</h1>
    </div>
  );
};

export default PaymentPage;
