import { Link, useLocation } from "react-router-dom";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { useStyles } from "./PaymentPage.styles";
import { firestore } from "../../firebase";
import Loader from "../Loader/Loader";

const PaymentPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const paymentStatus = new URLSearchParams(location.search).get("success");
  const orderId = new URLSearchParams(location.search).get("orderId");
  const [value, loading, error] = useDocumentData(
    firestore.collection("orders").doc(orderId),
    { idField: "id" }
  );

  if (loading && !error) {
    return <Loader />;
  }

  if (!value && !loading && error) {
    return (
      <div className={classes.root}>
        <h4>Something went wrong!</h4>
      </div>
    );
  }

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <div className={classes.root}>
      <h1>Order Status</h1>
      {paymentStatus &&
        (paymentStatus === "true" ? (
          <h4>Payment is successful.</h4>
        ) : (
          <h4>Payment failed!</h4>
        ))}
      <div>
        <h4>Order Details:</h4>
        <p>Order ID: {value.id}</p>
        <p>Total price: {formattedPrice(value.totalPrice)}</p>
        <h4>Customer Details:</h4>
        <p>Name: {value.customerDetails.name}</p>
        <p>Email: {value.customerDetails.email}</p>
        <p>Phone number: {value.customerDetails.phone}</p>
        <h4>Purchased Products:</h4>
        {value.items.map((product) => (
          <div key={product.id}>
            <p>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </p>
            <p>
              <span>Price: {formattedPrice(product.price)}</span> x{" "}
              <span>{product.quantity}</span>
            </p>
          </div>
        ))}
        <h4>Shipping Address:</h4>
        <p>
          {`${value.shippingAddress.address}, ${value.shippingAddress.city}, ${value.shippingAddress.state}`}
          <br /> {`Pincode: ${value.shippingAddress.pincode}`}
        </p>
        <h4>Payment Status:</h4>
        <p>{`${value.paymentStatus.resultStatus} - ${value.paymentStatus.resultMsg}`}</p>
      </div>
    </div>
  );
};

export default PaymentPage;
