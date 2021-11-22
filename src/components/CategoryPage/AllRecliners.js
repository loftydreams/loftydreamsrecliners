import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";
import Contactusform from "../Contactus/Contactusform";

const AllRecliners = ({ addItem, products , trending }) => {
  

  return (
    <div className="single-seater">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "20px" }}>
        <Link color="inherit" to="/">
          HOME
        </Link>

        <Typography color="textPrimary">ALL RECLINERS</Typography>
      </Breadcrumbs>
      <br></br>
      <h2>ALL RECLINERS</h2>
      <div className="bottom-cat-page">
        <div className="living-room-1">
          {products.length &&
            products?.map((data) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(AllRecliners);
