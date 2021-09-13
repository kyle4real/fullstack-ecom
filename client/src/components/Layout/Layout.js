import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import CartDrawer from "../CartDrawer/CartDrawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHead from "../PageHead/PageHead";
import { SDesktopWrapper } from "../ProductPage/styles";
import BreadTrail from "../UI/BreadTrail/BreadTrail";
import { SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    const location = useLocation();
    const layoutRef = useRef();

    const isCollection = location.pathname.includes("collections");
    const isProduct =
        location.pathname.includes("products") && !location.pathname.includes("account");

    return (
        <SLayout ref={layoutRef}>
            <Header />
            {isCollection && <PageHead />}
            <SPage size={isProduct && "xl"} isProduct={isProduct}>
                <SDesktopWrapper>{isProduct && <BreadTrail />}</SDesktopWrapper>
                {children}
            </SPage>
            <Footer />
            <CartDrawer layoutRef={layoutRef} />
        </SLayout>
    );
};

export default Layout;
