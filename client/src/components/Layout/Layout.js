import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHead from "../PageHead/PageHead";
import { SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    const location = useLocation();

    const isCollection = location.pathname.includes("collections");
    const isProduct = location.pathname.includes("products");

    return (
        <SLayout>
            <Header />
            {isCollection && <PageHead />}
            <SPage size={isProduct && "xl"}>{children}</SPage>
            <Footer />
        </SLayout>
    );
};

export default Layout;
