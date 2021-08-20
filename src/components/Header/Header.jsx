import React from "react";
// import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropDown/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header_styled";

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/" >
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>

                        :
                        <OptionLink to="/sign-in">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ?
                    null
                    :
                    <CartDropDown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,   //state == rootReducer //user == userReducer
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);