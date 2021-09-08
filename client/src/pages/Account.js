import React from "react";
import ProductTable from "../components/Admin/ProductTable/ProductTable";

const Account = () => {
    const isAdmin = true;
    return <>{isAdmin && <ProductTable />}</>;
};

export default Account;
