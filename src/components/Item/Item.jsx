import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import './Item.scss'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions"

function Item({ item, addItem }) {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton className="custom-button" onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Item);