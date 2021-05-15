import React from 'react'
import "./Checkout.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Typography } from '@material-ui/core';
import {  AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import CheckoutTotal from './checkout-total.component';

const Checkout = () => {
    return (
        <div className="checkout">
            <Breadcrumbs separator=">" aria-label="breadcrumb">
                <Link color="inherit" href="/" aria-current="page">
                    <Typography>  Shopping Cart </Typography>
                </Link>
                <Link color="inherit" href="">
                    Payment Details
        </Link>
                <Link color="inherit" href="">
                    Order Complete
        </Link>
            </Breadcrumbs>
            <h4 className="checkout-heading"> YOUR SHOPPING CART </h4>
            <div className="checkout-wrapper">
                <div className="left-checkout">
                    <div className="checkout-image">
                        <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2013/08/Lofty-Dreams.jpg" alt="" ></img> 
                    </div>

                    <div className="checkout-description">
                          <h7> Eurick Manual Recliner Chair (Chocolate) </h7>
                          <br></br>
                          TYPE :  MANUAL RECLINERS
                          <br/>
                           <br/>
                          <span className=""> Remove Item </span>
                          <span className=""> View  Item </span>
                        <br>
                        </br>
                        <AiOutlineMinusCircle className="qt-icon"/> 1 <AiOutlinePlusCircle className="qt-icon"/>

                     

                    </div>

                    <div className="checkout-price">
            
                           <span className="subtotal"> Price: $17,700</span>
                    </div>
                </div>
                <div className="right-checkout">
                  <CheckoutTotal/>
                
              
                   
             
                </div>

            </div>
        </div>
    )
}

export default Checkout
