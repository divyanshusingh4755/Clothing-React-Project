import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionsTypes from "./shopTypes";

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));

        }).catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}