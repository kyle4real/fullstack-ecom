import React from "react";
import { useSelector } from "react-redux";

const Collections = () => {
    const { collections } = useSelector((state) => state.collections);

    return (
        <>
            {collections.map(({ title }) => (
                <>{title}</>
            ))}
        </>
    );
};

export default Collections;
