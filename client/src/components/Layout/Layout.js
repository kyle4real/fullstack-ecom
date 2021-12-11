import React from "react";
import { useLocation } from "react-router";

import CartDrawer from "../CartDrawer/CartDrawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
    const location = useLocation();

    const isAdminArea = location.pathname.includes("/account/admin");
    return (
        <SLayout>
            <Header />
            <SMain isAdminArea={isAdminArea}>{children}</SMain>
            <Footer />
            <CartDrawer />
        </SLayout>
    );
};

export default Layout;
