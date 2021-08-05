import React, { Component } from "react";
import Preview from "../../components/Preview/Preview";
import { SHOP_DATA } from "./ShopData"

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <Preview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;