const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer