import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Button from "../UI/Button/Button";

import Table from "../UI/Table/Table";
import TableContainer from "../UI/TableContainer/TableContainer";

const Collections = () => {
    const { url } = useRouteMatch();
    const history = useHistory();

    const { collections } = useSelector((state) => state.collections);

    const trArr = collections.reduce(
        (r, v) => [...r, { ...v, productCount: v.products.length }],
        []
    );
    const displayKeys = ["title", "productCount"];
    const thArr = ["Title", "Products"];

    const addButton = <Button onClick={() => history.push(`${url}/new`)}>Add Collection</Button>;
    return (
        <TableContainer
            placeholder={"Search Collections"}
            title={"Collections"}
            addButton={addButton}
        >
            <Table
                trArr={trArr}
                displayKeys={displayKeys}
                thArr={thArr}
                trLinks={{ to: `${url}`, target: "_id" }}
            />
        </TableContainer>
    );
};

export default Collections;
