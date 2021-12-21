import { collectionActions } from "../slices/collection-slice";
import { collectionsActions } from "../slices/collections-slice";
import * as api from "./../../api";

export const getCollection = (collectionId, { onComplete, onError }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getCollection(collectionId);
            dispatch(collectionActions.replaceCollection({ data }));
        } catch (error) {
            onError(error);
        } finally {
            onComplete();
        }
    };
};

export const updateCollection = (collectionId, collectionObj, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.updateCollection(collectionId, collectionObj);
            const updateKeys = Object.keys(collectionObj);
            dispatch(collectionActions.updateCollection({ data, updateKeys }));
            // also, update the collection in collectionsTitles
            dispatch(collectionsActions.updateCollectionsTitles({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
        }
    };
};
