import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionOverview/CollectionsOverview";
import Collection from "../collection/Collection";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { updateCollections } from "../../redux/shop/shopActions";

class Shop extends Component {
    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        )
    }
}

const maptDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, maptDispatchToProps)(Shop);