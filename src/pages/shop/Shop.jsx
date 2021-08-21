import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionOverview/CollectionsOverview";
import Collection from "../collection/Collection";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { updateCollections } from "../../redux/shop/shopActions";
import WithSpinner from "../../components/withSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const maptDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, maptDispatchToProps)(Shop);