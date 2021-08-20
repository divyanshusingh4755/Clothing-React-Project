import ShopActionsTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})