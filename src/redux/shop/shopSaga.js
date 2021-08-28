import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import ShopActionsTypes from "./shopTypes";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shopActions";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}