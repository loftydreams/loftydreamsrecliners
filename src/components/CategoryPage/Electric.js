import { connect } from "react-redux";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import { firestore } from "../../firebase";
import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";

import "./LivingRoom.css";

const Electric = ({ addItem }) => {
  const [products, loading] = useCollectionDataOnce(
    firestore.collection("products"),
    { idField: "id" }
  );

  const filteredProducts = products?.filter((product) => {
    return product.category
      ?.toLowerCase()
      .includes("ELECTRIC RECLINER".toLowerCase());
  });

  return (
    <div className="single-seater">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "20px" }}>
        <Link color="inherit" href="/">
          HOME
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          RECLINERS
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          SINGLE SEATER RECLINERS
        </Link>
        <Typography color="textPrimary">ELECTRIC RECLINERS </Typography>
      </Breadcrumbs>
      <br></br>
      <h2> ELECTRIC RECLINERS</h2>
      <div className="top-cat-page">
        <p className="single-seater-content">
          Electric Recliners have a reclining motorized mechanism that is run by
          mains AC power. The footrest and backrest on the chair in this area,
          work together, and might be appropriate for a user who wishes to rest
          during the day. Also, termed as Motorized Recliner chair as it
          operates with the help of motor.
          <br></br> <br></br>{" "}
          <span style={{ fontWeight: 600 }}>
            {" "}
            Customize your Electric Recliner With the assistance of Lofty Dreams{" "}
          </span>
          <p className="sigle-seater-content"></p>
          If your requirement doesn’t meet with our product specification then
          we offer you another way to fulfill your requirement. Just make
          details with all the dimensions and design and contact us with it.
          Lofty Dreams will make your recliner with the help of your details.
          <br></br> <br></br>
          Note:- Any alteration or customization is possible just in the
          accompanying manners: Dimension, Style, Upholstery shading, Upholstery
          type (Leatherette, Suede Fabric, Molfino Fabric), Quality of
          Upholstery (fabric, leatherette, faux leather), Mechanism type (manual
          or electric), Wood, Foam type.
        </p>
      </div>
      <div className="bottom-cat-page">
        <div className="living-room-1">
          {!loading &&
            filteredProducts?.map((data) => {
              const { id, image1, price, discount, name, category } = data;

              const sp = price - (price * discount) / 100;

              const item = {
                id: id,
                name: name,
                price: sp,
                imageUrl: image1,
              };

              return (
                <Card
                  key={id}
                  id={id}
                  image1={image1}
                  price={price}
                  name={name}
                  category={category}
                  item={item}
                  sp={sp}
                  addItem={addItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Electric);
