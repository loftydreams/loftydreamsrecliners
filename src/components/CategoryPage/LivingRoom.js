import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";

import "./LivingRoom.css";
import Contactusform from "../Contactus/Contactusform";

const LivingRoom = ({ addItem, products }) => {
  const filteredProducts = products?.filter((product) => {
    return product.category
      ?.toLowerCase()
      .includes("LIVING ROOM RECLINERS".toLowerCase()) || product.category?.toLowerCase().includes("LOUNGER SOFA RECLINERS".toLowerCase());
  });

  return (
    <div className="single-seater">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "20px" }}>
        <Link color="inherit" to="/">
          HOME
        </Link>

        <Typography color="textPrimary">LIVING ROOM {"&"} LOUNGER RECLINERS </Typography>
      </Breadcrumbs>
      <br></br>
      <h2>LIVING ROOM {"&"} LOUNGER RECLINERS</h2>
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
      <Contactusform/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollections,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LivingRoom);
