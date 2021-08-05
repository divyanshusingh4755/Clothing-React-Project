import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss"


class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: "Hats",
                    linkUrl: '',
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1
                },
                {
                    title: "Jackets",
                    linkUrl: '',
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 1
                },
                {
                    title: "Sneakers",
                    linkUrl: '',
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 1
                },
                {
                    title: "Womens",
                    linkUrl: '',
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: 'large',
                    id: 1
                },
                {
                    title: "Mens",
                    linkUrl: '',
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    size: 'large',
                    id: 1
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;