import React from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHead from "../PageHead/PageHead";
import { SDesktopWrapper, SMobileWrapper } from "../ProductPage/styles";
import BreadTrail from "../UI/BreadTrail/BreadTrail";
import { SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    const { isMin } = useWindowSize({ size: "sm" });
    const location = useLocation();

    const isCollection = location.pathname.includes("collections");
    const isProduct =
        location.pathname.includes("products") && !location.pathname.includes("account");

    return (
        <SLayout>
            <Header />
            {isCollection && <PageHead />}
            <SPage size={isProduct && "xl"} isProduct={isProduct}>
                <SDesktopWrapper>{isProduct && <BreadTrail />}</SDesktopWrapper>
                {children}
            </SPage>
            <Footer />
        </SLayout>
    );
};

export default Layout;
