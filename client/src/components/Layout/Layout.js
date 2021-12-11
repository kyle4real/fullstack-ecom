import React from "react";

import CartDrawer from "../CartDrawer/CartDrawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { SLayout } from "./styles";

const Layout = ({ children }) => {
    return (
        <SLayout>
            <Header />
            <>{children}</>
            <Footer />
            <CartDrawer />
        </SLayout>
    );
};

export default Layout;
