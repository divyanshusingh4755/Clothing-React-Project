import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionOverview/CollectionsOverview";
import Collection from "../collection/Collection";
import { connect } from "react-redux"
import { fetchCollectionStartAsync } from "../../redux/shop/shopActions";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();

    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const maptDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync())
})


export default connect(mapStateToProps, maptDispatchToProps)(Shop);