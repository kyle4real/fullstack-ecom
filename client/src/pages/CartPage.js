import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const CartPage = () => {
    const { firstName } = useSelector((state) => state.auth);
    console.log(firstName);

    return (
        <PageLayout
            head={{ title: `${firstName ? `${firstName}'s` : "Your"} Cart` }}
            layoutArr={[{ type: "contain", component: <Cart /> }]}
        />
    );
};

export default CartPage;
