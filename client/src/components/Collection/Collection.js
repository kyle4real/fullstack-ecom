import React, { Fragment } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { missingImg } from "../../assets";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SCardContainer } from "../UI/Containers/styles";
import { SFormControl, SInput, SLabel, STextArea } from "../UI/Form/styles";
import { STable, STBody, STBodyTR, STD } from "../UI/Table/styles";
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
    const { collection } = useSelector((state) => state.collection);

    const [collectionFormEdtis, setCollectionFormEdits] = useState(null);

    const collectionEditHandler = (e) => {
        setCollectionFormEdits((prevState) => onCollectionEdit(prevState, e, collection));
    };

    return (
        <>
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
