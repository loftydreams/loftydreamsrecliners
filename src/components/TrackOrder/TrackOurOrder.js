import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

import { useStyles } from "./TrackOrder.styles";
import { auth, firestore } from "../../firebase";
import Loader from "../Loader/Loader";

const TrackOurOrder = () => {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  const [orders, loading, error] = useCollectionDataOnce(
    user.uid && firestore.collection("orders").where("userId", "==", user.uid),
    { idField: "id" }
  );

  if (loading && !error) {
    return <Loader />;
  }

  if (orders && !loading && !error) {
    return (
      <div className={classes.root}>
        <h1>View Your Orders</h1>
        {orders.map((order) => (
          <div key={order.id}>
            <p>Order Id: {order.id}</p>
            <p>Order total price: {order.totalPrice}</p>
            <p>Payment status: {order.paymentStatus.resultStatus}</p>
            <p>
              <Link to={`/payment/status?orderId=${order.id}`}>
                View Order Details
              </Link>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <h1>Error 400: Something went wrong!</h1>
    </div>
  );
};

export default TrackOurOrder;
