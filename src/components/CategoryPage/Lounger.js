import { connect } from "react-redux";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import { firestore } from "../../firebase";
import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";

import "./LivingRoom.css";

const Lounger = ({ addItem }) => {
  const [products, loading] = useCollectionDataOnce(
    firestore.collection("products"),
    { idField: "id" }
  );

  const filteredProducts = products?.filter((product) => {
    return product.category
      ?.toLowerCase()
      .includes("LOUNGER SOFA RECLINER".toLowerCase());
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
        <Typography color="textPrimary">LOUNGER SOFA RECLINERS </Typography>
      </Breadcrumbs>
      <br></br>
      <h2> LOUNGER SOFA RECLINERS</h2>
      <div className="top-cat-page">
        <p className="single-seater-content">
          Home Theater Recliners chair is a luxurious chair generally used in
          Multiplex, PVR Theater, concert, Hotel, and many more where they
          needed the new level of comfort. They take 5 times more than the
          normal charge for this chair. This chair comes only in the motorized
          mechanism. This chair also known as PVR Recliner Chairs as generally
          installed in most of the PVR Theater.
          <p className="sigle-seater-content"></p>
          Note:- Customization just in the following manners: Dimension, Style,
          Quality of Upholstery (leatherette, fabric, faux leather), Upholstery
          shading, Upholstery type (Leatherette, Suede Fabric, Molfino Fabric),
          Mechanism type (manual or electric), Wood, Foam type.
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

export default connect(null, mapDispatchToProps)(Lounger);
