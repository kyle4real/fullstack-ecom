import React from "react";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminOrdersPage = () => {
    return <PageLayout layoutArr={[{ type: "contain", component: <>Orders</> }]} />;
};

export default AdminOrdersPage;
