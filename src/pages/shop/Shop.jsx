import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collectionOverview/CollectionOverviewContainer";
import { connect } from "react-redux"
import { fetchCollectionStartAsync } from "../../redux/shop/shopActions";
import CollectionPageContainer from "../collection/CollectionContainer";

class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}


const maptDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync())
})


export default connect(null, maptDispatchToProps)(Shop);