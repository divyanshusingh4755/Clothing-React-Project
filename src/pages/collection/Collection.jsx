import React from "react";
import "./collection.scss"

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import Item from "../../components/Item/Item";

const Collection = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className="collection">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (<Item key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);