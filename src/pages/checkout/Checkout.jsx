import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/stripeButton/StripeButton";

const Checkout = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span >Description</span>
                </div>
                <div className="header-block">
                    <span >Quantity</span>
                </div>
                <div className="header-block">
                    <span >Price</span>
                </div>
                <div className="header-block">
                    <span >Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem item={cartItem} key={cartItem.id} />
                )
            }

            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/24 - CVV: 424
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);