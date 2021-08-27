import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebase.utils";
import { googleSignInFailure, googleSignInSuccess } from "./userAction";
import userActionTypes from "./userTypes";

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        const userRef = yield (call(createUserProfileDocument, user))
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({
            id: userSnapshot.id, ...userSnapshot.data()
        }))

    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
}