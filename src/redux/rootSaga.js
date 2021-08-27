import { all, call } from "@redux-saga/core/effects";
import { fetchCollectionsStart } from "./shop/shopSaga";
import { userSagas } from "./user/userSaga";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}