import React from "react";
import { useSelector } from "react-redux";

const Collection = () => {
    const { collection } = useSelector((state) => state.collection);

    return <div>{collection.title}</div>;
};

export default Collection;
