import React from "react";
import "./CartDropDown.scss"
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../cartItem/cartItem";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);