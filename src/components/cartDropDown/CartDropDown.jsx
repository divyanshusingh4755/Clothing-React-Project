import React from "react";
import "./CartDropDown.scss"
import CustomButton from "../CustomButton/CustomButton"

const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

export default CartDropDown;