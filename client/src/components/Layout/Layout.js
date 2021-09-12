import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHead from "../PageHead/PageHead";
import BreadTrail from "../UI/BreadTrail/BreadTrail";
import { SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    const location = useLocation();

    const isCollection = location.pathname.includes("collections");
    const isProduct =
        location.pathname.includes("products") && !location.pathname.includes("account");

    return (
        <SLayout>
            <Header />
            {isCollection && <PageHead />}
            {isProduct && <BreadTrail />}
            <SPage size={isProduct && "xl"}>{children}</SPage>
            <Footer />
        </SLayout>
    );
};

export default Layout;
