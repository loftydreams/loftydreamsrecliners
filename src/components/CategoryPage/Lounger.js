import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";

import "./LivingRoom.css";

const Lounger = ({ addItem, products }) => {
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
          {products.length &&
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
                  discount={discount}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollections,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lounger);
