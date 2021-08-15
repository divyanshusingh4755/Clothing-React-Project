import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser   //state == rootReducer //user == userReducer
})

export default connect(mapStateToProps)(Header);