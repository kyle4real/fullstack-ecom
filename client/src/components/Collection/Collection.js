import React, { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCollection } from "../../app/actions/collection-actions";
import { missingImg } from "../../assets";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SCardContainer } from "../UI/Containers/styles";
import { SFormControl, SInput, SLabel, STextArea } from "../UI/Form/styles";
import { STable, STBody, STBodyTR, STD } from "../UI/Table/styles";
import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";
import { onCollectionEdit } from "./helpers";
import {
    SCloseIcon,
    SCollection,
    SIconButtonWrap,
    SImage,
    SImageContainer,
    STDImage,
} from "./styles";

const Collection = () => {
    const dispatch = useDispatch();
    const { collection } = useSelector((state) => state.collection);

    const [collectionFormEdtis, setCollectionFormEdits] = useState(null);

    const onSaveHandler = () => {
        dispatch(
            updateCollection(collection._id, collectionFormEdtis, () => {
                setCollectionFormEdits(null);
            })
        );
    };
    const onCancelHandler = () => {
        setCollectionFormEdits(null);
    };

    const collectionEditHandler = (e) => {
        setCollectionFormEdits((prevState) => onCollectionEdit(prevState, e, collection));
    };

    const edits = !!collectionFormEdtis;
    return (
        <>
            <UnsavedChanges
                show={edits}
                // loading={loading}
                // saveDisabled={!edits}
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
                            const value = collectionFormEdtis?.["title"] || collection["title"];
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
                            const value =
                                collectionFormEdtis?.["description"] || collection["description"];
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
                <SCardContainer>
                    <SSectionHeadContainer>
                        <SSectionHeadTitle>Products</SSectionHeadTitle>
                    </SSectionHeadContainer>
                    {(() => {
                        const trArr = collection.products;
                        const displayKeys = ["title", "status"];
                        return (
                            <STable>
                                <STBody>
                                    {trArr.map((product, index) => {
                                        // const productId = product._id;
                                        const src = product.image?.url || missingImg;
                                        return (
                                            <Fragment key={index}>
                                                <STBodyTR>
                                                    <STD>{index + 1}</STD>
                                                    <STDImage>
                                                        <SImageContainer>
                                                            <SImage src={src} />
                                                        </SImageContainer>
                                                    </STDImage>
                                                    {displayKeys.map((key, index) => {
                                                        let value = product[key];
                                                        return <STD key={index}>{value}</STD>;
                                                    })}
                                                    <STDImage>
                                                        <SIconButtonWrap>
                                                            <SCloseIcon />
                                                        </SIconButtonWrap>
                                                    </STDImage>
                                                </STBodyTR>
                                            </Fragment>
                                        );
                                    })}
                                </STBody>
                            </STable>
                        );
                    })()}
                </SCardContainer>
            </SCollection>
        </>
    );
};

export default Collection;
