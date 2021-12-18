import { collectionsActions } from "../slices/collections-slice";
import * as api from "./../../api";

export const getCollections = ({ onComplete, onError }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getCollections();
            dispatch(collectionsActions.replaceCollections({ data }));
        } catch (error) {
            onError();
        } finally {
            onComplete();
        }
    };
};
