import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropDown/CartDropDown";

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>

                        :
                        <Link className="option" to="/sign-in">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ?
                    null
                    :
                    <CartDropDown />
            }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,   //state == rootReducer //user == userReducer
    hidden
})

export default connect(mapStateToProps)(Header);