import React from "react";
import Cart from "../components/Cart/Cart";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const CartPage = () => {
    return <PageLayout layoutArr={[{ type: "contain", component: <Cart /> }]} />;
};

export default CartPage;
