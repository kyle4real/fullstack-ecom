import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "../UI/Table/styles";

const Collections = () => {
    const history = useHistory();
    const { url } = useRouteMatch();

    const { collections } = useSelector((state) => state.collections);

    const collectionClickHandler = (id) => history.push(`${url}/${id}`);

    const trArr = collections;
    const displayKeys = ["title", "products"];

    return (
        <>
            <STable>
                <STHead>
                    <STHeadTR>
                        <STH />
                        <STH>Title</STH>
                        <STH>Product Count</STH>
                    </STHeadTR>
                </STHead>
                <STBody>
                    {trArr.map((collection, index) => {
                        const collectionId = collection._id;
                        return (
                            <Fragment key={index}>
                                <STBodyTR
                                    style={{ cursor: "pointer" }}
                                    onClick={() => collectionClickHandler(collectionId)}
                                >
                                    <STD>{index + 1}</STD>
                                    {displayKeys.map((key, index) => {
                                        let value = collection[key];
                                        if (key === "products") value = value.length;
                                        return <STD key={index}>{value}</STD>;
                                    })}
                                </STBodyTR>
                            </Fragment>
                        );
                    })}
                </STBody>
            </STable>
        </>
    );
};

export default Collections;
