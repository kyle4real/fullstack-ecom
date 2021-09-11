import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHead from "../PageHead/PageHead";
import { SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    const location = useLocation();

    const isCollection = location.pathname.includes("collection");

    return (
        <SLayout>
            <Header />
            {isCollection && <PageHead />}
            <SPage>{children}</SPage>
            <Footer />
        </SLayout>
    );
};

export default Layout;
