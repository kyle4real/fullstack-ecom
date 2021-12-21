import React from "react";
import AdminProductNew from "../components/AdminProductNew/AdminProductNew";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminProductNewPage = () => {
    return <PageLayout layoutArr={[{ type: "contain", component: <AdminProductNew /> }]} />;
};

export default AdminProductNewPage;
