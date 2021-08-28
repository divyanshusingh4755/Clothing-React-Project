import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import userActionTypes from "../user/userTypes";
import { clearCart } from "./cartActions";


export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield (all([call(onSignOutSuccess)]))
}