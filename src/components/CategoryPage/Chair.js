import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";
import Card from "./Card";

import "./LivingRoom.css";

const chair = ({ addItem, products }) => {
  const filteredProducts = products?.filter((product) => {
    return product.category
      ?.toLowerCase()
      .includes("CHAIR".toLowerCase());
  });

  return (
    <div className="single-seater">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "20px" }}>
        <Link color="inherit" to="/">
          HOME
        </Link>

        <Typography color="textPrimary">CHAIRS</Typography>
      </Breadcrumbs>
      <br></br>
      <h2>CHAIRS</h2>
      <div className="top-cat-page">
        <p className="single-seater-content">
        Buy Arm Chairs and loungers Online for style and comfort
          <br /> Arm chairs are now one of the most stylish chairs that are available in 
          today's market. The different fabrics used in crafting these armrest chairs can 
          fulfil each person's requirement and make arm chair most comfortable piece for them.
          You can relax on it after working for hours in the kitchen, reading your favourite
          book before you go to your bed at night. Buy lofty dreams chair online and enhance 
          the aesthetics of any room they are placed in. These wooden chairs with arms can 
          explicitly compliment the decor of each and every room and add to your comfort and ease
          </p>
          <p>Choose Comfortable Arm Chairs For living room Online
          <br/>Many people are much concern and very precise in choosing 
          wooden arm chairs for living room. The collection of armrest chair 
          at Lofty dreams is adorned with stylish prints and patterns that will 
          enhance the grandeur of living room in which you wish to reside it. 
          You can add the essence of vibrancy by choosing a wooden arm chair for 
          living room that comes patched with a group of varied prints. You can 
          add to its grace and your comfort by placing a cushion over these wooden 
          armchairs to make it resemble like one of the seat sofas. You just need 
          to browse through our assortment of distinctive designer chairs with 
          arms and choose the one that fits into your slot of requirement and 
          suits your taste the best.</p>
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
        <p className="points">Points to consider while buying Arm chairs Online in India
          <br /> Convenient seating furniture unit, arm chair provide comfortable and fantastic decor
          to space. So, consider these points when you buy wooden arm chairs online in alluring designs and colours.
          <br/> 1. Consider the purpose of having the arm chair online in the home. Do you want to use it as a seating
          unit or simply to decorate the space? A high armrest chair with backrest is a good option for a comparatively
          upright seating position. While the low backrest chairs with arms are the best alternative to decorate the living
          area amazingly.
          <br/>2. The appeal of the wooden arm chairs lies in their versatility. So consider the available space and 
          functionality of the room and decide number of chair online you need to decorate your room.
          <br/>3. Do you want to create harmony in the space with same style and a colour or want to have a statement piece?
          Then, try these beautifully crafted chairs with arms.
          <br/>4. Arm chairs for living room are the base to have a comfortable and decorative space in the house. So before 
          buying consider the dimension of the armrest chair. Measure them against the sofa to have a perfect size unit.
          <br/>5. Consider the upholstery material of the wooden arm chairs for living room to give the space a fun and trendy
          look. Chairs in cotton fabric come in wide variety of colours and patterns but are not easy to clean. If want the stylish
          and classy look, consider armchair in floral fabric. Always take into account your climate while buying upholstered arm chairs.
          <br/>Buy arm chairs online in India at affordable prices from Lofty Dreams and have the perfect solid wood armrest chair and get 
          shipping in Bangalore, Mumbai, Delhi, Pune, Noida, Hyderabad, Jaipur, Chennai, Indore, Ahmedabad, Gurugram or Across India.
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(chair);
