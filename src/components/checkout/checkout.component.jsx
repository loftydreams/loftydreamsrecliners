import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useStyles } from "./checkout.styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CheckoutItem from "../checkout-item/checkout-item.component";
import CheckoutTotal from "./checkout-total.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const CheckoutPage = ({ cartItems, total }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}  aria-current="page">
        Shopping Cart
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Payment Details
      </Link>
      <Link
        color="inherit"
        href="/components/breadcrumbs/"
        onClick={handleClick}
      
      >
        Order Complete
      </Link>
    </Breadcrumbs>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.checkoutTotal}>
        <CheckoutTotal total={total} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
