import { connect } from "react-redux";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Button } from "@material-ui/core";

import { firestore } from "../../firebase";
import { addItem } from "../../redux/cart/cart.actions";

import "./LivingRoom.css";

const LivingRoom = ({ addItem }) => {
  const [products, loading] = useCollectionDataOnce(
    firestore.collection("products"),
    { idField: "id" }
  );

  const filteredProducts = products?.filter((product) => {
    return product.category
      ?.toLowerCase()
      .includes("LIVING ROOM RECLINERS".toLowerCase());
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
        <Typography color="textPrimary">LIVING ROOM RECLINERS </Typography>
      </Breadcrumbs>
      <br></br>
      <h2> LIVING ROOM RECLINERS</h2>
      <div className="top-cat-page">
        <p className="single-seater-content">
          Living Room Recliners have had a very miracle history in home design
          over the past several decades. From past decades to today, recliner
          manufacturers come up with more functional, more beautiful, and more
          comfortable designs for living room furnishing.
          <br />
          Think a picture in your mind and consider that your living room is
          without Sofa Set. Would your living room be recognized without Sofa?
          Living room recliner furniture is a significant piece of your home
          style and makes your home, a home. Presently, you may ask for what
          reason would I buy drawing room furniture from any online store? Lofty
          Dreams gives you unlimited options to browse a from our wide range of
          living room recliner furniture that will decorate your living room.
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
                <div className="new-card-wrapper" key={id}>
                  <img src={image1} alt="Product img" />
                  <span>{category}</span>
                  <h5>{name} </h5> <del>₹{price}</del>
                  <span style={{ fontSize: "14px" }}>
                    ₹{sp.toFixed(2)}
                  </span>{" "}
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => addItem(item)}
                  >
                    Add to Basket
                  </Button>
                </div>
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

export default connect(null, mapDispatchToProps)(LivingRoom);
