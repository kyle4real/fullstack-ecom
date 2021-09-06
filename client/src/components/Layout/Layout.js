import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    return (
        <SLayout>
            <Header />
            <SPage>{children}</SPage>
            <Footer />
        </SLayout>
    );
};

export default Layout;
