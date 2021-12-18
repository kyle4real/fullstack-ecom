import { collectionActions } from "../slices/collection-slice";
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
