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

export const createCollection = (collectionObj, callback) => {
    return async (dispatch) => {
        let collectionId = null;
        try {
            let { data } = await api.createCollection(collectionObj);
            const collectionCpy = { ...data.data };
            delete collectionCpy.products;
            data = { data: collectionCpy };
            dispatch(collectionsActions.addCollectionsTitle({ data }));

            collectionId = data.data._id;
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback(collectionId);
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

export const deleteCollection = (collectionId, callback) => {
    return async (dispatch) => {
        try {
            dispatch(collectionActions.setCollectionLoading(true));
            await api.deleteCollection(collectionId);
            dispatch(collectionsActions.deleteCollectionsTitle({ collectionId }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
            dispatch(collectionActions.setCollectionLoading(false));
        }
    };
};
