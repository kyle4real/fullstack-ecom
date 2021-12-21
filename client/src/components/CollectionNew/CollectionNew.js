import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCollection } from "../../app/actions/collection-actions";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SCardContainer } from "../UI/Containers/styles";
import { SFormControl, SInput, SLabel, STextArea } from "../UI/Form/styles";
import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";
import { SCollection } from "./styles";

const initialCollectionForm = {
    title: "",
    description: "",
};

const CollectionNew = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [collectionForm, setCollectionForm] = useState(initialCollectionForm);

    const collectionEditHandler = ({ target: { name, value } }) => {
        setCollectionForm((p) => ({ ...p, [name]: value }));
    };

    const onSaveHandler = () => {
        dispatch(
            createCollection(collectionForm, (collectionId) => {
                history.replace(`/account/admin/collections/${collectionId}`);
            })
        );
    };

    const onCancelHandler = () => history.goBack();

    const edits = useMemo(() => {
        const s1 = JSON.stringify(collectionForm);
        const s2 = JSON.stringify(initialCollectionForm);
        if (s1 === s2) return false;
        else return true;
    }, [collectionForm]);

    return (
        <>
            <UnsavedChanges
                show={true}
                // loading={loading}
                saveDisabled={!edits}
                onSave={onSaveHandler}
                onCancel={onCancelHandler}
            />
            <SCollection>
                <SCardContainer>
                    <SSectionHeadContainer>
                        <SSectionHeadTitle>Collection Information</SSectionHeadTitle>
                    </SSectionHeadContainer>
                    <SFormControl>
                        <SLabel>Title</SLabel>
                        {(() => {
                            const value = collectionForm.title;
                            return (
                                <SInput
                                    name={"title"}
                                    value={value}
                                    onChange={(e) => collectionEditHandler(e)}
                                />
                            );
                        })()}
                    </SFormControl>
                    <SFormControl>
                        <SLabel>Description</SLabel>
                        {(() => {
                            const value = collectionForm.description;
                            return (
                                <STextArea
                                    name={"description"}
                                    value={value}
                                    onChange={(e) => collectionEditHandler(e)}
                                />
                            );
                        })()}
                    </SFormControl>
                </SCardContainer>
            </SCollection>
        </>
    );
};

export default CollectionNew;
