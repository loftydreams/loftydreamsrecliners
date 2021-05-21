import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";

import "./LivingRoom.css";

const Manual = ({ addItem, products }) => {
  const filteredProducts = products?.filter((product) => {
    return product.category
      ?.toLowerCase()
      .includes("MANUAL RECLINER".toLowerCase());
  });

  return (
    <div className="single-seater">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "20px" }}>
        <Link color="inherit" href="/">
          HOME
        </Link>
        <Link color="inherit" href="/single-seater">
          SINGLE SEATER RECLINERS
        </Link>

        <Typography color="textPrimary">MANUAL RECLINERS </Typography>
      </Breadcrumbs>
      <br></br>
      <h2> MANUAL RECLINERS</h2>
      <div className="top-cat-page">
        <p className="single-seater-content">
          Electric Recliners have a reclining motorized mechanism that is run by
          mains AC power. The footrest and backrest on the chair in this area,
          work together, and might be appropriate for a user who wishes to rest
          during the day. Also, termed as Motorized Recliner chair as it
          operates with the help of motor.
          <br></br> <br></br>
          <span style={{ fontWeight: 600 }}>
            Customize your Electric Recliner With the assistance of Lofty Dreams
          </span>{" "}
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
          {products.length &&
            filteredProducts?.map((data) => {
              const { id, image1, price, discount, name, category, stock } =
                data;

              const sp = price - (price * discount) / 100;

              const item = {
                id: id,
                name: name,
                price: sp,
                imageUrl: image1,
                stock: stock,
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
                  stock={stock}
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

export default connect(mapStateToProps, mapDispatchToProps)(Manual);
