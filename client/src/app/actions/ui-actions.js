import { collectionsActions } from "../slices/collections-slice";
import { uiActions } from "../slices/ui-slice";
import * as api from "./../../api";

export const getProvisions = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.getCollectionsTitles();
            dispatch(collectionsActions.replaceCollectionsTitles({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setInitialLoading(false));
        }
    };
};
