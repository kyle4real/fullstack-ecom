import React from "react";
import CollectionNew from "../components/CollectionNew/CollectionNew";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminCollectionNewPage = () => {
    return (
        <PageLayout
            layoutArr={[{ type: "contain", customSize: "sm", component: <CollectionNew /> }]}
        />
    );
};

export default AdminCollectionNewPage;
